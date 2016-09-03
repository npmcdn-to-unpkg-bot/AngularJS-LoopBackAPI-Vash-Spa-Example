# AngularJS and LoopBack with vash Templates Example
<br><br>
<b><i>Rapid JS Client using the Mean Stack, well RESTful LoopBack APIs, coupled with MongoDB and MySQL<i></b>.
<br><br>

This Sample was initially taken from the LoopBack Tutorial, getting started Tutorial, based around the Coffee Shop Review. So Credits due to StrongLoop.
<br><br>
The code was written using Eclipse Neon.
<br><br>
Loopback is used as a RESTful Api, to login, and allow Coffee Shop reviews, creation and modifications, based on simple authentication. The RESTful API is linked to an Angular JS (v1.5.8) Client using the LoopBack Angular SDK.
<br><br>

Models are created using the Persisted Model.<br>
LoopBack uses MongoDB to persist Reviews as Documents.<br>
MySQL is used to persist the Coffee Shops.<br>
It makes use of Users, Authentication, Remote Methods, Relations and Hooks.
<br><br>
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
</ul>
<br><br>
<b>Further Development to include</b>
<ul>
<li>Gulp Build and Deploy</li>
<li>Incorporate PassportJS</li>
<li>Incorporate Unit Testing</li>
<li>Upgrade to Angular 2 with components</li>
<li>Upgrade to Angular 2 LoopBack SDK with components</li>
<li>Seperate projects to client Website and Server APIs</li>
</ul>

Further refactoring was based on Angular Good Practices and SOLID:
http://bguiz.github.io/js-standards/angularjs/controllers/
<br><br>

<b>AngularJS 1.5.8</b><br>
https://angular.io/
<br><br>

<b>Vash Templates</b><br>
Vash offers more Razor like syntax and the use of layouts.<br>
see:https://github.com/kirbysayshi/vash
<br><br>

<b>StrongLoop Angular JS SDK</b><br>
<a href="LoopBackhttps://docs.strongloop.com/display/public/LB/Create+AngularJS+client#CreateAngularJSclient-IntroducingtheAngularJSSDK"><br>
https://docs.strongloop.com/display/public/LB/Create+AngularJS+client#CreateAngularJSclient-IntroducingtheAngularJSSDK</a>
<br>
<a href="https://docs.strongloop.com/display/public/LB/AngularJS+JavaScript+SDK">https://docs.strongloop.com/display/public/LB/AngularJS+JavaScript+SDK</a>
<br><br>


<b>References:</b>
Getting started with LoopBack(http://docs.strongloop.com/display/LB/Getting+started+with+LoopBack) for step-by-step instructions to create this application.
<br> Follow the steps in the tutorial to create this application from scratch.
---
[More LoopBack examples](https://github.com/strongloop/loopback-example)
