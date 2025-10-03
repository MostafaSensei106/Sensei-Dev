import 'package:equatable/equatable.dart' show Equatable;
import 'package:flutter/material.dart' show ThemeMode;

class ThemeState extends Equatable {
  const ThemeState({required this.isDark, required this.themeMode});
  final bool isDark;
  final ThemeMode themeMode;

  @override
  List<Object?> get props => [isDark, themeMode];

  /// Creates a new [ThemeState] with the given values.
  //
  /// If a value is not provided, the corresponding value from this [ThemeState]
  /// is used instead.
  ThemeState copyWith({final bool? isDark, final ThemeMode? themeMode}) =>
      ThemeState(
        isDark: isDark ?? this.isDark,
        themeMode: themeMode ?? this.themeMode,
      );
}
