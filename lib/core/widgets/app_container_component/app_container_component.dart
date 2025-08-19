import 'package:flutter/material.dart' show Theme;
import 'package:flutter/widgets.dart'
    show
        StatelessWidget,
        BuildContext,
        Widget,
        Container,
        BoxDecoration,
        BorderRadius;
import '../../config/constants/app_constants.dart' show AppConstants;

class AppContainerComponent extends StatelessWidget {
  const AppContainerComponent({
    required this.child,
    super.key,
    this.useInBorderRadius = false,
  });
  final Widget child;
  final bool useInBorderRadius;

  @override
  /// Returns a [Container] widget with the given properties.
  ///
  /// The [color] property of the [BoxDecoration] is set to the
  /// [Theme.of(context).colorScheme.surfaceContainer] color.
  ///
  /// The [borderRadius] property of the [BoxDecoration] is set to a
  /// [BorderRadius.circular] with a radius determined by the
  /// [useInBorderRadius] property.
  ///
  /// The [child] is passed as-is.
  Widget build(final BuildContext context) => Container(
    decoration: BoxDecoration(
      color: Theme.of(context).colorScheme.surfaceContainer,
      borderRadius: useInBorderRadius
          ? BorderRadius.circular(AppConstants.inBorderRadius)
          : BorderRadius.circular(AppConstants.outBorderRadius),
    ),
    child: child,
  );
}
