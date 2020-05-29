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


<textarea id="myText">
    Tu mensaje
</textarea>
<button onclick="sendMail(); return false">Send</button>


<script>
  function sendMail() {
    var link = "mailto:me@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}
  </script>
