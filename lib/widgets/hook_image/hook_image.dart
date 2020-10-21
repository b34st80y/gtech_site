import 'package:flutter/material.dart';

class HookImage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Image.asset(
      'images/services/software_dev/dev3.jpg',
      fit: BoxFit.cover,
    );
  }
}
