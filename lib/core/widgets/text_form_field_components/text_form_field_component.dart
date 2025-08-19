import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../../config/constants/app_constants.dart';
import '../../config/fonts/app_text_style.dart';

class TextFormFieldComponent extends StatelessWidget {
  const TextFormFieldComponent({
    required this.label,
    required this.controller,
    super.key,
    this.prefix,
    this.suffix,
    this.hint,
    this.isPassword = false,
    this.readOnly = false,
    this.keyboardType = TextInputType.text,
    this.onChanged,
    this.validator,
    this.prefixText,
    this.suffixText,
    this.prefixIcon,
    this.suffixIcon,
    this.inputFormatters,
    this.isEnabled = true,
  });

  final Widget? prefix;
  final String? prefixText;
  final String? suffixText;
  final Widget? prefixIcon;
  final Widget? suffixIcon;
  final Widget? suffix;
  final String label;
  final String? hint;
  final bool? isEnabled;
  final bool isPassword;
  final bool readOnly;
  final TextInputType keyboardType;
  final TextEditingController controller;
  final Function(String)? onChanged;
  final String? Function(String?)? validator;
  final List<TextInputFormatter>? inputFormatters;

  @override
  Widget build(final BuildContext context) => TextFormField(
    controller: controller,
    keyboardType: keyboardType,
    obscureText: isPassword,
    readOnly: readOnly,
    onChanged: onChanged,
    validator: validator,
    inputFormatters: inputFormatters,
    enabled: isEnabled,
    decoration: InputDecoration(
      labelText: label,
      hintText: hint ?? label,
      labelStyle: AppTextStyle(context).subtitle,
      prefixIcon: prefixIcon,
      suffixIcon: suffixIcon,
      prefix: prefix,
      suffix: suffix,

      prefixText: prefixText,
      suffixText: suffixText,
      suffixStyle: AppTextStyle(context).subtitle,
      border: const OutlineInputBorder(
        borderRadius: BorderRadius.all(
          Radius.circular(AppConstants.outBorderRadius),
        ),
      ),
    ),
    onTapOutside: (final event) =>
        FocusManager.instance.primaryFocus?.unfocus(),
  );
}
