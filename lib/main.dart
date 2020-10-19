import 'package:flutter/material.dart';
import 'package:gtech_site/widgets/page_state_notifier.dart';
import 'package:gtech_site/views/main/main_view.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(MyApp());
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
      home: ChangeNotifierProvider<PageStateNotifier>(
          create: (_) => PageStateNotifier(), child: MainView()),
    );
  }
}
