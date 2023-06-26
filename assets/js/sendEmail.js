function sendMail(contactForm){
    emailjs.send("service_jn01bfw", "alaa", {
        "from_name":contactForm.name.value,
        "from_email":contactForm.email.value,
        "project_request": contactForm.projectsummary.value
        

    }).then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("ERROE", error);
        }
    )
return false;
}