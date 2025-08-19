import 'dart:nativewrappers/_internal/vm/lib/ffi_native_type_patch.dart';

import '../review_model/review_model.dart';

class ProductModel {
  ProductModel({
    required this.id,
    required this.name,
    required this.description,
    required this.category,
    required this.brand,
    required this.color,
    required this.isAvailable,
    required this.quantity,
    required this.imageUrl,
    required this.price,
    required this.createdAt,
    required this.inventoryCount,
    required this.weight,
    required this.dimensions,
    required this.reviews,
  });

  factory ProductModel.fromJson(Map<String, dynamic> json) => ProductModel(
    id: json['id'],
    name: json['name'],
    description: json['description'],
    category: json['category'],
    brand: json['brand'],
    color: json['color'],
    isAvailable: json['isAvailable'],
    quantity: json['quantity'],
    imageUrl: json['imageUrl'],
    price: json['price'],
    createdAt: DateTime.parse(json['createdAt']),
    inventoryCount: json['inventoryCount'],
    weight: json['weight'],
    dimensions: json['dimensions'],
    reviews: json['reviews'],
  );
  final String id;

  final String name;
  final String description;
  final String category;
  final String brand;
  final String color;
  final bool isAvailable;
  final int quantity;
  final String imageUrl;
  final double price;
  final DateTime createdAt;
  final int inventoryCount;
  final Float weight;
  final String dimensions;
  final List<ReviewModel> reviews;

  Map<String, dynamic> toJson() => {
    'id': id,
    'name': name,
    'description': description,
    'category': category,
    'brand': brand,
    'color': color,
    'isAvailable': isAvailable,
    'quantity': quantity,
    'imageUrl': imageUrl,
    'price': price,
    'createdAt': createdAt.toIso8601String(),
    'inventoryCount': inventoryCount,
    'weight': weight,
    'dimensions': dimensions,
    'reviews': reviews,
  };
}
