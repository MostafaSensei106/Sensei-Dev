import 'package:flutter/widgets.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_svg/svg.dart';

class SvgComponent extends StatelessWidget {
  const SvgComponent({required this.svgPath, required this.text, super.key});
  final String svgPath;
  final String text;

  @override
  /// Returns a [Column] widget with a [Lottie.asset] widget and a [Text]
  /// widget as children. The [Lottie.asset] widget is configured with the
  /// given [svgPath], and a width and height of 200 logical pixels. The
  /// [Text] widget is configured with the given [text], and a font size of
  /// 16 logical pixels, and a color of the primary color of the theme.
  Widget build(final BuildContext context) => Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      SvgPicture.asset(svgPath, width: 300.w, height: 300.h, fit: BoxFit.cover),
      const SizedBox(height: 25),
      Text(
        text,
        // style: AppTextStyle.subtitle(context).copyWith(fontSize: 16.sp),
      ),
    ],
  );
}
