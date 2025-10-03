import 'package:flutter/material.dart' show ThemeMode;
import 'package:shared_preferences/shared_preferences.dart'
    show SharedPreferences;

class ThemeSharedPreferences {
  static const themeKey = 'theme';
  static const themeModeKey = 'themeMode';
  static const firstRunKey = 'firstRun';

  /// Persists the given [isDark] to SharedPreferences as the app's theme.
  ///
  /// [isDark] is `true` if the app should use the dark theme, and `false`
  /// otherwise.
  ///
  /// This function will save the current theme state to the device's
  /// SharedPreferences, and is intended to be called whenever the user
  /// changes the theme.
  Future<void> setTheme({required final bool isDark}) async {
    final sharedPreferences = await SharedPreferences.getInstance();
    await sharedPreferences.setBool(themeKey, isDark);
  }

  /// Retrieves the current theme from SharedPreferences as a boolean value.
  ///
  /// The retrieved value is `true` if the app is currently using the dark
  /// theme, and `false` otherwise.
  ///
  /// If the theme is not set, the default value is `false` (i.e. the light theme).
  Future<bool> getTheme() async {
    final sharedPreferences = await SharedPreferences.getInstance();
    return sharedPreferences.getBool(themeKey) ?? false;
  }

  /// Checks if the app is being run for the first time.
  ///
  /// Returns a `Future<bool?>` that is `true` if it's the first run,
  /// `false` if it's not, or `null` if the value has not been set.

  Future<bool?> isFirstRun() async {
    final sharedPreferences = await SharedPreferences.getInstance();
    return sharedPreferences.getBool(firstRunKey);
  }

  /// Persists the given [value] to SharedPreferences as a boolean indicating
  /// whether this is the first time the app has been run.
  ///
  /// This function is intended to be called when the user has finished the
  /// onboarding process, and is used to determine whether the onboarding
  /// process should be shown or not.
  Future<void> setFirstRun({required final bool value}) async {
    final sharedPreferences = await SharedPreferences.getInstance();
    await sharedPreferences.setBool(firstRunKey, value);
  }

  /// Persists the given [ThemeMode] to SharedPreferences.
  ///
  /// This function saves the current theme mode to the device's
  /// SharedPreferences, allowing the app to remember and restore the
  /// user's preferred theme mode (light, dark, or system) upon reopening.

  Future<void> setThemeMode(final ThemeMode mode) async {
    final sharedPreferences = await SharedPreferences.getInstance();
    await sharedPreferences.setInt(themeModeKey, mode.index);
  }

  /// Retrieves the current [ThemeMode] from SharedPreferences.
  ///
  /// Returns a `Future<ThemeMode>` representing the stored theme mode,
  /// which can be light, dark, or system. If no theme mode is set,
  /// defaults to [ThemeMode.system].

  Future<ThemeMode> getThemeMode() async {
    final sharedPreferences = await SharedPreferences.getInstance();
    final modeIndex = sharedPreferences.getInt(themeModeKey);
    return modeIndex != null ? ThemeMode.values[modeIndex] : ThemeMode.system;
  }
}
