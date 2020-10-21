import 'package:flutter/material.dart';
import 'package:gtech_site/widgets/hook_image/hook_image.dart';
import 'package:gtech_site/widgets/intro_view/intro_view.dart';

class HomeContentDesktop extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        height: 800,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Flexible(
              flex: 1,
              child: IntroView(),
            ),
            Flexible(
              flex: 1,
              child: Container(
                  child: HookImage()),
            ),
          ],
        ),
      ),
    );
  }
}
