import 'package:flutter/material.dart';
import 'package:gtech_site/services/navigation_service.dart';
import 'package:provider/provider.dart';

class DrawerItem extends StatelessWidget {
  final String title;
  final IconData icon;
  final String navPath;

  const DrawerItem(this.title, this.icon, this.navPath);

  @override
  Widget build(BuildContext context) {
    NavigationService navigator = Provider.of<NavigationService>(context);

    return Padding(
      padding: const EdgeInsets.only(
        left: 30,
        top: 60,
      ),
      child: Row(
        children: [
          Icon(icon),
          SizedBox(
            width: 30,
          ),
          TextButton(
            child: Text(
              title,
              style: TextStyle(fontSize: 18),
            ),
            onPressed: () {
              navigator.navigateTo(navPath);
              navigator.goBack();
            },
          ),
        ],
      ),
    );
  }
}
