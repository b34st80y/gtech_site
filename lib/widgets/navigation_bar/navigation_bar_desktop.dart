import 'package:flutter/material.dart';
import 'package:gtech_site/routing/route_names.dart';
import 'package:gtech_site/widgets/navigation_bar/navbar_item.dart';
import 'package:gtech_site/widgets/navigation_bar/navbar_logo.dart';

class NavigationBarDesktop extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      decoration: BoxDecoration(
          gradient:
              LinearGradient(colors: [Colors.purple, Colors.deepPurple[800]])),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 50),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            NavBarLogo(),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              mainAxisSize: MainAxisSize.min,
              children: [
                NavBarItem("Services", ServicesRoute),
                VerticalDivider(),
                NavBarItem("Locations", LocationsRoute),
                VerticalDivider(),
                NavBarItem("About Us", AboutRoute),
              ],
            )
          ],
        ),
      ),
    );
  }
}
