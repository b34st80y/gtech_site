import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../page_state_notifier.dart';

class DrawerItem extends StatelessWidget {
  final String title;
  final IconData icon;
  final int pageNav;

  const DrawerItem(this.title, this.icon, this.pageNav);

  @override
  Widget build(BuildContext context) {
    PageStateNotifier _pageState = Provider.of<PageStateNotifier>(context);
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
              _pageState.newPage(pageNav);
              Navigator.of(context).pop();
            },
          ),
        ],
      ),
    );
  }
}
