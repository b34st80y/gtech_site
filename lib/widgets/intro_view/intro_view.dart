import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:responsive_builder/responsive_builder.dart';

class IntroView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(builder: (context, sizeInfo) {
      var textAlignment = sizeInfo.isMobile ? TextAlign.center : TextAlign.left;
      double titleSize = sizeInfo.isMobile
          ? 50
          : sizeInfo.isTablet
              ? 65
              : 80;
      double descSize = sizeInfo.isMobile ? 16 : 21;
      double padding = sizeInfo.isMobile ? 8 : 18;

      return Container(
        padding: EdgeInsets.all(padding),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SelectableText(
              "How can we make tech work for you?",
              style:
                  TextStyle(fontWeight: FontWeight.w800, fontSize: titleSize),
              textAlign: textAlignment,
            ),
            SizedBox(
              height: 30,
            ),
            SelectableText(
              "Whether your small business is in need of an upgrade, your home setup is lagging a bit behind, or you have "
              "the next groundbreaking app idea; our team of multi-talented professionals is here to help!  "
              "Check out our services and see what we an do for you!",
              style: TextStyle(
                fontSize: descSize,
              ),
            ),
          ],
        ),
      );
    });
  }
}
