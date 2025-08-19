import '../product_model/product_model.dart';
import 'order_model.dart';

class OrderItemModel {
  OrderItemModel({
    required this.id,
    required this.product,
    required this.order,
    required this.quantity,
    required this.unitPrice,
    required this.note,
  });

  factory OrderItemModel.fromJson(Map<String, dynamic> json) => OrderItemModel(
    id: json['id'],
    product: ProductModel.fromJson(json['product']),
    order: OrderModel.fromJson(json['order']),
    quantity: json['quantity'],
    unitPrice: json['unitPrice'],
    note: json['note'],
  );
  final String id;
  final ProductModel product;
  final OrderModel order;
  final int quantity;
  final double unitPrice;
  final String note;

  Map<String, dynamic> toJson() => {
    'id': id,
    'product': product.toJson(),
    'order': order.toJson(),
    'quantity': quantity,
    'unitPrice': unitPrice,
    'note': note,
  };
}
