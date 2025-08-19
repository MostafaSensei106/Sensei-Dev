/// Contains the light theme configuration for the TakyeebBak app.
///
/// This theme is based on a customized [ColorScheme] for light mode,
/// providing a clean and elegant UI appearance using warm and earthy tones.
///
/// The [LightTheme] includes:
/// - A complete [ColorScheme] for light mode
/// - Transparent [AppBarTheme] for modern UI
/// - Support for elevated surface and background contrasts
///
/// Example usage:
/// ```dart
/// MaterialApp(
///   theme: LightTheme,
/// )
/// ```
library;

import 'package:flutter/material.dart';

/// A preconfigured [ThemeData] for the app's light theme.
///
/// Defines a full [ColorScheme] with carefully selected color values
/// optimized for light backgrounds. This ensures proper contrast and
/// accessibility across the app UI.
///
/// Includes:
/// - `Brightness.light` for overall brightness
/// - Transparent AppBar with no shadow for a flat and modern appearance
final ThemeData LightTheme = ThemeData(
  colorScheme: const ColorScheme(
    brightness: Brightness.light,

    /// Primary brand color
    primary: Color(0xFF844F2D),
    surfaceTint: Color(0xff87512f),
    onPrimary: Color(0xffffffff),
    primaryContainer: Color(0xffa16743),
    onPrimaryContainer: Color(0xfffffbff),

    /// Secondary UI elements
    secondary: Color(0xff755848),
    onSecondary: Color(0xffffffff),
    secondaryContainer: Color(0xffffd8c3),
    onSecondaryContainer: Color(0xff7a5c4c),

    /// Tertiary accents (e.g., buttons, highlights)
    tertiary: Color(0xff616124),
    onTertiary: Color(0xffffffff),
    tertiaryContainer: Color(0xffafaf69),
    onTertiaryContainer: Color(0xff414206),

    /// Error colors
    error: Color(0xffba1a1a),
    onError: Color(0xffffffff),
    errorContainer: Color(0xffffdad6),
    onErrorContainer: Color(0xff93000a),

    /// Surface and background
    surface: Color(0xfffff8f5),
    onSurface: Color(0xff201a17),
    onSurfaceVariant: Color(0xff52443c),

    /// Outlines and borders
    outline: Color(0xff84746b),
    outlineVariant: Color(0xffd7c2b8),

    /// Shadow and overlays
    shadow: Color(0xff000000),
    scrim: Color(0xff000000),

    /// Inverse surfaces (e.g., bottom sheets, modals)
    inverseSurface: Color(0xff362f2c),
    inversePrimary: Color(0xfffeb78d),

    /// Fixed color tones (used in Material You adaptation)
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

    /// Material Design 3 surface containers
    surfaceDim: Color(0xffe4d8d2),
    surfaceBright: Color(0xfffff8f5),
    surfaceContainerLowest: Color(0xffffffff),
    surfaceContainerLow: Color(0xfffef1ec),
    surfaceContainer: Color(0xfff8ebe6),
    surfaceContainerHigh: Color(0xfff2e6e0),
    surfaceContainerHighest: Color(0xffece0db),
  ),

  /// Custom AppBarTheme with a transparent background and no elevation.
  ///
  /// Gives the app bar a clean and modern look.
  appBarTheme: const AppBarTheme(
    centerTitle: true,
    backgroundColor: Colors.transparent,
    surfaceTintColor: Colors.transparent,
    elevation: 0,
    scrolledUnderElevation: 0,
  ),

  fontFamily: 'ArFont',
);
