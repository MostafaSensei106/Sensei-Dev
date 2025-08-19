import 'package:flutter/material.dart'
    show Scaffold, Material, Colors, InkWell, Theme, Icons;
import 'package:flutter/services.dart' show HapticFeedback;
import 'package:flutter/widgets.dart'
    show
        StatelessWidget,
        BuildContext,
        Widget,
        EdgeInsets,
        BorderRadius,
        Padding,
        BoxDecoration,
        Container,
        Icon;
import '../../config/constants/app_constants.dart' show AppConstants;

class ActionDrawerIcon extends StatelessWidget {
  const ActionDrawerIcon({super.key});

  /// Open the drawer with haptic feedback.
  ///
  /// Calls [HapticFeedback.vibrate] to generate a haptic feedback,
  /// then calls [Scaffold.of(context).openDrawer] to open the drawer.
  void openDrawer(final BuildContext context) {
    HapticFeedback.vibrate();
    Scaffold.of(context).openDrawer();
  }

  @override
  /// Returns a [Padding] widget with a [Material] widget as child.
  ///
  /// The [Material] widget is configured with a transparent color and a
  /// [InkWell] widget as child.
  ///
  /// The [InkWell] widget is configured with a rounded border with the
  /// [SenseiConst.outBorderRadius] radius, and an [onTap] callback that calls
  /// [openDrawer] with the given [context].
  ///
  /// The [InkWell] widget has a [_ActionDrawerContainer] widget as child,
  /// which is a [Container] widget with a rounded border and a transparent
  /// color.
  ///
  /// The [_ActionDrawerContainer] widget has a [_ActionDrawerIcon] widget as
  /// child, which is a [Icon] widget with the [Icons.more_vert_rounded] icon.
  Widget build(final BuildContext context) => Padding(
    padding: const EdgeInsets.all(AppConstants.padding),
    child: Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(AppConstants.outBorderRadius),
        onTap: () => openDrawer(context),
        child: _ActionDrawerContainer(child: _ActionDrawerIcon()),
      ),
    ),
  );
}

class _ActionDrawerContainer extends StatelessWidget {
  const _ActionDrawerContainer({required this.child});
  final Widget child;

  @override
  /// Returns a [Container] widget with the given properties.
  ///
  /// The [padding] is set to [const EdgeInsets.all(8)].
  ///
  /// The [decoration] is set to a [BoxDecoration] with a [BorderRadius] of
  /// [SenseiConst.outBorderRadius.r] and a [color] of the
  /// [Theme.of(context).colorScheme.surfaceContainerHigh] color with an alpha
  /// value of 0.3.
  ///
  /// The [child] is passed as-is.
  Widget build(final BuildContext context) => Container(
    padding: const EdgeInsets.all(5),
    decoration: BoxDecoration(
      borderRadius: BorderRadius.circular(AppConstants.outBorderRadius),
      color: Theme.of(
        context,
      ).colorScheme.surfaceContainerHigh.withAlpha((0.3 * 255).toInt()),
    ),
    child: child,
  );
}

class _ActionDrawerIcon extends StatelessWidget {
  @override
  Widget build(final BuildContext context) => const Icon(
    Icons.more_horiz_rounded,
    size: AppConstants.iconSize,
    color: Colors.white,
  );
}
