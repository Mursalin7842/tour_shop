from rest_framework.permissions import BasePermission
from .models import User

class IsAdminUser(BasePermission):
    """
    Allows access only to admin users.
    """
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and request.user.role == User.Role.ADMIN)

class IsApprovedSeller(BasePermission):
    """
    Allows access only to authenticated sellers who have been approved.
    """
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and request.user.role == User.Role.SELLER and request.user.is_approved)

class IsSelf(BasePermission):
    """
    Object-level permission to only allow users to edit their own profile.
    """
    def has_object_permission(self, request, view, obj):
        return obj == request.user
