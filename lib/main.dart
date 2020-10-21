import 'package:flutter/material.dart';
import 'package:gtech_site/routing/route_names.dart';
import 'package:gtech_site/routing/router.dart';
import 'package:gtech_site/services/navigation_service.dart';
import 'package:gtech_site/views/main/main_view.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(Provider<NavigationService>.value(
    value: NavigationService(),
    child: MyApp(),
  ));
}

class MyApp extends StatefulWidget {
  // This widget is the root of your application.
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'GTech',
      theme: ThemeData(
        primarySwatch: Colors.purple,
      ),
      builder: (context, child) => MainView(
        child: child,
      ),
      navigatorKey: Provider.of<NavigationService>(context).navigatorKey,
      onGenerateRoute: generateRoute,
      initialRoute: HomeRoute,
    );
  }
}
