import 'package:flutter/material.dart';
import 'package:gtech_site/locator.dart';
import 'package:gtech_site/services/navigation_service.dart';

class NavBarItem extends StatelessWidget {
  final String title;
  final String navPath;

  const NavBarItem(this.title, this.navPath);

  @override
  Widget build(BuildContext context) {
    return TextButton(
      child: Text(
        title,
        style: TextStyle(fontSize: 18),
      ),
      onPressed: () {
        locator<NavigationService>().navigateTo(navPath);
      },
    );
  }
}
