class UserModel {
  UserModel({
    required this.email,
    required this.name,
    required this.phoneNumber,
    required this.address,
    required this.avatar,
    required this.password,
    required this.confirmPassword,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) => UserModel(
    email: json['email'],
    name: json['name'],
    phoneNumber: json['phoneNumber'],
    address: json['address'],
    avatar: json['avatar'],
    password: json['password'],
    confirmPassword: json['confirmPassword'],
  );
  String email;
  String name;
  String phoneNumber;
  String address;
  String avatar;
  String password;
  String confirmPassword;

  Map<String, dynamic> toJson() => {
    'email': email,
    'name': name,
    'phoneNumber': phoneNumber,
    'address': address,
    'avatar': avatar,
    'password': password,
    'confirmPassword': confirmPassword,
  };
}
