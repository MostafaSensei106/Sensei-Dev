import 'package:flutter/widgets.dart';

extension NavigationExtension on BuildContext {
  /// Push the route with the given [routeName] onto the navigator that most
  /// tightly encloses the given [context].
  //
  /// The [arguments] parameter is passed to the pushed route.
  ///
  /// This method is just a wrapper around [Navigator.pushNamed] and is
  /// provided to allow for more concise code when using this extension.
  ///
  /// The return value is the value that the popped route was removed with;
  /// this route cannot interact with the route below itself, and the return
  /// value is null unless the popped route was popped with [Navigator.pop]
  /// (e.g. by pressing the back button on Android).

  Future<dynamic> pushNamed(
    final String routeName, {
    final Object? arguments,
  }) => Navigator.of(this).pushNamed(routeName, arguments: arguments);

  /// Replace the current route of the navigator that most tightly encloses the
  /// given [context] with the route named [routeName].
  ///
  /// The [arguments] parameter is passed to the pushed route.
  ///
  /// The return value is the value that the route that was removed was popped
  /// with; this route cannot interact with the route below itself, and the
  /// return value is null unless the removed route was popped with [Navigator.pop]
  /// (e.g. by pressing the back button on Android).
  Future<dynamic> pushReplaceNamed(
    final String routeName, {
    final Object? arguments,
  }) =>
      Navigator.of(this).pushReplacementNamed(routeName, arguments: arguments);

  /// Push the route with the given [routeName] onto the navigator that most
  /// tightly encloses the given [context].
  ///
  /// The [arguments] parameter is passed to the pushed route.
  ///
  /// The predicate is used to determine whether the route is removed.
  /// The predicate is called with the pushed route as argument and must return
  /// true if the route should be removed, false otherwise.
  ///
  /// The return value is the value that the route that was removed was popped
  /// with; this route cannot interact with the route below itself, and the
  /// return value is null unless the removed route was popped with [Navigator.pop]
  /// (e.g. by pressing the back button on Android).
  Future<dynamic> pushNamedAndRemoveUntil(
    final String routeName, {
    required final RoutePredicate predicate,
    final Object? arguments,
  }) => Navigator.of(
    this,
  ).pushNamedAndRemoveUntil(routeName, predicate, arguments: arguments);

  void pop() => Navigator.of(this).pop();
}
