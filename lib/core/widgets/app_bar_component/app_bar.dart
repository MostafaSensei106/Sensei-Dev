import 'package:flutter/material.dart' show kToolbarHeight, AppBar, Colors;
import 'package:flutter/widgets.dart'
    show Size, StatelessWidget, PreferredSizeWidget, BuildContext, Widget, Text;

class ApAppBar extends StatelessWidget implements PreferredSizeWidget {
  const ApAppBar({required this.title, super.key});
  final String title;

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  @override
  Widget build(final BuildContext context) => AppBar(
    elevation: 0,
    backgroundColor: Colors.transparent,
    title: Text(title),
    centerTitle: true,
  );
}
