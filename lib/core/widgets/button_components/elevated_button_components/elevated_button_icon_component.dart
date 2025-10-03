import 'package:flutter/material.dart' show ElevatedButton, Theme;
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import '../../../config/constants/app_constants.dart';

class ElevatedButtonIconComponent extends StatelessWidget {
  const ElevatedButtonIconComponent({
    required this.label,
    required this.icon,
    required this.onPressed,
    super.key,
    this.isEnabled = true,
    this.useMargin = false,
    this.useInBorderRadius = false,
  });
  final String label;
  final IconData icon;
  final void Function() onPressed;
  final bool isEnabled;
  final bool useMargin;
  final bool useInBorderRadius;

  void onTap() {
    HapticFeedback.vibrate();
    onPressed();
  }

  @override
  /// Builds a [Container] widget containing an [ElevatedButton.icon] with customizable
  /// properties. The button's appearance and behavior depend on the provided parameters:
  /// [isEnabled] determines if the button is active or disabled, [useMargin] adds a top margin,
  /// and [useInBorderRadius] controls the border radius. The button displays an icon and a
  /// label, with styling based on the current theme's color scheme.
  Widget build(final BuildContext context) => Container(
    margin: useMargin ? EdgeInsets.only(top: AppConstants.margin.h) : null,
    child: ElevatedButton.icon(
      onPressed: isEnabled ? onTap : null,
      icon: Icon(icon, size: AppConstants.iconSize),
      label: Text(label),
      style: ElevatedButton.styleFrom(
        backgroundColor: Theme.of(context).colorScheme.primaryContainer,
        foregroundColor: Theme.of(context).colorScheme.onPrimaryContainer,
        disabledBackgroundColor: Theme.of(context).colorScheme.error,
        disabledForegroundColor: Theme.of(context).colorScheme.onError,
        iconColor: Theme.of(context).colorScheme.onPrimaryContainer,
        disabledIconColor: Theme.of(context).colorScheme.onError,
        padding: const EdgeInsets.symmetric(
          horizontal: AppConstants.padding,
          vertical: AppConstants.padding,
        ),
        shape: RoundedRectangleBorder(
          borderRadius: useInBorderRadius
              ? BorderRadius.circular(AppConstants.inBorderRadius)
              : BorderRadius.circular(AppConstants.outBorderRadius),
        ),
        elevation: 2,
        enableFeedback: true,
        enabledMouseCursor: WidgetStateMouseCursor.clickable,
      ),
    ),
  );
}
