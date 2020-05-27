---
type: contact
title: Contacto
---

<div style="align: center; margin-bottom:4%;">
<img src="/images/send140px.gif" alt="email" >
</div>
<p style="font-weight: medium; font-size: 18px; color: rgb(104, 195, 206);">
Contáctame :)</p>
Puedes escribirme vía <a href="mailto:sandra.m.revilla@gmail.com">email</a> o mandarme por aquí tu mensaje.
<!-- 
<address class=".textcontacttitle">
<a href="mailto:sandra.m.revilla@gmail.com">Contáctame :)</a>
</address>
<!--
<div class="containerform">
  <form method="post" action="mailto:sandra.m.revilla@gmail.com">

    <label for="fname">Nombre</label>
    <input type="text" id="fname" name="firstname" placeholder="Tu nombre ...">

    <label for="subject">Mensaje</label>
    <textarea id="subject" name="subject" placeholder="Escribe tu mensaje ..." style="height:200px"></textarea>

    <input type="submit" value="Enviar">
-->
<!--
  </form>
</div> 
-->


<form action="contact.php" method="post">
  <div class="elem-group">
    <label for="name">Your Name</label>
    <input type="text" id="name" name="visitor_name" placeholder="John Doe" pattern=[A-Z\sa-z]{3,20} required>
  </div>
  <div class="elem-group">
    <label for="email">Your E-mail</label>
    <input type="email" id="email" name="visitor_email" placeholder="john.doe@email.com" required>
  </div>
  <div class="elem-group">
    <label for="department-selection">Choose Concerned Department</label>
    <select id="department-selection" name="concerned_department" required>
        <option value="">Select a Department</option>
        <option value="billing">Billing</option>
        <option value="marketing">Marketing</option>
        <option value="technical support">Technical Support</option>
    </select>
  </div>
  <div class="elem-group">
    <label for="title">Reason For Contacting Us</label>
    <input type="text" id="title" name="email_title" required placeholder="Unable to Reset my Password" pattern=[A-Za-z0-9\s]{8,60}>
  </div>
  <div class="elem-group">
    <label for="message">Write your message</label>
    <textarea id="message" name="visitor_message" placeholder="Say whatever you want." required></textarea>
  </div>
  <button type="submit">Send Message</button>
</form>
