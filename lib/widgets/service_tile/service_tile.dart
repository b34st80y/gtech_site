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
    const double borderRadius = 12;

    if (!reversed)
      return Padding(
        padding: const EdgeInsets.all(12),
        child: Container(
          height: 250,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(borderRadius),
            gradient: LinearGradient(colors: [...colors]),
            boxShadow: [BoxShadow(offset: Offset(2, 2), blurRadius: 6)],
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Flexible(
                flex: 1,
                child: Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(borderRadius),
                    image: DecorationImage(
                        image: AssetImage(imagePath), fit: BoxFit.cover),
                  ),
                ),
              ),
              Flexible(
                flex: 3,
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
        ),
      );
    else
      return Padding(
        padding: const EdgeInsets.all(12),
        child: Container(
          height: 250,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(borderRadius),
            gradient: LinearGradient(colors: [...colors]),
            boxShadow: [BoxShadow(offset: Offset(2, 2), blurRadius: 6)],
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Flexible(
                flex: 3,
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
                flex: 1,
                child: Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(borderRadius),
                    image: DecorationImage(
                        image: AssetImage(imagePath), fit: BoxFit.cover),
                  ),
                ),
              ),
            ],
          ),
        ),
      );
  }
}
