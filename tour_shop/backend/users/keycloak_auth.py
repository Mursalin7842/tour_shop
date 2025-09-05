# This file is a placeholder to show how you would implement Keycloak authentication.
# You would need a library like `drf-keycloak-auth` or write your own.

from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
import jwt
from django.conf import settings
from .models import User

class KeycloakAuthentication(BaseAuthentication):
    """
    Custom authentication backend for Keycloak.
    1. It gets the token from the Authorization header.
    2. It decodes the token using the realm's public key.
    3. It fetches or creates a user in the Django DB.
    4. CRUCIALLY, it checks if the seller is approved.
    """
    def authenticate(self, request):
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return None

        token = auth_header.split(' ')[1]

        try:
            # Decode the token
            decoded_token = jwt.decode(
                token,
                settings.KEYCLOAK_PUBLIC_KEY,
                algorithms=["RS256"],
                audience=settings.KEYCLOAK_CLIENT_ID,
                issuer=f"{settings.KEYCLOAK_SERVER_URL}realms/{settings.KEYCLOAK_REALM}"
            )
            
            username = decoded_token.get('preferred_username')
            if not username:
                raise AuthenticationFailed('Invalid token: username missing.')

            # Get or create the user in Django's DB
            user, created = User.objects.get_or_create(
                username=username,
                defaults={
                    'email': decoded_token.get('email'),
                    'first_name': decoded_token.get('given_name'),
                    'last_name': decoded_token.get('family_name'),
                    # Default new users from Keycloak as unapproved sellers
                    'role': User.Role.SELLER,
                    'is_approved': False,
                }
            )

            # THE MOST IMPORTANT CHECK: Is the seller approved by an admin?
            if user.role == User.Role.SELLER and not user.is_approved:
                raise AuthenticationFailed('Seller account not approved by admin.')
            
            # Check if user is active
            if not user.is_active:
                raise AuthenticationFailed('User account is disabled.')

            return (user, None)

        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Token has expired.')
        except jwt.InvalidTokenError:
            raise AuthenticationFailed('Invalid token.')
        except Exception as e:
            # Catch any other error during user lookup
            raise AuthenticationFailed(f"Authentication failed: {e}")