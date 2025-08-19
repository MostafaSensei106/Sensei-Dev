import '../../../features/pages/register/data/models/user_model.dart';
import '../user_model/user_model.dart';

class ReviewModel {
  ReviewModel({
    required this.id,
    required this.customerId,
    required this.productId,
    required this.organization,
    required this.customer,
    required this.rating,
    required this.comment,
    required this.createdAt,
  });

  factory ReviewModel.fromJson(Map<String, dynamic> json) => ReviewModel(
    id: json['id'],
    customerId: json['customerId'],
    productId: json['productId'],
    organization: OrganizationModel.fromJson(json['organization']),
    customer: UserModel.fromJson(json['customer']),
    rating: json['rating'],
    comment: json['comment'],
    createdAt: json['createdAt'],
  );
  final String id;
  final String customerId;
  final String productId;
  final OrganizationModel organization;
  final UserModel customer;
  final int rating;
  final String comment;
  final String createdAt;

  Map<String, dynamic> toJson() => {
    'id': id,
    'customerId': customerId,
    'productId': productId,
    'organization': organization.toJson(),
    'customer': customer.toJson(),
    'rating': rating,
    'comment': comment,
    'createdAt': createdAt,
  };
}
