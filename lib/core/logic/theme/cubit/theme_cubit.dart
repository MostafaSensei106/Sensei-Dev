import 'dart:ui' show PlatformDispatcher;

import 'package:flutter/material.dart' show ThemeMode, Brightness;
import 'package:flutter_bloc/flutter_bloc.dart' show Cubit;
import 'theme_shared_preferences.dart' show ThemeSharedPreferences;
import 'theme_state.dart' show ThemeState;

class ThemeCubit extends Cubit<ThemeState> {
  ThemeCubit({required final ThemeSharedPreferences themeSharedPreferences})
    : _themeSharedPreferences = themeSharedPreferences,
      super(const ThemeState(isDark: false, themeMode: ThemeMode.system));
  final ThemeSharedPreferences _themeSharedPreferences;

  /// Persists the given [ThemeState] to SharedPreferences.
  ///
  /// This function will save the current theme state to the device's
  /// SharedPreferences, and is intended to be called whenever the user
  /// changes the theme.
  Future<void> _persistTheme(final ThemeState state) async {
    await _themeSharedPreferences.setTheme(isDark: state.isDark);
    await _themeSharedPreferences.setThemeMode(state.themeMode);
  }

  /// Toggles the theme between dark and light mode.
  ///
  /// When [isDark] is true, the theme is set to dark mode.
  /// When [isDark] is false, the theme is set to light mode.
  ///
  /// Persists the chosen theme to SharedPreferences.
  ///
  /// Emits a new [ThemeState] with the chosen [isDark] and
  /// [ThemeMode].
  Future<void> toggleTheme({required final bool isDark}) async {
    final newState = state.copyWith(
      isDark: isDark,
      themeMode: isDark ? ThemeMode.dark : ThemeMode.light,
    );
    await _persistTheme(newState);
    emit(newState);
  }

  /// Sets the theme to the system theme, which is either dark or light
  /// depending on the device's current brightness setting.
  ///
  /// Persists the chosen theme to SharedPreferences.
  ///
  /// Emits a new [ThemeState] with the chosen [isDark] and
  /// [ThemeMode.system].
  Future<void> setSystemTheme() async {
    final isDark =
        PlatformDispatcher.instance.platformBrightness == Brightness.dark;
    final newState = state.copyWith(
      isDark: isDark,
      themeMode: ThemeMode.system,
    );
    await _persistTheme(newState);
    emit(newState);
  }

  /// Initializes the theme by checking if the app is running for the first time.
  ///
  /// If the app is running for the first time, it sets the theme to the system
  /// theme and persists the chosen theme to SharedPreferences.
  ///
  /// If the app is not running for the first time, it retrieves the previously
  /// chosen theme from SharedPreferences and sets the theme accordingly.
  ///
  /// If the previously chosen theme was set to the system theme, it checks the
  /// current platform brightness and sets the theme accordingly.
  ///
  /// Emits a new [ThemeState] with the chosen [isDark] and [ThemeMode].
  Future<void> initializeTheme() async {
    final isFirstRun = await _themeSharedPreferences.isFirstRun();

    if (isFirstRun == null || isFirstRun) {
      await setSystemTheme();
      await _themeSharedPreferences.setFirstRun(value: false);
    } else {
      final isDark = await _themeSharedPreferences.getTheme();
      final savedMode = await _themeSharedPreferences.getThemeMode();

      if (savedMode == ThemeMode.system) {
        final platformBrightness =
            PlatformDispatcher.instance.platformBrightness;
        final newIsDark = platformBrightness == Brightness.dark;
        final newState = state.copyWith(
          isDark: newIsDark,
          themeMode: ThemeMode.system,
        );
        await _persistTheme(newState);
        emit(newState);
      } else {
        emit(state.copyWith(isDark: isDark, themeMode: savedMode));
      }
    }
  }
}
