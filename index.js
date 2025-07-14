document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 200) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  function myFunction(event) {
    event.preventDefault(); 
  
    var name = document.getElementById('name123').value;
    var email = document.getElementById('email123').value;
    var detail = document.getElementById('detail123').value;
  
    if (name != "" && email != "" && detail != "") {
      let parms = {
        name : document.getElementById('name123').value,
        email_id :  document.getElementById('email123').value,
        message : document.getElementById('detail123').value
      }
      emailjs.send("service_rvautyo","template_xsldbwi",parms)
      Swal.fire({
        title: "Good job!",
        text: "Your Query Has Been Submitted!",
        icon: "success",
        confirmButtonText: "OK"
      }).then(() => {
        document.getElementById('name123').value = "";
        document.getElementById('email123').value = "";
        document.getElementById('detail123').value = "";
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Please Fill Out All Fields.",
        icon: "error"
      });
    }
  }

  function myFunction2(event) {
    event.preventDefault(); 
  
    var firstName = document.getElementById('namef123').value;
    var lastName = document.getElementById('namel123').value;
    var email = document.getElementById('email123').value;
    var detail = document.getElementById('experience123').value;
  
    if (firstName != "" && lastName != "" && email != "" && detail != "") {
      let parms = {
        f_name : document.getElementById('namef123').value,
        lname : document.getElementById('namel123').value,
        email_id :  document.getElementById('email123').value,
        message : document.getElementById('experience123').value
      }
      emailjs.send("service_rvautyo","template_dzy3zwq",parms)
      Swal.fire({
        title: "Good job!",
        text: "Thank You For Sharing Your Experience!",
        icon: "success",
        confirmButtonText: "OK"
      }).then(() => {
        document.getElementById('namef123').value = "";
        document.getElementById('namel123').value = "";
        document.getElementById('email123').value = "";
        document.getElementById('experience123').value = "";
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Please Fill Out All Fields.",
        icon: "error"
      });
    }
  }

  function myFunction3(event) {
    event.preventDefault(); 
  
    var firstName = document.getElementById('namef123').value;
    var lastName = document.getElementById('namel123').value;
    var email = document.getElementById('email123').value;
    var date = document.getElementById('eventDate123').value;
    var type = document.getElementById('eventType123').value;
    var count = document.getElementById('guestCount123').value;
    var request= document.getElementById('specialRequests123').value;
  
    if (firstName != "" && lastName != "" && email != "" && date != "" && type != "" && count != "" && request != "") {
      Swal.fire({
        title: "Good job!",
        text: "Thank You For Booking The Event !",
        icon: "success",
        confirmButtonText: "OK"
      }).then(() => {
        document.getElementById('namef123').value = "";
        document.getElementById('namel123').value = "";
        document.getElementById('email123').value = "";
        document.getElementById('eventDate123').value = "";
        document.getElementById('eventType123').value = "";
        document.getElementById('guestCount123').value = "";
        document.getElementById('specialRequests123').value = "";
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Please Fill Out All Fields.",
        icon: "error"
      });
    }
  }
