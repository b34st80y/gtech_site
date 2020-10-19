import 'package:flutter/material.dart';
import 'package:gtech_site/routing/route_names.dart';
import 'package:gtech_site/views/about_us/about_us_view.dart';
import 'package:gtech_site/views/home/home_view.dart';
import 'package:gtech_site/views/locations/locations_view.dart';
import 'package:gtech_site/views/services/services_view.dart';

Route<dynamic> generateRoute(RouteSettings settings) {
  switch (settings.name) {
    case HomeRoute:
      return _getPageRoute(HomeView(), settings);
    case ServicesRoute:
      return _getPageRoute(ServicesView(), settings);
    case LocationsRoute:
      return _getPageRoute(LocationsView(), settings);
    case AboutRoute:
      return _getPageRoute(AboutUsView(), settings);
    default:
      return _getPageRoute(HomeView(), settings);
  }
}

PageRoute _getPageRoute(Widget child, RouteSettings settings) {
  return _FadeRoute(child: child, routeName: settings.name);
}

class _FadeRoute extends PageRouteBuilder {
  final Widget child;
  final String routeName;

  _FadeRoute({this.child, this.routeName})
      : super(
          settings: RouteSettings(name: routeName),
          pageBuilder: (
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
          ) =>
              child,
          transitionsBuilder: (
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
            Widget child,
          ) =>
              FadeTransition(
            opacity: animation,
            child: child,
          ),
        );
}
