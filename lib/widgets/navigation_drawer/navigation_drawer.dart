import 'package:flutter/material.dart';
import 'package:gtech_site/widgets/navigation_drawer/drawer_item.dart';
import 'package:gtech_site/widgets/navigation_drawer/navigation_drawer_header.dart';

class NavigationDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 300,
      decoration: BoxDecoration(
        color: Colors.white,
        boxShadow: [
          BoxShadow(color: Colors.black, blurRadius: 16)
        ],
      ),
      child: Column(
        children: [
          NavigationDrawerHeader(),
          DrawerItem("Services", Icons.all_inclusive, 1),
          DrawerItem("Locations", Icons.location_on, 2),
          DrawerItem("About Us", Icons.people, 3),
        ],
      ),
    );
  }
}
