from django.contrib.auth.models import AbstractUser
from django.db import models
from products.models import Product

class CustomUser(AbstractUser):
    """Custom User model"""
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    adress = models.CharField(max_length=100)
    city = models.CharField(max_length=100)

    def __str__(self):
        return self.username
    
class Order(models.Model):
    """Order model for tracking user orders"""
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    status = models.CharField(max_length=20, default="pending")
    stripe_token = models.CharField(max_length=100)

    class Meta:
        ordering = ['-created_at',]

    def __str__(self):
        return f"Order {self.id} - {self.user.username}"

class OrderItem(models.Model):
    """OrderItem model for tracking items within an order"""
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='order_items', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    
    def total_price(self):
        return self.quantity * self.price
    
    def __str__(self):
        return f"OrderItem {self.id}"