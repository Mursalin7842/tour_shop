from rest_framework import viewsets, generics, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Shop, Product
from .serializers import ShopSerializer, ProductSerializer, AdminProductApprovalSerializer
from users.permissions import IsAdminUser, IsApprovedSeller

# --- Shop Views ---

class ShopViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing shop instances.
    Sellers can only manage their own shop.
    Admins can view all shops.
    """
    serializer_class = ShopSerializer

    def get_queryset(self):
        user = self.request.user
        if user.role == 'ADMIN':
            return Shop.objects.all()
        return Shop.objects.filter(owner=user)

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy', 'my_shop']:
            self.permission_classes = [IsApprovedSeller]
        elif self.action == 'list':
             self.permission_classes = [IsAdminUser]
        return super().get_permissions()

    def perform_create(self, serializer):
        # Prevent seller from creating more than one shop
        if Shop.objects.filter(owner=self.request.user).exists():
            raise serializers.ValidationError("You can only own one shop.")
        serializer.save(owner=self.request.user)

    @action(detail=False, methods=['get', 'put'], url_path='my-shop')
    def my_shop(self, request):
        """Custom action for a seller to view/update their own shop."""
        shop = self.get_queryset().first()
        if request.method == 'GET':
            serializer = self.get_serializer(shop)
            return Response(serializer.data)
        elif request.method == 'PUT':
            serializer = self.get_serializer(shop, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)


# --- Product Views ---

class ProductViewSet(viewsets.ModelViewSet):
    """
    A viewset for products.
    Sellers can manage their products. Admins can see all.
    """
    serializer_class = ProductSerializer

    def get_queryset(self):
        user = self.request.user
        if user.role == 'ADMIN':
            return Product.objects.all()
        # Sellers see products from their own shop
        try:
            return Product.objects.filter(shop=user.shop)
        except Shop.DoesNotExist:
            return Product.objects.none()


    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            self.permission_classes = [IsApprovedSeller]
        else: # list, retrieve
            self.permission_classes = [IsAdminUser | IsApprovedSeller]
        return super().get_permissions()

    def perform_create(self, serializer):
        try:
            shop = self.request.user.shop
            # New products are always pending by default
            serializer.save(shop=shop, status=Product.Status.PENDING)
        except Shop.DoesNotExist:
             raise serializers.ValidationError("You must create a shop before adding products.")


# --- Admin Product Management Views ---

class PendingProductListView(generics.ListAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = ProductSerializer
    queryset = Product.objects.filter(status=Product.Status.PENDING)


class ApproveProductView(generics.UpdateAPIView):
    permission_classes = [IsAdminUser]
    queryset = Product.objects.all()
    serializer_class = AdminProductApprovalSerializer