from django.urls import path
from .views import (
    RegisterView, 
    ProfileView,
    PendingSellerListView,
    ApproveSellerView,
    UserApprovalStatusView
)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('status/', UserApprovalStatusView.as_view(), name='user-status'),
    
    # Admin paths
    path('admin/pending-sellers/', PendingSellerListView.as_view(), name='pending-sellers'),
    path('admin/approve-seller/<int:pk>/', ApproveSellerView.as_view(), name='approve-seller'),
]
