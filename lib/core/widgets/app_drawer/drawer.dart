import 'package:flutter/material.dart' show Drawer;
import 'package:flutter/widgets.dart';

class AppDrawer extends StatelessWidget {
  const AppDrawer({super.key});

  @override
  Widget build(final BuildContext context) =>
      Drawer(child: ListView(padding: EdgeInsets.zero));
}
