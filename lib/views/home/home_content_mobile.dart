import 'package:flutter/material.dart';
import 'package:gtech_site/widgets/hook_image/hook_image.dart';
import 'package:gtech_site/widgets/intro_view/intro_view.dart';

class HomeContentMobile extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          HookImage(),
          SizedBox(
            height: 20,
          ),
          IntroView(),
        ],
      ),
    );
  }
}
