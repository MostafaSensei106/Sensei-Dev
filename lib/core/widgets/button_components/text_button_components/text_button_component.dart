import 'package:flutter/material.dart' show TextButton, MaterialTapTargetSize;
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

import '../../../config/constants/app_constants.dart';

class TextButtonComponent extends StatelessWidget {
  const TextButtonComponent({
    required this.text,
    required this.onPressed,
    super.key,
    this.isClose = false,
    this.useInBorderRadius = false,
  });
  final String text;
  final VoidCallback onPressed;
  final bool isClose;
  final bool useInBorderRadius;

  @override
  Widget build(final BuildContext context) => TextButton(
    onPressed: () {
      HapticFeedback.vibrate();
      onPressed();
    },
    style: TextButton.styleFrom(
      tapTargetSize: MaterialTapTargetSize.shrinkWrap,
      shape: RoundedRectangleBorder(
        borderRadius: useInBorderRadius
            ? BorderRadius.circular(AppConstants.inBorderRadius)
            : BorderRadius.circular(AppConstants.outBorderRadius),
      ),
      elevation: 0,
      enableFeedback: true,
      enabledMouseCursor: SystemMouseCursors.click,
    ),
    child: Text(text),
  );
}
