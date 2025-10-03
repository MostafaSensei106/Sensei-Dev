import 'dart:async';

import 'package:flutter/material.dart';

class HyprlandDesktop extends StatefulWidget {
  const HyprlandDesktop({super.key});

  @override
  State<HyprlandDesktop> createState() => _HyprlandDesktopState();
}

class _HyprlandDesktopState extends State<HyprlandDesktop> {
  int currentWorkspace = 1;
  late Timer _timer;
  DateTime _currentTime = DateTime.now();

  final List<WindowData> _windows = [
    WindowData(
      id: 1,
      title: 'Terminal',
      icon: Icons.terminal,
      workspace: 1,
      x: 0.0,
      y: 0.0,
      width: 0.5,
      height: 0.6,
    ),
    WindowData(
      id: 2,
      title: 'Browser',
      icon: Icons.web,
      workspace: 1,
      x: 0.5,
      y: 0.0,
      width: 0.5,
      height: 0.6,
    ),
    WindowData(
      id: 3,
      title: 'Files',
      icon: Icons.folder,
      workspace: 1,
      x: 0.0,
      y: 0.6,
      width: 1.0,
      height: 0.4,
    ),
    WindowData(
      id: 4,
      title: 'Calculator',
      icon: Icons.calculate,
      workspace: 2,
      x: 0.0,
      y: 0.0,
      width: 0.4,
      height: 0.5,
    ),
    WindowData(
      id: 5,
      title: 'Settings',
      icon: Icons.settings,
      workspace: 2,
      x: 0.4,
      y: 0.0,
      width: 0.6,
      height: 1.0,
    ),
  ];

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      setState(() {
        _currentTime = DateTime.now();
      });
    });
  }

  @override
  void dispose() {
    _timer.cancel();
    super.dispose();
  }

  List<WindowData> get currentWorkspaceWindows => _windows
      .where((w) => w.workspace == currentWorkspace && !w.minimized)
      .toList();

  void _switchWorkspace(int workspace) {
    setState(() {
      currentWorkspace = workspace;
    });
  }

  void _toggleWindowMinimize(int windowId) {
    setState(() {
      final windowIndex = _windows.indexWhere((w) => w.id == windowId);
      if (windowIndex != -1) {
        _windows[windowIndex] = _windows[windowIndex].copyWith(
          minimized: !_windows[windowIndex].minimized,
        );
      }
    });
  }

  void _closeWindow(int windowId) {
    setState(() {
      _windows.removeWhere((w) => w.id == windowId);
    });
  }

  @override
  Widget build(BuildContext context) => Scaffold(
    body: Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            Color(0xFF0F172A), // slate-900
            Color(0xFF581C87), // purple-900
            Color(0xFF0F172A), // slate-900
          ],
        ),
      ),
      child: Column(
        children: [
          // Top Bar
          _buildTopBar(),
          // Desktop Area
          Expanded(child: _buildDesktop()),
        ],
      ),
    ),
  );

  Widget _buildTopBar() => Container(
    height: 32,
    decoration: BoxDecoration(
      color: Colors.black.withOpacity(0.4),
      border: Border(bottom: BorderSide(color: Colors.white.withOpacity(0.1))),
    ),
    child: Padding(
      padding: const EdgeInsets.symmetric(horizontal: 12),
      child: Row(
        children: [
          // Workspaces
          ...List.generate(5, (index) {
            final workspace = index + 1;
            final isActive = workspace == currentWorkspace;
            final hasWindows = _windows.any((w) => w.workspace == workspace);

            return GestureDetector(
              onTap: () => _switchWorkspace(workspace),
              child: Container(
                margin: const EdgeInsets.only(right: 6),
                width: 24,
                height: 24,
                decoration: BoxDecoration(
                  color: isActive
                      ? Colors.blue.shade500
                      : hasWindows
                      ? Colors.white.withOpacity(0.2)
                      : Colors.white.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(4),
                ),
                child: Center(
                  child: Text(
                    workspace.toString(),
                    style: TextStyle(
                      color: isActive ? Colors.white : Colors.white70,
                      fontSize: 11,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
              ),
            );
          }),

          const SizedBox(width: 12),
          Container(width: 1, height: 16, color: Colors.white24),
          const SizedBox(width: 12),

          // Current Layout Info
          const Icon(Icons.monitor, color: Colors.white70, size: 16),
          const SizedBox(width: 6),
          const Text(
            'Tiling',
            style: TextStyle(color: Colors.white70, fontSize: 11),
          ),

          const Spacer(),

          // System Info
          _buildSystemInfo(),
        ],
      ),
    ),
  );

  Widget _buildSystemInfo() => Row(
    children: [
      // Weather
      Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
        decoration: BoxDecoration(
          color: Colors.white.withOpacity(0.1),
          borderRadius: BorderRadius.circular(12),
        ),
        child: const Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.wb_sunny, color: Colors.orange, size: 14),
            SizedBox(width: 4),
            Text('24°C', style: TextStyle(color: Colors.white, fontSize: 11)),
            SizedBox(width: 6),
            Icon(Icons.air, color: Colors.white70, size: 12),
            Text(
              '12km/h',
              style: TextStyle(color: Colors.white70, fontSize: 10),
            ),
          ],
        ),
      ),

      const SizedBox(width: 12),

      // System Icons
      const Icon(Icons.wifi, color: Colors.white70, size: 16),
      const SizedBox(width: 8),
      const Icon(Icons.battery_full, color: Colors.green, size: 16),
      const SizedBox(width: 8),
      const Icon(Icons.volume_up, color: Colors.white70, size: 16),

      const SizedBox(width: 12),

      // Time
      Text(
        '${_currentTime.hour.toString().padLeft(2, '0')}:${_currentTime.minute.toString().padLeft(2, '0')}',
        style: const TextStyle(
          color: Colors.white,
          fontSize: 12,
          fontWeight: FontWeight.w500,
        ),
      ),
    ],
  );

  Widget _buildDesktop() => Stack(
    children: [
      // Background
      Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/images/background/4152.jpg'),
            fit: BoxFit.cover,
          ),
        ),
      ),

      // Windows
      ...currentWorkspaceWindows.map((window) => _buildWindow(window)),
    ],
  );

  Widget _buildWindow(WindowData window) => Positioned(
    left: window.x * MediaQuery.of(context).size.width,
    top:
        window.y *
        (MediaQuery.of(context).size.height -
            32 -
            48), // Account for top and bottom bars
    width: window.width * MediaQuery.of(context).size.width,
    height: window.height * (MediaQuery.of(context).size.height - 32 - 48),
    child: Container(
      decoration: BoxDecoration(
        color: Colors.grey.shade900,
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: Colors.white.withOpacity(0.1)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.3),
            blurRadius: 10,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Column(
        children: [
          // Window Title Bar
          Container(
            height: 28,
            decoration: BoxDecoration(
              color: Colors.grey.shade800,
              borderRadius: const BorderRadius.only(
                topLeft: Radius.circular(8),
                topRight: Radius.circular(8),
              ),
              border: Border(
                bottom: BorderSide(color: Colors.white.withOpacity(0.1)),
              ),
            ),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8),
              child: Row(
                children: [
                  Icon(window.icon, color: Colors.white70, size: 14),
                  const SizedBox(width: 6),
                  Expanded(
                    child: Text(
                      window.title,
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 12,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                  // Window Controls
                  GestureDetector(
                    onTap: () => _toggleWindowMinimize(window.id),
                    child: Container(
                      width: 16,
                      height: 16,
                      margin: const EdgeInsets.only(right: 4),
                      decoration: BoxDecoration(
                        color: Colors.yellow.shade600,
                        shape: BoxShape.circle,
                      ),
                      child: const Icon(
                        Icons.remove,
                        color: Colors.black,
                        size: 10,
                      ),
                    ),
                  ),
                  GestureDetector(
                    onTap: () => _closeWindow(window.id),
                    child: Container(
                      width: 16,
                      height: 16,
                      decoration: BoxDecoration(
                        color: Colors.red.shade600,
                        shape: BoxShape.circle,
                      ),
                      child: const Icon(
                        Icons.close,
                        color: Colors.white,
                        size: 10,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
          // Window Content
          Expanded(
            child: Container(
              padding: const EdgeInsets.all(12),
              child: _getWindowContent(window),
            ),
          ),
        ],
      ),
    ),
  );

  Widget _getWindowContent(WindowData window) {
    switch (window.title) {
      case 'Terminal':
        return Container(
          color: Colors.black,
          padding: const EdgeInsets.all(8),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'user@hyprland:~\$ ',
                style: TextStyle(
                  color: Colors.green.shade400,
                  fontFamily: 'monospace',
                ),
              ),
              const Text(
                'neofetch',
                style: TextStyle(color: Colors.white, fontFamily: 'monospace'),
              ),
              const SizedBox(height: 8),
              Text(
                'OS: Arch Linux',
                style: TextStyle(
                  color: Colors.cyan.shade300,
                  fontFamily: 'monospace',
                ),
              ),
              Text(
                'WM: Hyprland',
                style: TextStyle(
                  color: Colors.cyan.shade300,
                  fontFamily: 'monospace',
                ),
              ),
              Text(
                'Shell: zsh',
                style: TextStyle(
                  color: Colors.cyan.shade300,
                  fontFamily: 'monospace',
                ),
              ),
            ],
          ),
        );
      case 'Browser':
        return Column(
          children: [
            Container(
              height: 32,
              color: Colors.grey.shade700,
              padding: const EdgeInsets.symmetric(horizontal: 8),
              child: Row(
                children: [
                  const Icon(Icons.lock, color: Colors.green, size: 16),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8),
                      decoration: BoxDecoration(
                        color: Colors.grey.shade600,
                        borderRadius: BorderRadius.circular(4),
                      ),
                      child: const Text(
                        'https://hyprland.org',
                        style: TextStyle(color: Colors.white, fontSize: 12),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Expanded(
              child: Container(
                color: Colors.white,
                child: const Center(
                  child: Text(
                    'Hyprland - Dynamic Tiling Wayland Compositor',
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  ),
                ),
              ),
            ),
          ],
        );
      default:
        return Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(window.icon, color: Colors.white54, size: 48),
              const SizedBox(height: 12),
              Text(
                window.title,
                style: const TextStyle(color: Colors.white, fontSize: 16),
              ),
            ],
          ),
        );
    }
  }
}

class WindowData {
  WindowData({
    required this.id,
    required this.title,
    required this.icon,
    required this.workspace,
    required this.x,
    required this.y,
    required this.width,
    required this.height,
    this.minimized = false,
  });
  final int id;
  final String title;
  final IconData icon;
  final int workspace;
  final double x;
  final double y;
  final double width;
  final double height;
  final bool minimized;

  WindowData copyWith({
    int? id,
    String? title,
    IconData? icon,
    int? workspace,
    double? x,
    double? y,
    double? width,
    double? height,
    bool? minimized,
  }) => WindowData(
    id: id ?? this.id,
    title: title ?? this.title,
    icon: icon ?? this.icon,
    workspace: workspace ?? this.workspace,
    x: x ?? this.x,
    y: y ?? this.y,
    width: width ?? this.width,
    height: height ?? this.height,
    minimized: minimized ?? this.minimized,
  );
}
