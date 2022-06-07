

function Submit() {


    const username = document.getElementById("username1").value;
    const email = document.getElementById("email1").value;
    const password = document.getElementById("password1").value;
    const phoneNo = document.getElementById("phone").value;
    const gender = document.querySelector(".radio").value;


    const obj = {

        username: username,
         Email: email,
        Password:password,
        PhoneNo: phoneNo,
        Gender: gender
    };


    const myjson= JSON.stringify(obj);

    const xhr = new XMLHttpRequest();
   const  url ="UserData.java"

    xhr.open('POST', "UserData.java", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(myjson);





    xhr.onprogress = function () 
    {
        console.log("On Progress...");

        
       


    }
    xhr.onload = function () {

        console.log("Done");
        console.log(myjson);


    }




}






