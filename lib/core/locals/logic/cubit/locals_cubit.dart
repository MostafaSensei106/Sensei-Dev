import 'dart:ui';

import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:shared_preferences/shared_preferences.dart';

const String _kSavedLocaleKey =
    'saved_locale'; // format: languageCode_countryCode, e.g. "en_US" or "ar_SA"

class LocaleCubit extends Cubit<Locale> {
  LocaleCubit._(super.initialLocale);

  /// Factory async creator: tries to load saved locale, otherwise uses system locale,
  /// otherwise falls back to the provided default (if given) or 'en_US'.
  static Future<LocaleCubit> create({Locale? fallback}) async {
    final prefs = await SharedPreferences.getInstance();

    // 1) Try to read saved locale
    final saved = prefs.getString(_kSavedLocaleKey);
    if (saved != null && saved.isNotEmpty) {
      final parts = saved.split('_');
      if (parts.isNotEmpty) {
        final languageCode = parts[0];
        final countryCode = parts.length > 1 ? parts[1] : '';
        final locale = countryCode.isNotEmpty
            ? Locale(languageCode, countryCode)
            : Locale(languageCode);
        return LocaleCubit._(locale);
      }
    }

    // 2) Fallback to system locale (PlatformDispatcher) if available
    try {
      final systemLocale = PlatformDispatcher.instance.locale;
      return LocaleCubit._(systemLocale);
    } catch (_) {
      // ignore and continue to fallback
    }

    // 3) Final fallback
    final defaultLocale = fallback ?? const Locale('en', 'US');
    return LocaleCubit._(defaultLocale);
  }

  /// Change the locale and persist it to SharedPreferences.
  Future<void> changeLocale(Locale locale) async {
    emit(locale);
    final prefs = await SharedPreferences.getInstance();
    final saved = locale.countryCode != null && locale.countryCode!.isNotEmpty
        ? '${locale.languageCode}_${locale.countryCode}'
        : locale.languageCode;
    await prefs.setString(_kSavedLocaleKey, saved);
  }

  /// Clear saved locale so that next app start will use system locale.
  Future<void> clearSavedLocale() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_kSavedLocaleKey);
  }
}
