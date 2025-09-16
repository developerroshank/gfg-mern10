// function autoMail(to, subject, body) {
//   console.log(`Sending mail to: ${to} with subject: ${subject} and body: ${body}`);
// }

// autoMail("abc@gmail.com", "Test Mail", "thank you for shopping with us");


// functional programming approach --- currying

function autoMailer(to) {
  return function (subject) {
    return function (body) {
      console.log(`Sending mail to: ${to} with subject: ${subject} and body: ${body}`);
    }
  }
}

autoMailer("abc@gmail.com")("Test Mail")("thank you for shopping with us");

