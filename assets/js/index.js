function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        message: document.getElementById("msg").value,
        mobile: document.getElementById("mobile").value,
        gmail: document.getElementById("gmail").value,
    };

    emailjs.send('service_fx66t0p', 'template_3b9jdgs',tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}
