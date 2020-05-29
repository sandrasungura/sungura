---
type: contact
title: Contacto
---

<div style="align: center; margin-bottom:4%;">
<img src="/images/send140px.gif" alt="email" >
</div>
<p style="font-weight: medium; font-size: 18px; color: rgb(104, 195, 206);">
Contáctame :)</p>
<p style="font-size: 16px;">
Puedes escribirme vía <a style="color: rgb(104, 195, 206); font-weight: bold" href="mailto:sandra.m.revilla@gmail.com">email</a> o mandarme por aquí tu mensaje.</p>

<Location "sungura/static/mail.php ">
<form action="mail.php" method="POST">
<p>Name</p> <input type="text" name="name">
<p>Email</p> <input type="text" name="email">
<p>Message</p><textarea name="message" rows="6" cols="25"></textarea><br />
<input type="submit" value="Send">
</form>

  AllowMethods GET POST OPTIONS
</Location>
