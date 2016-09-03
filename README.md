# AngularJS and LoopBack with vash Templates Example
<br><br>
This Sample was initially taken from the LoopBack Tutorial, getting started Tutorial, based around the Coffee Shop Review. So Credits due to StrongLoop.
<br><br>
The code was written using Eclipse Neon.
<br><br>
Loopback is used as a RESTful Api, to login, and allow reviews, and modifictaions to reviews based on simple authentication. The RESTful API is linked to an Angular Client using the
Angular SDK.
<br><br>
Models are created using the Persisted Model.<br>
LoopBack uses MongoDB to persist Reviews as Documents.<br>
MySQL is used to persist the Coffee Shops.<br>
<b>Refactors</b><br>
<br>
The initial code is adapted/refactored as follows:
<br>
<ul>
<li>IIFE's used to create Modular JavaScript, and prevent variable pollution of the Global Space</li>
<li>Controllers, separated to their own js file, and incorporated into a IIFE</li>
<li>HMTL templates swapped out to use Vash templates, and the Vash Template Engine rather than the default Jade.</li>
<li>Bower used to add packages and dependencies, i.e. Angular, UI-router, etc</li>
<li>Grunt used to incorporate Docular, used for JS Code Documentation</li>
<li>Gulp used to Build and Deploy</li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>

<br><br>
<b>Vash Templates</b><br>
Vash offers more Razor like syntax and the use of layouts.
see:
https://github.com/kirbysayshi/vash
<br>
Further refatcoring based on Angular Good Practices:
http://bguiz.github.io/js-standards/angularjs/controllers/
<br><br>

<b>AngularJS 1.5.8</b><br>

<<b>StringLoop Angular JS SDK</b><br>
<a href="LoopBackhttps://docs.strongloop.com/display/public/LB/Create+AngularJS+client#CreateAngularJSclient-IntroducingtheAngularJSSDK">
LoopBackhttps://docs.strongloop.com/display/public/LB/Create+AngularJS+client#CreateAngularJSclient-IntroducingtheAngularJSSDK</a>
<a href="https://docs.strongloop.com/display/public/LB/AngularJS+JavaScript+SDK">https://docs.strongloop.com/display/public/LB/AngularJS+JavaScript+SDK</a>
<br><br>

References:
Getting started with LoopBack(http://docs.strongloop.com/display/LB/Getting+started+with+LoopBack) for step-by-step instructions to create this application.
Follow the steps in the tutorial to create this application from scratch.
---
[More LoopBack examples](https://github.com/strongloop/loopback-example)
