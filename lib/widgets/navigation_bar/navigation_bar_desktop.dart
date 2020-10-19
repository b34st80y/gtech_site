import 'package:flutter/material.dart';
import 'navbar_item.dart';
import 'navbar_logo.dart';

class NavigationBarDesktop extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          NavBarLogo(),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            mainAxisSize: MainAxisSize.min,
            children: [
              NavBarItem("Services", 1),
              VerticalDivider(),
              NavBarItem("Locations", 2),
              VerticalDivider(),
              NavBarItem("About Us", 3),
            ],
          )
        ],
      ),
    );;
  }
}
