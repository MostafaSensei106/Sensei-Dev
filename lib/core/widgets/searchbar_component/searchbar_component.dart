import 'package:flutter/material.dart';

import '../../config/constants/app_constants.dart';

class SearchbarComponent extends StatelessWidget {
  const SearchbarComponent({required this.icon, super.key});

  final IconData icon;

  @override
  Widget build(final BuildContext context) => SearchBar(
    elevation: const WidgetStatePropertyAll(0),
    leading: Icon(icon),
    backgroundColor: WidgetStatePropertyAll(
      Theme.of(context).colorScheme.surfaceContainer,
    ),
    shape: const WidgetStatePropertyAll(
      RoundedRectangleBorder(
        borderRadius: BorderRadius.all(
          Radius.circular(AppConstants.outBorderRadius),
        ),
      ),
    ),
  );
}
