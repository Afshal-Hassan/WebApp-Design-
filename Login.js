function signup(){

     let loginModule = document.getElementById('login');
     let signupModule = document.getElementById('signup');

     loginModule.style.display = 'none';
     signupModule.style.display='flex';
    
      let banner = document.getElementById('banner1');
        banner.style.cssText = "height: 117vh";
    
     
}
function login(){
    let loginModule = document.getElementById('login');
    let signupModule = document.getElementById('signup');
    loginModule.style.display = 'flex';
    signupModule.style.display='none';
   
    let banner = document.getElementById('banner1');
        banner.style.cssText = "height:100vh";
    
    
}



