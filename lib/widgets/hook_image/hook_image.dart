import 'package:flutter/material.dart';

class HookImage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Image.asset(
      'assets/images/placeholder.png',
      fit: BoxFit.fill,
    );
  }
}
