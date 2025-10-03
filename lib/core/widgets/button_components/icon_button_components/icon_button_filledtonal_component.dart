import 'package:flutter/material.dart' show IconButton, ButtonStyle, Theme;
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

import '../../../config/constants/app_constants.dart';

class IconButtonFilledTonalComponent extends StatelessWidget {
  const IconButtonFilledTonalComponent({
    required this.icon,
    required this.onPressed,
    super.key,
    this.useInBorderRadius = false,
    this.color,
  });
  final bool useInBorderRadius;
  final Color? color;

  final IconData icon;
  final VoidCallback onPressed;

  @override
  /// Builds an [IconButton] with a filled tonal style and a rounded rectangle
  /// shape. The button displays an icon and responds to taps by calling
  /// [onPressed] and vibrating the device. The appearance of the button is
  /// determined by the [color] and [useInBorderRadius] properties.
  ///
  /// The [color] is used to set the background color of the button.
  ///
  /// The [useInBorderRadius] property determines whether to use the
  /// [AppConstants.inBorderRadius] or [AppConstants.outBorderRadius] border
  /// radius for the button.
  Widget build(final BuildContext context) => IconButton.filledTonal(
    icon: Icon(icon),
    onPressed: () {
      HapticFeedback.vibrate();
      onPressed();
    },
    style: ButtonStyle(
      backgroundColor: WidgetStateProperty.all<Color>(
        color ?? Theme.of(context).colorScheme.primary,
      ),
      shape: WidgetStateProperty.all<RoundedRectangleBorder>(
        RoundedRectangleBorder(
          borderRadius: useInBorderRadius
              ? BorderRadius.circular(AppConstants.inBorderRadius)
              : BorderRadius.circular(AppConstants.outBorderRadius),
        ),
      ),
    ),
  );
}
