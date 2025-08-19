import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart' show ColorScheme, Theme;

import '../../features/pages/login/ui/page/login_page.dart';
import '../../features/pages/login/ui/widgets/phone_otp.dart' show PhoneOtpPage;
import '../../features/pages/login_or_register/ui/page/login_or_register.dart';
import '../../features/pages/main/ui/page/main_page.dart';
import '../../features/pages/profile_page/ui/widgets/my_account/grid/cash_back_page/cash_back_page.dart';
import '../../features/pages/profile_page/ui/widgets/my_account/grid/edit_profile_page/page/edit_profile_page.dart';
import '../../features/pages/profile_page/ui/widgets/my_account/grid/orders_page/orders_page.dart';
import '../../features/pages/profile_page/ui/widgets/my_account/grid/returns_page/returns_page.dart';
import '../../features/pages/profile_page/ui/widgets/my_account/grid/wishlist_page/wishlist_page.dart';
import '../../features/pages/profile_page/ui/widgets/my_account/list/address_page.dart';
import '../../features/pages/profile_page/ui/widgets/my_account/list/notifications_page.dart';
import '../../features/pages/profile_page/ui/widgets/my_account/list/payment_page.dart';
import '../../features/pages/profile_page/ui/widgets/my_account/list/qr_code_page.dart';
import '../../features/pages/profile_page/ui/widgets/settings/app_info_page/ui/page/app_info.dart';
import '../../features/pages/profile_page/ui/widgets/settings/conditions_and_terms_page.dart';
import '../../features/pages/profile_page/ui/widgets/settings/help_and_support_page.dart';
import '../../features/pages/profile_page/ui/widgets/settings/language_page.dart';
import '../../features/pages/profile_page/ui/widgets/settings/secuirty_and_privacy_page.dart';
import '../../features/pages/profile_page/ui/widgets/settings/theme_page.dart';
import '../../features/pages/register/ui/page/register_page.dart';
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

      case Routes.loginOrRegisterPage:
        page = const LoginOrRegister();
        break;

      case Routes.mainPage:
        page = const MainPage();
        break;

      case Routes.loginPage:
        page = const LoginPage();
        break;

      case Routes.phoneOtpPage:
        page = const PhoneOtpPage();
        break;

      case Routes.registerPage:
        page = const RegisterPage();
        break;

      case Routes.editProfilePage:
        page = const EditProfilePage();
        break;

      case Routes.addressPage:
        page = const AddressPage();
        break;

      case Routes.paymentPage:
        page = const PaymentPage();
        break;

      case Routes.qrCodePage:
        page = const QrCodePage();
        break;
      case Routes.notificationsPage:
        page = const NotificationsPage();
        break;

      case Routes.themePage:
        page = const ThemePage();
        break;
      case Routes.languagePage:
        page = const LanguagePage();
        break;

      case Routes.returnsPage:
        page = const ReturnsPage();
        break;

      case Routes.ordersPage:
        page = const OrdersPage();
        break;
      case Routes.wishlistPage:
        page = const WishlistPage();
        break;
      case Routes.cashBackPage:
        page = const CashBackPage();
        break;
      case Routes.securityAndPrivacyPage:
        page = const SecurityAndPrivacyPage();
        break;

      case Routes.helpAndSupportPage:
        page = const HelpAndSupportPage();
        break;

      case Routes.conditionsAndTermsPage:
        page = const ConditionsAndTermsPage();
        break;

      case Routes.aboutPage:
        page = const AppInfo();
        break;

      default:
        page = const NoRoutesError();
    }
    return CupertinoPageRoute(builder: (_) => page);
  }
}
