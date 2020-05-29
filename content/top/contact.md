---
type: contact
title: Contacto
---

<div style="align: center; margin-bottom:4%;">
<img src="/images/send140px.gif" alt="email" >
</div>
<a style="font-weight: medium; font-size: 22px; color: rgb(104, 195, 206);" href="mailto:sandra.m.revilla@gmail.com">
Contáctame :)</a>
<p style="font-size: 16px;">
Puedes escribirme vía <a style="color: rgb(32, 157, 216); font-weight: medium" href="mailto:sandra.m.revilla@gmail.com">email</a> o mandarme por aquí tu mensaje.</p>


<html>
<head>
<title>Simple jQuery Contact Form With Validation</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<link rel="stylesheet" href="css/contact_form.css" />
<script src="contact_form.js"></script>
</head>
<body>
<div id="mainform">
<h2>Simple jQuery Contact Form With Validation</h2>
<!-- Required Div Starts Here -->
<div>
<form id="form">
<h3>Contact Form</h3>
<p id="returnmessage"></p>
<label>Name: <span>*</span></label>
<input type="text" id="name" placeholder="Name"/>
<label>Email: <span>*</span></label>
<input type="text" id="email" placeholder="Email"/>
<label>Message:</label>
<textarea id="message" placeholder="Message......."></textarea>
<input type="button" id="submit" value="Send Message"/>
</form>
</div>
</body>
</html>
