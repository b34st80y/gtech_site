import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';

class ServiceTile extends StatelessWidget {
  final String title;
  final String desc;
  final List<Color> colors;
  final String imagePath;
  final bool reversed;

  const ServiceTile(
      {@required this.title,
      @required this.desc,
      @required this.colors,
      @required this.imagePath,
      this.reversed = false});

  @override
  Widget build(BuildContext context) {
    if (!reversed)
      return Container(
        height: 400,
        decoration: BoxDecoration(
          color: Colors.white
          //gradient: LinearGradient(colors: [...colors]),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Flexible(
              flex: 4,
              child: Container(
                decoration: BoxDecoration(
                  image: DecorationImage(
                      image: AssetImage(imagePath), fit: BoxFit.cover),
                ),
              ),
            ),
            Flexible(
              flex: 6,
              child: Container(
                child: Padding(
                  padding: const EdgeInsets.all(24.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      SelectableText(
                        title,
                        style: TextStyle(
                            fontWeight: FontWeight.w600, fontSize: 24),
                      ),
                      SizedBox(
                        height: 20,
                      ),
                      SelectableText(
                        desc,
                        style: TextStyle(fontSize: 18),
                      ),
                    ],
                  ),
                ),
              ),
            )
          ],
        ),
      );
    else
      return Container(
        height: 400,
        decoration: BoxDecoration(
          color: Colors.grey[200]
          //gradient: LinearGradient(colors: [...colors]),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Flexible(
              flex: 6,
              child: Container(
                child: Padding(
                  padding: const EdgeInsets.all(24.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      SelectableText(
                        title,
                        style: TextStyle(
                            fontWeight: FontWeight.w600, fontSize: 24),
                      ),
                      SizedBox(
                        height: 20,
                      ),
                      SelectableText(
                        desc,
                        style: TextStyle(fontSize: 18),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            Flexible(
              flex: 4,
              child: Container(
                decoration: BoxDecoration(
                  image: DecorationImage(
                      image: AssetImage(imagePath), fit: BoxFit.cover),
                ),
              ),
            ),
          ],
        ),
      );
  }
}
