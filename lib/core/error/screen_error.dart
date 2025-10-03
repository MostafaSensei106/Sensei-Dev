import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../config/constants/app_constants.dart';

void errorScreen() {
  ErrorWidget.builder = (final details) => Material(
    child: Center(
      child: Padding(
        padding: const EdgeInsets.all(AppConstants.padding),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          spacing: AppConstants.paddingHalf,
          children: [
            Container(
              padding: const EdgeInsets.all(AppConstants.paddingHalf),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(
                  AppConstants.outBorderRadius,
                ),
              ),
              child: SvgPicture.asset(
                'assets/svgs/undraw_fixing-bugs_13mt.svg',
                width: 210,
                height: 210,
              ),
            ),
            const Text('Something went wrong'),
            Text(
              details.exception.toString(),
              textAlign: TextAlign.center,
              style: const TextStyle(color: Colors.grey),
            ),
          ],
        ),
      ),
    ),
  );
}
