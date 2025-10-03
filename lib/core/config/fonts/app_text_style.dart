import 'package:flutter/material.dart' show Theme;
import 'package:flutter/widgets.dart' show TextStyle, BuildContext, FontWeight;
import 'package:flutter_screenutil/flutter_screenutil.dart';

class AppTextStyle {
  AppTextStyle(this.context);
  final BuildContext context;

  TextStyle get headline1 => TextStyle(
    fontSize: 34.sp,
    fontWeight: FontWeight.bold,
    color: Theme.of(context).colorScheme.onPrimary,
  );

  TextStyle get headline2 => TextStyle(
    fontSize: 24.sp,
    //fontWeight: FontWeight.w600,
    color: Theme.of(context).colorScheme.onPrimary,
  );

  TextStyle get bodyText1 => TextStyle(
    fontSize: 16.sp,
    fontWeight: FontWeight.normal,
    color: Theme.of(context).colorScheme.onPrimary,
  );

  TextStyle get bodyText2 => TextStyle(
    fontSize: 14.sp,
    fontWeight: FontWeight.normal,
    color: Theme.of(context).colorScheme.onPrimary,
  );

  TextStyle get button => TextStyle(
    fontSize: 16.sp,
    fontWeight: FontWeight.w500,
    color: Theme.of(context).colorScheme.onPrimary,
  );

  TextStyle get hint => TextStyle(
    fontSize: 14.sp,
    fontWeight: FontWeight.normal,
    color: Theme.of(context).colorScheme.onPrimary.withAlpha(0x50),
  );

  TextStyle get disabled => TextStyle(
    fontSize: 14.sp,
    fontWeight: FontWeight.normal,
    color: Theme.of(context).colorScheme.onPrimary.withAlpha(0x20),
  );

  TextStyle get caption => TextStyle(
    fontSize: 12.sp,
    fontWeight: FontWeight.normal,
    color: Theme.of(context).colorScheme.onPrimary,
  );

  TextStyle get captionLight => TextStyle(
    fontSize: 12.sp,
    fontWeight: FontWeight.normal,
    color: Theme.of(context).colorScheme.onPrimary.withAlpha(0x50),
  );

  TextStyle get subtitle => TextStyle(
    // fontWeight: FontWeight.normal,
    color: Theme.of(context).colorScheme.onSurface.withAlpha(0x80),
  );
}
