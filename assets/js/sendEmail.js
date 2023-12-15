emailjs.init("O8DsAx6aTXozVsKis"); // Gantilah dengan User ID Anda

function sendEmail() {
  emailjs.sendForm("service_hqcuiwo", "template_grivoct", "#contactForm")
    .then(
      function(response) {
        console.log("Email sent successfully:", response);
        alert('berhasil');
        location.reload();
      },
      function(error) {
        console.log("Failed to send email:", error);
        alert('gagal')
      }
    );
}