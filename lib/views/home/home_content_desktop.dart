import 'package:flutter/material.dart';
import 'package:gtech_site/widgets/hook_image/hook_image.dart';
import 'package:gtech_site/widgets/intro_view/intro_view.dart';

class HomeContentDesktop extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      mainAxisSize: MainAxisSize.max,
      children: [
        ConstrainedBox(
            constraints: BoxConstraints(
                maxWidth: MediaQuery.of(context).size.width / 2 - 75),
            child: IntroView()),
        ConstrainedBox(
            constraints: BoxConstraints(
                maxWidth: MediaQuery.of(context).size.width / 2 - 75),
            child: HookImage()),
      ],
    );
  }
}
