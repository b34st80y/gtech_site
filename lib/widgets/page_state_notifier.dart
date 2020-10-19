import 'package:flutter/widgets.dart';

class PageStateNotifier with ChangeNotifier{
  int _pageState = 0;

  int get pageState => _pageState;

  void newPage(int nextPage) {
    _pageState = nextPage;
    notifyListeners();
  }

}