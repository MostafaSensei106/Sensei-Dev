import 'package:flutter/material.dart'
    show kToolbarHeight, AppBar, Theme, Icons, IconButton, Localizations;
import 'package:flutter/services.dart' show HapticFeedback;
import 'package:flutter/widgets.dart'
    show
        StatelessWidget,
        PreferredSizeWidget,
        Size,
        BuildContext,
        Widget,
        IconData,
        EdgeInsets,
        Navigator,
        Text,
        BorderRadius,
        RoundedRectangleBorder,
        Icon;
import '../../config/constants/app_constants.dart';

class SidePageAppBar extends StatelessWidget implements PreferredSizeWidget {
  const SidePageAppBar({
    required this.title,
    super.key,
    this.useBackButton = false,
    this.actions,
  });
  final String title;
  final bool useBackButton;
  final List<Widget>? actions;

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  /// Navigate back in the app by calling [Navigator.pop] on the given [context], and
  /// trigger a haptic feedback with [HapticFeedback.vibrate].
  void leave(final BuildContext context) {
    HapticFeedback.vibrate();
    Navigator.pop(context);
  }

  bool cheakLocation(BuildContext context) {
    final locale = Localizations.localeOf(context);
    final isArabic = locale.languageCode == 'ar';
    return isArabic;
  }

  @override
  /// Returns an [AppBar] widget with a centered title and a leading widget that is a left
  /// arrow icon. When the icon is tapped, it triggers the [leave] function to navigate back in
  /// the app. The [AppBar] has no elevation and a white background.
  Widget build(final BuildContext context) => AppBar(
    elevation: 0,
    foregroundColor: Theme.of(context).colorScheme.onSurface,
    title: Text(title),
    centerTitle: true,
    forceMaterialTransparency: true,
    leading: useBackButton
        ? _buildSidePageAppBarIcon(
            context,
            cheakLocation(context)
                ? Icons.keyboard_double_arrow_right_rounded
                : Icons.keyboard_double_arrow_left_rounded,
          )
        : null,
    actions: actions,
  );

  /// Returns a [Padding] widget containing a [Material] widget with an [InkWell] child.
  ///
  /// The [InkWell] widget has a rounded border and is wrapped in a transparent [Material] widget.
  /// When tapped, it triggers the [leave] function to navigate back in the app.
  ///
  /// The [InkWell] contains a [Container] with a rounded border and a background color of
  /// [Theme.of(context).colorScheme.surfaceContainer]. Inside the [Container] is an [Icon] widget
  /// with the provided [icon] parameter, sized according to [SenseiConst.iconSize] and colored
  /// using [Theme.of(context).colorScheme.onSurface].

  Widget _buildSidePageAppBarIcon(
    final BuildContext context,
    final IconData icon,
  ) => IconButton.filled(
    style: IconButton.styleFrom(
      backgroundColor: Theme.of(context).colorScheme.surfaceContainer,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(AppConstants.outBorderRadius),
      ),
      padding: const EdgeInsets.all(4),
    ),
    onPressed: () => leave(context),
    icon: Icon(icon, size: AppConstants.iconSize),
    color: Theme.of(context).colorScheme.onSurface,
  );
}
