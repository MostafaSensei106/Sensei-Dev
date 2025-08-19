/// Contains the dark theme configuration for the TakyeebBak app.
///
/// This theme is based on a customized [ColorScheme] for dark mode,
/// providing a consistent look and feel across the app with warm,
/// muted tones for primary, secondary, and tertiary colors.
///
/// The [DarkTheme] includes:
/// - A full [ColorScheme] tailored for dark mode
/// - Transparent and flat [AppBarTheme] for modern UI appearance
///
/// Example usage:
/// ```dart
/// MaterialApp(
///   theme: DarkTheme,
/// )
/// ```
library;

import 'package:flutter/material.dart';

/// A preconfigured [ThemeData] for the app's dark theme.
///
/// Defines a full [ColorScheme] with carefully selected color values
/// for primary, secondary, tertiary, background, surface, error,
/// and outlines in dark mode.
///
/// This theme uses:
/// - `Brightness.dark`
/// - Transparent AppBar with no elevation
final ThemeData DarkTheme = ThemeData(
  colorScheme: const ColorScheme(
    brightness: Brightness.dark,
    primary: Color(0xfffeb78d),
    surfaceTint: Color(0xfffeb78d),
    onPrimary: Color(0xff4f2506),
    primaryContainer: Color(0xffc1825c),
    onPrimaryContainer: Color(0xff3d1800),
    secondary: Color(0xffe5bfab),
    onSecondary: Color(0xff422b1d),
    secondaryContainer: Color(0xff5e4334),
    onSecondaryContainer: Color(0xffd6b19d),
    tertiary: Color(0xffcbcb82),
    onTertiary: Color(0xff323200),
    tertiaryContainer: Color(0xffafaf69),
    onTertiaryContainer: Color(0xff414206),
    error: Color(0xffffb4ab),
    onError: Color(0xff690005),
    errorContainer: Color(0xff93000a),
    onErrorContainer: Color(0xffffdad6),
    surface: Color(0xff18120f),
    onSurface: Color(0xffece0db),
    onSurfaceVariant: Color(0xffd7c2b8),
    outline: Color(0xff9f8d84),
    outlineVariant: Color(0xff52443c),
    shadow: Color(0xff000000),
    scrim: Color(0xff000000),
    inverseSurface: Color(0xffece0db),
    inversePrimary: Color(0xff87512f),
    primaryFixed: Color(0xffffdbc9),
    onPrimaryFixed: Color(0xff321200),
    primaryFixedDim: Color(0xfffeb78d),
    onPrimaryFixedVariant: Color(0xff6b3a1b),
    secondaryFixed: Color(0xffffdbc9),
    onSecondaryFixed: Color(0xff2b170a),
    secondaryFixedDim: Color(0xffe5bfab),
    onSecondaryFixedVariant: Color(0xff5b4132),
    tertiaryFixed: Color(0xffe7e79b),
    onTertiaryFixed: Color(0xff1d1d00),
    tertiaryFixedDim: Color(0xffcbca82),
    onTertiaryFixedVariant: Color(0xff49490d),
    surfaceDim: Color(0xff18120f),
    surfaceBright: Color(0xff3f3834),
    surfaceContainerLowest: Color(0xff120d0a),
    surfaceContainerLow: Color(0xff201a17),
    surfaceContainer: Color(0xff241e1b),
    surfaceContainerHigh: Color(0xff2f2925),
    surfaceContainerHighest: Color(0xff3a3330),
  ),

  /// Custom AppBarTheme with a transparent background and no elevation.
  ///
  /// Makes the app bar blend seamlessly with the UI.
  appBarTheme: const AppBarTheme(
    centerTitle: true,
    backgroundColor: Colors.transparent,
    surfaceTintColor: Colors.transparent,
    elevation: 0,
    scrolledUnderElevation: 0,
  ),

  fontFamily: 'ArFont',
);
