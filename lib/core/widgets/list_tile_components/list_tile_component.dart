import 'package:flutter/material.dart'
    show Theme, Material, Colors, ListTile, InkWell;
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import '../../config/constants/app_constants.dart';
import '../../config/constants/app_enums.dart';
import '../app_divider_components/full_app_divider_components.dart';

class ListTileWidgetComponent extends StatelessWidget {
  const ListTileWidgetComponent({
    required this.title,
    required this.selected,
    required this.groupType,
    super.key,
    this.subtitle,
    this.trailing,
    this.onTap,
    this.useinBorderRadius = false,
  });
  final String title;
  final String? subtitle;
  final Widget? trailing;
  final VoidCallback? onTap;
  final bool selected;
  final bool useinBorderRadius;
  final ListTileGroupType groupType;

  /// Calculates the border radius for the [ListTile] based on the [ListTileGroupType]
  /// and [useinBorderRadius].
  ///
  /// The [ListTileGroupType.top] and [ListTileGroupType.bottom] will have a border
  /// radius on the top and bottom respectively, while [ListTileGroupType.single] will
  /// have a border radius on all sides. [ListTileGroupType.middle] and
  /// [ListTileGroupType.none] will have no border radius.
  ///
  /// If [useinBorderRadius] is `true`, the radius will be set to
  /// [AppConstants.inBorderRadius], otherwise it will be set to
  /// [AppConstants.outBorderRadius].
  BorderRadius _getBorderRadius() {
    final borderRadius = useinBorderRadius
        ? AppConstants.inBorderRadius
        : AppConstants.outBorderRadius;
    switch (groupType) {
      case ListTileGroupType.top:
        return BorderRadius.vertical(top: Radius.circular(borderRadius));
      case ListTileGroupType.bottom:
        return BorderRadius.vertical(bottom: Radius.circular(borderRadius));
      case ListTileGroupType.single:
        return BorderRadius.circular(borderRadius);
      case ListTileGroupType.middle:
        return BorderRadius.zero;
      case ListTileGroupType.none:
        return BorderRadius.circular(0);
    }
  }

  @override
  /// Builds a [Container] widget with a [Column] containing a [Material]
  /// widget wrapping a [ListTile]. The appearance and behavior of the
  /// [ListTile] are determined by the provided parameters. It includes
  /// customizable [title], [subtitle], and [trailing] widgets.
  /// The [onTap] callback is triggered when the [InkWell] is tapped.
  /// The border radius is configured based on the [groupType] and
  /// [useinBorderRadius] properties, and the background color is set
  /// according to the current theme's color scheme.
  Widget build(final BuildContext context) {
    final borderRadius = _getBorderRadius();
    return Container(
      margin: groupType == ListTileGroupType.top
          ? EdgeInsets.only(top: AppConstants.margin.h)
          : null,
      decoration: BoxDecoration(
        borderRadius: borderRadius,
        color: Theme.of(context).colorScheme.surfaceContainer,
      ),
      child: Column(
        children: [
          Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: () {
                HapticFeedback.vibrate();
                onTap!();
              },
              borderRadius: borderRadius,
              child: ListTile(
                title: Text(title),
                subtitle: subtitle != null
                    ? Text(subtitle!, overflow: TextOverflow.ellipsis)
                    : null,
                trailing: trailing,
                horizontalTitleGap: 13,
                contentPadding: const EdgeInsets.symmetric(horizontal: 8),
              ),
            ),
          ),
          if (groupType == ListTileGroupType.middle)
            const FullAppDividerComponents(),
        ],
      ),
    );
  }
}
