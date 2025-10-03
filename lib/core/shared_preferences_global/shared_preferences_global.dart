import 'package:shared_preferences/shared_preferences.dart';

// ignore: avoid_classes_with_only_static_members
class SharedPreferencesGlobal {
  static late final SharedPreferences _prefs;

  Future<void> initialize() async {
    _prefs = await SharedPreferences.getInstance();
  }

  static dynamic _handleType<T>(String key, {value}) {
    switch (T) {
      case const (String):
        return value != null
            ? _prefs.setString(key, value as String)
            : _prefs.getString(key);
      case const (bool):
        return value != null
            ? _prefs.setBool(key, value as bool)
            : _prefs.getBool(key);
      case const (int):
        return value != null
            ? _prefs.setInt(key, value as int)
            : _prefs.getInt(key);
      case const (double):
        return value != null
            ? _prefs.setDouble(key, value as double)
            : _prefs.getDouble(key);
      case const (List<String>):
        return value != null
            ? _prefs.setStringList(key, value as List<String>)
            : _prefs.getStringList(key);
      default:
        throw UnsupportedError('Unsupported type: ${T.runtimeType}');
    }
  }

  static Future<void> setValue<T>(String key, T value) async {
    await _handleType<T>(key, value: value);
  }

  static T getValue<T>(String key) => _handleType<T>(key);

  static Future<void> editValue<T>(String key, T Function(T) update) async {
    final currentValue = getValue<T>(key);
    final newValue = update(currentValue);
    if (newValue != null) {
      await setValue<T>(key, newValue);
    } else {
      await deleteValue(key);
    }
  }

  static Future<void> deleteValue(String key) async {
    await _prefs.remove(key);
  }

  static bool isContainsKey(String key) => _prefs.containsKey(key);

  static Future<void> clearAll() async {
    await _prefs.clear();
  }
}
