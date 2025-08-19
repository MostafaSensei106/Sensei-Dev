import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../../config/constants/app_constants.dart';
import '../../config/fonts/app_text_style.dart';

class ProfilePageItemComponent extends StatelessWidget {
  const ProfilePageItemComponent({
    required this.icon,
    required this.title,
    required this.subtitle,
    required this.onTap,
    super.key,
  });

  final IconData icon;
  final String title;
  final String subtitle;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) => InkWell(
    borderRadius: BorderRadius.circular(AppConstants.outBorderRadius),
    onTap: () {
      HapticFeedback.vibrate();
      onTap();
    },
    child: Container(
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.surfaceContainer,
        borderRadius: BorderRadius.circular(AppConstants.outBorderRadius),
      ),
      child: Padding(
        padding: const EdgeInsets.all(AppConstants.paddingHalf),
        child: ListTile(
          horizontalTitleGap: 8,
          leading: Icon(icon, size: AppConstants.iconSize),
          title: Text(title),
          subtitle: Text(
            subtitle,
            style: AppTextStyle(context).subtitle.copyWith(fontSize: 12),
          ),
        ),
      ),
    ),
  );
}
