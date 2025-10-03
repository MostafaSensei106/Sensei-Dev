import 'package:flutter/material.dart' show ElevatedButton, Theme;
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import '../../../config/constants/app_constants.dart';

class ElevatedOutlineButtonComponent extends StatelessWidget {
  const ElevatedOutlineButtonComponent({
    required this.label,
    required this.onPressed,
    super.key,
    this.isEnabled = true,
    this.useMargin = false,
    this.useInBorderRadius = false,
  });
  final String label;
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
    child: ElevatedButton(
      onPressed: isEnabled ? onTap : null,
      style: ElevatedButton.styleFrom(
        side: BorderSide(
          color: Theme.of(context).colorScheme.outline.withAlpha(0x80),
        ),
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
        elevation: 0,
        enableFeedback: true,
        enabledMouseCursor: WidgetStateMouseCursor.clickable,
      ),
      child: Text(label),
    ),
  );
}
