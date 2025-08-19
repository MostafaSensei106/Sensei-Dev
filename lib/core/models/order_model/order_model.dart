import 'dart:nativewrappers/_internal/vm/lib/ffi_native_type_patch.dart';

import '../../../features/pages/register/data/models/user_model.dart';

class OrderModel {
  OrderModel({
    required this.id,
    required this.customer,
    required this.createdAt,
    required this.status,
    required this.paymentMethod,
    required this.deliveryAddress,
    required this.totalPrice,
    this.notse,
  });

  factory OrderModel.fromJson(Map<String, dynamic> json) => OrderModel(
    id: json['id'],
    customer: OrganizationModel.fromJson(json['customer']),
    createdAt: DateTime.parse(json['createdAt']),
    status: json['status'],
    paymentMethod: json['paymentMethod'],
    deliveryAddress: json['deliveryAddress'],
    totalPrice: json['totalPrice'],
    notse: json['notse'],
  );

  final String id;
  final OrganizationModel customer;
  final DateTime createdAt;
  final String status;
  final String paymentMethod;
  final String deliveryAddress;
  final Float totalPrice;
  final String? notse;

  Map<String, dynamic> toJson() => {
    'id': id,
    'customer': customer.toJson(),
    'createdAt': createdAt.toIso8601String(),
    'status': status,
    'paymentMethod': paymentMethod,
    'deliveryAddress': deliveryAddress,
    'totalPrice': totalPrice,
    'notse': notse,
  };
}
