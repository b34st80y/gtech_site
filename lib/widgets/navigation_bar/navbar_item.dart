import 'package:flutter/material.dart';
import 'package:gtech_site/widgets/page_state_notifier.dart';
import 'package:provider/provider.dart';

class NavBarItem extends StatelessWidget {
  final String title;
  final int pageNav;

  const NavBarItem(this.title, this.pageNav);

  @override
  Widget build(BuildContext context) {
    PageStateNotifier _pageState = Provider.of<PageStateNotifier>(context);

    return TextButton(
      child: Text(
        title,
        style: TextStyle(fontSize: 18),
      ),
      onPressed: () {
        _pageState.newPage(pageNav);
      },
    );
  }
}
