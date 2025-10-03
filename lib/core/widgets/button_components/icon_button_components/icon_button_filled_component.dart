import 'package:flutter/material.dart' show IconButton;
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

class IconButtonFilledComponent extends StatelessWidget {
  const IconButtonFilledComponent({
    required this.icon,
    required this.onPressed,
    super.key,
  });
  final IconData icon;
  final VoidCallback onPressed;

  @override
  /// Builds an [IconButton] widget that displays an icon and
  /// responds to taps by calling [onPressed] and providing haptic
  /// feedback. The button's appearance is determined by the [icon]
  /// property.
  Widget build(final BuildContext context) => IconButton.filled(
    icon: Icon(icon),
    onPressed: () {
      HapticFeedback.vibrate();
      onPressed();
    },
  );
}
