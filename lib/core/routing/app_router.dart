import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart' show ColorScheme, Theme;
import '../error/no_routes_error.dart';
import 'routes.dart';

class AppRouter {
  static final GlobalKey<NavigatorState> navigatorKey =
      GlobalKey<NavigatorState>();

  static ColorScheme get theme {
    final context = navigatorKey.currentContext;
    if (context == null) {
      throw Exception('Navigator context is not available');
    }
    return Theme.of(context).colorScheme;
  }

  Route<dynamic> generateRoute(final RouteSettings settings) {
    Widget page;
    switch (settings.name) {
      // case Routes.onboardingPage:
      //   page = const OnboardingPage();
      //   break;

      default:
        page = const NoRoutesError();
    }
    return CupertinoPageRoute(builder: (_) => page);
  }
}
