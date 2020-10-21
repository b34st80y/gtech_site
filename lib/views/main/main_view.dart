import 'package:flutter/material.dart';
import 'package:gtech_site/widgets/navigation_bar/navigation_bar.dart';
import 'package:gtech_site/widgets/navigation_drawer/navigation_drawer.dart';
import 'package:responsive_builder/responsive_builder.dart';

class MainView extends StatelessWidget {
  final Widget child;

  const MainView({@required this.child});

  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(builder: (context, sizeInfo) {
      return Scaffold(
        drawer: sizeInfo.isMobile ? NavigationDrawer() : null,
        body: Column(
          children: [
            NavigationBar(),
            SizedBox(
              height: 20,
            ),
            Expanded(
              child: child,
            )
          ],
        ),
      );
    });
  }
}
