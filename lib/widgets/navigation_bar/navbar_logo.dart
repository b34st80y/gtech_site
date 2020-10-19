import 'package:flutter/material.dart';
import 'package:gtech_site/locator.dart';
import 'package:gtech_site/routing/route_names.dart';
import 'package:gtech_site/services/navigation_service.dart';

class NavBarLogo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        locator<NavigationService>().navigateTo(HomeRoute);
      },
      child: SizedBox(
        height: 80,
        width: 150,
        child: Text(
          "GTech Logo",
          style: TextStyle(fontSize: 32),
        ),
      ),
    );
  }
}
