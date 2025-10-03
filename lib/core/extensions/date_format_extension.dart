import 'package:intl/intl.dart';

/// The extension for [DateTime] to format it in a specific way.
///
/// The format of the date is 'yyyy-MM-dd, h:mm a'.
extension DateFormatExtension on DateTime {
  /// The formatted date as a string.
  String get formatted {
    /// The formatter that formats the date in the specific way.
    final formatter = DateFormat(kDateFormat, kLocale);
    return formatter.format(this);
  }
}

/// The locale for the date formatter.
const String kLocale = 'en';

/// The format of the date for the date formatter.
const String kDateFormat = 'yyyy-MM-dd, h:mm a';
