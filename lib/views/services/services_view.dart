import 'package:flutter/material.dart';
import 'package:gtech_site/widgets/service_tile/service_tile.dart';
import 'package:gtech_site/widgets/services_header/services_header.dart';

class ServicesView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        children: [
          ServicesHeader(),
          ServiceTile(
            title: "Software Development",
            desc:
                "Our Software Development team can help you create software that can help you out a whole lot!  "
                "We build apps, websites, and other personal custom software!",
            colors: [Colors.blue, Colors.blueAccent],
            imagePath: "assets/images/placeholder.png",
          ),
          ServiceTile(
            title: "Home IT Services",
            desc:
                "Ever wanted to make your lights turn on with a clap? We can help you do all this and more! So easy! "
                "Smart home configuration, appliance upgrade, zoom studio. You name it, we got it!",
            colors: [Colors.red, Colors.redAccent],
            imagePath: "assets/images/placeholder.png",
            reversed: true,
          ),
          ServiceTile(
            title: "Business IT Services",
            desc:
                "We can help you upgrade you business with faster, more reliable machines, security cameras, "
                "and even 24/7 customer service for any technology needs!",
            colors: [Colors.green, Colors.greenAccent],
            imagePath: "assets/images/placeholder.png",
          ),
          ServiceTile(
            title: "PC & Mobile Device Repair / Maintenance",
            desc:
                "Our top of the line repair technicians can fix almost anything!  Phones, tablets, "
                    "laptops, PCs or any other electronics; if we cant fix it, you don't pay a dime! ",
            colors: [Colors.purple, Colors.purpleAccent],
            imagePath: "assets/images/placeholder.png",
            reversed: true,
          ),
          ServiceTile(
            title: "Technology Consulting",
            desc:
                "You may not yet know how our variety of services could help improve your life!  "
                "Or maybe you aren't sure if the software you want is even possible? "
                "Let us help! Free consultations are always available.",
            colors: [Colors.orange, Colors.orangeAccent],
            imagePath: "assets/images/placeholder.png",
          ),
        ],
      ),
    );
  }
}
