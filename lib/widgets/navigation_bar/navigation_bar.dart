import 'package:flutter/material.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:gtech_site/widgets/navigation_bar/navigation_bar_desktop.dart';
import 'navigation_bar_mobile.dart';

class NavigationBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ScreenTypeLayout(
      mobile: NavigationBarMobile(),
      tablet: NavigationBarDesktop(),
      desktop: NavigationBarDesktop(),
    );
  }
}
