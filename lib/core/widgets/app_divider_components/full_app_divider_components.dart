import 'package:flutter/material.dart' show Divider, Theme;
import 'package:flutter/widgets.dart';

class FullAppDividerComponents extends StatelessWidget {
  const FullAppDividerComponents({super.key});

  @override
  Widget build(final BuildContext context) => Divider(
    thickness: 0.2,
    height: 0,
    indent: 0,
    endIndent: 0,
    color: Theme.of(context).colorScheme.outline.withAlpha(0x80),
  );
}
