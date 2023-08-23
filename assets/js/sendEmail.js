function sendMail(contactForm) {
    emailjs.send("service_xl1c0x6", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    }, "hVyOF2eBMUnzUNA1i")
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", response);
            });
}