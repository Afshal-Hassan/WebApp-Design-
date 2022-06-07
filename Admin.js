document.addEventListener('DOMContentLoaded', function () {
    let adminPassword = "Content123";

    let userpassword = "user";
    let user = prompt("Enter User or Admin", "None");
    let password = prompt("Enter a password");
    if (user == "Admin" || user == "admin") {
        if (password == adminPassword) {
            
            alert("Admin Logged");
            
         
           
        }
        while (password != adminPassword) {
            password = prompt('Enter a password');
            if (password == adminPassword) {
                alert("Admin Logged");
            
                break;
            }
        }
    }

    else if (user == "User" || user == "user") {
        if (password == userpassword) {
            
            alert("User Logged");
           
        }   
        while (password != userpassword) {
            password = prompt('Enter a password');
            if (password == userpassword) {
                alert("User Logged");
             

                break;
            }

        }

    }

    if(password==adminPassword){
        localStorage.setItem("Admin",password);
        
    }
   let user2=localStorage.getItem("Admin");
   if(password==user2){
       window.location.replace("SideBar.html");
   }

})
