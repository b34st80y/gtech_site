import 'package:flutter/material.dart';

class ServicesHeader extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 200,
      width: MediaQuery.of(context).size.width,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text(
            "Services",
            style: TextStyle(fontSize: 48, fontWeight: FontWeight.w600),
          ),
          Text(
            "Let us develop personal solutions to all "
            "of your technology needs!",textAlign: TextAlign.center,
            style: TextStyle(fontSize: 32, fontWeight: FontWeight.w400,),
          ),
        ],
      ),
    );
  }
}
