from django.contrib import admin
from .models import Product, Category, Cart, Order, OrderItem
from django.contrib.auth.admin import UserAdmin
from .models import User

# Register your models here.
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Cart)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(User, UserAdmin)
