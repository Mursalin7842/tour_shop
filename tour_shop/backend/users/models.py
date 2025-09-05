from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    """
    Custom user model to include roles and approval status.
    """
    class Role(models.TextChoices):
        ADMIN = "ADMIN", "Admin"
        SELLER = "SELLER", "Seller"

    role = models.CharField(max_length=50, choices=Role.choices)
    is_approved = models.BooleanField(default=False)