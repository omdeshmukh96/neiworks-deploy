import 'package:flutter/material.dart';
import 'screens/home.dart';
import 'screens/login.dart';
import 'screens/register.dart';

void main() {
  runApp(NeiWorksApp());
}

class NeiWorksApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'NeiWorks',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomeScreen(),
      routes: {
        '/login': (context) => LoginScreen(),
        '/register': (context) => RegisterScreen(),
      },
    );
  }
}
