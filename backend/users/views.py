from rest_framework import generics, status, views
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAdminUser
from .serializers import RegisterSerializer, UserSerializer, AdminUserApprovalSerializer
from .models import User
from .permissions import IsSelf

# /api/users/register/
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

# /api/users/profile/
class ProfileView(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsSelf,) # A user can only view/edit their own profile
    
    def get_object(self):
        return self.request.user

# --- Admin Specific Views ---

# /api/users/admin/pending-sellers/
class PendingSellerListView(generics.ListAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.filter(role=User.Role.SELLER, is_approved=False)

# /api/users/admin/approve-seller/<int:pk>/
class ApproveSellerView(generics.UpdateAPIView):
    permission_classes = [IsAdminUser]
    queryset = User.objects.filter(role=User.Role.SELLER)
    serializer_class = AdminUserApprovalSerializer

# /api/users/status/
class UserApprovalStatusView(views.APIView):
    """
    An endpoint for a newly registered seller to check their own approval status.
    """
    def get(self, request, *args, **kwargs):
        user = request.user
        return Response({
            'username': user.username,
            'is_approved': user.is_approved,
            'role': user.role
        }, status=status.HTTP_200_OK)