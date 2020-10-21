import 'package:flutter/material.dart';
import 'package:gtech_site/routing/route_names.dart';
import 'package:gtech_site/widgets/navigation_bar/navbar_item.dart';
import 'package:gtech_site/widgets/navigation_bar/navbar_logo.dart';

class NavigationBarDesktop extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 12, horizontal: 50),
      child: Container(
        height: 75,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
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
