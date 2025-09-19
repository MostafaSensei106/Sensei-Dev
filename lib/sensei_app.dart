import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import 'core/config/theme/color/dark_theme.dart';
import 'core/config/theme/color/light_theme.dart';
import 'feat/home/ui/page/home_page.dart';

class SenseiApp extends StatelessWidget {
  const SenseiApp({super.key});

  @override
  Widget build(BuildContext context) => ScreenUtilInit(
    designSize: const Size(1920, 1080),
    minTextAdapt: true,
    splitScreenMode: true,
    builder: (context, child) => MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Sensei-Dev',
      theme: LightTheme,
      darkTheme: DarkTheme,
      home: const HyprlandDesktop(),
    ),
  );
}
