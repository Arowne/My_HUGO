let mailMessage = document.querySelector(".mail-success");

function sendMail(to, subject, message) {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "foohero69@gmail.com",
        Password : "RonronLeFoo1234",
        To : "aaron.y.boateng@gmail.com",
        From : to,
        Subject : subject,
        Body : message
    }).then(
      message => {
          if (message == "OK") {
            mailMessage.classList.remove("d-none");
          }
      }
    );
}



$('#sendMessageButton').click(function () {
    console.log("sended");
    let receiverMail = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    sendMail(receiverMail, "Lugdun'um", message);
    
});