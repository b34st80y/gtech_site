import 'package:flutter/material.dart';
import 'package:gtech_site/widgets/page_state_notifier.dart';
import 'package:gtech_site/views/about_us/about_us_view.dart';
import 'package:gtech_site/views/home/home_view.dart';
import 'package:gtech_site/views/locations/locations_view.dart';
import 'package:gtech_site/views/services/services_view.dart';
import 'package:gtech_site/widgets/navigation_bar/navigation_bar.dart';
import 'package:gtech_site/widgets/navigation_drawer/navigation_drawer.dart';
import 'package:provider/provider.dart';
import 'package:responsive_builder/responsive_builder.dart';

class MainView extends StatelessWidget {
  final _pageOptions = [
    HomeView(),
    ServicesView(),
    LocationsView(),
    AboutUsView(),
  ];

  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(builder: (context, sizeInfo) {
      return Scaffold(
        drawer: sizeInfo.isMobile ? NavigationDrawer() : null,
        body: Padding(
          padding: sizeInfo.isMobile
              ? const EdgeInsets.all(12)
              : const EdgeInsets.all(50.0),
          child: ListView(
            children: [
              NavigationBar(),
              SizedBox(
                height: 20,
              ),
              _pageOptions[Provider.of<PageStateNotifier>(context).pageState]
            ],
          ),
        ),
      );
    });
  }
}
