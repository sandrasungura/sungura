

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<sender’s email address>",
	To : '<sandra.m.revilla@gmail.com>',
	From : "<sender’s email address>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}
