import 'package:flutter/material.dart';
import 'package:gtech_site/widgets/page_state_notifier.dart';
import 'package:provider/provider.dart';

class NavBarLogo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Provider.of<PageStateNotifier>(context, listen: false).newPage(0);
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
