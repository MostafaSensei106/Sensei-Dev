import 'package:flutter/material.dart' show IconButton;
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

class IconButtonOutlineComponent extends StatelessWidget {
  const IconButtonOutlineComponent({
    required this.icon,
    required this.onPressed,
    super.key,
  });
  final IconData icon;
  final VoidCallback onPressed;

  @override
  /// Builds an [IconButton.outlined] widget that displays an icon and
  /// responds to taps by calling [onPressed] and providing haptic
  /// feedback. The button's appearance is determined by the [icon]
  /// property.
  Widget build(final BuildContext context) => IconButton.outlined(
    icon: Icon(icon),
    onPressed: () {
      HapticFeedback.vibrate();
      onPressed();
    },
  );
}
