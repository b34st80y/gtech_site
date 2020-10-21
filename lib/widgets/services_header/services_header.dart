import 'package:flutter/material.dart';

class ServicesHeader extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 200,
      width: MediaQuery.of(context).size.width,
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage("images/services/software_dev/dev4.jpg"),
          fit: BoxFit.cover,
          colorFilter: ColorFilter.mode(
              Colors.black.withOpacity(0.6), BlendMode.darken),
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          StrokeText(
            "Services",
            fontSize: 48,
            fontWeight: FontWeight.w600,
            color: Colors.white,
            strokeColor: Colors.black,
            strokeWidth: 1.5,
          ),
          StrokeText(
            "Let us develop personal solutions to all "
            "of your technology needs!",
            fontSize: 32,
            fontWeight: FontWeight.w400,
            color: Colors.white,
            strokeColor: Colors.black,
            strokeWidth: 1.5,
          ),
        ],
      ),
    );
  }
}

class StrokeText extends StatelessWidget {
  final String text;
  final double fontSize;
  final FontWeight fontWeight;
  final Color color;
  final Color strokeColor;
  final double strokeWidth;

  const StrokeText(
    this.text, {
    Key key,
    this.fontSize,
    this.fontWeight,
    this.color,
    this.strokeColor,
    this.strokeWidth,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      textAlign: TextAlign.center,
      style: TextStyle(
          fontSize: fontSize,
          fontWeight: fontWeight,
          color: color,
          shadows: [
            Shadow(
                // bottomLeft
                offset: Offset(-strokeWidth, -strokeWidth),
                color: strokeColor),
            Shadow(
                // bottomRight
                offset: Offset(strokeWidth, -strokeWidth),
                color: strokeColor),
            Shadow(
                // topRight
                offset: Offset(strokeWidth, strokeWidth),
                color: strokeColor),
            Shadow(
                // topLeft
                offset: Offset(-strokeWidth, strokeWidth),
                color: strokeColor),
          ]),
    );
  }
}
