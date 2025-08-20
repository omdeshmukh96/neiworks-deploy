import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Welcome to NeiWorks'),
      ),
      body: Center(
        child: Text('Your civic engagement platform.'),
      ),
    );
  }
}
