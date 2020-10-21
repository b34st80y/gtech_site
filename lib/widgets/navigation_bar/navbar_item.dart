import 'package:flutter/material.dart';
import 'package:gtech_site/services/navigation_service.dart';
import 'package:provider/provider.dart';

class NavBarItem extends StatelessWidget {
  final String title;
  final String navPath;

  const NavBarItem(this.title, this.navPath);

  @override
  Widget build(BuildContext context) {
    NavigationService navigator = Provider.of<NavigationService>(context);

    return TextButton(
      child: Text(
        title,
        style: TextStyle(fontSize: 18),
      ),
      onPressed: () {
        navigator.navigateTo(navPath);
      },
    );
  }
}
