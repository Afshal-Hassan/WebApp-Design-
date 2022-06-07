function openmenu(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("sidebarGo");
    document.getElementById("sidebar1").style.opacity="1";
    document.getElementById('menu-button').style.display='none';
    document.getElementById('menu-button1').style.display='none'
    setTimeout(function(){
        document.getElementById('close-button').style.display='inline';
       document.getElementById('main').style.cssText="width: 80vw;";
       document.getElementById('student-count-button').style.cssText="margin-left:20px;";
       document.getElementById('salary-count-button').style.cssText="margin-left:10px;";
       document.getElementById('fee-count-button').style.cssText="margin-left:10px;";
       document.getElementById('Total-teacher').style.cssText="width:60%;";
       
      
        
       document.getElementById('Teacher-salary').style.cssText="width:60%;";
       document.getElementById('Total-student').style.cssText="width:60%;";
      
       document.getElementById('Student-fee').style.cssText="width:60%;";
       document.getElementById('Today-classes').style.cssText="left:49.6%"
       
       
      

    },2.5);
    
   

}
function closemenu(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("sidebarGo");
    document.getElementById("sidebar1").style.opacity="0.3";
    setTimeout(()=>{
        document.getElementById('menu-button').style.display='inline';
        document.getElementById('menu-button1').style.display='inline';
        document.getElementById('main').style.cssText="width: 95vw;";
        document.getElementById('Total-teacher').style.cssText="width:20%;";
       
      
        
        document.getElementById('Teacher-salary').style.cssText="width:20%;";
        document.getElementById('Total-student').style.cssText="width:20%;";
       
        document.getElementById('Student-fee').style.cssText="width:20%;";
        document.getElementById('student-count-button').style.cssText="margin-left:80px;";
       document.getElementById('salary-count-button').style.cssText="margin-left:68px;";
       document.getElementById('fee-count-button').style.cssText="margin-left:60px;";

       document.getElementById('Today-classes').style.cssText="left:56.9%"
      

    },50.5);
    
    document.getElementById('close-button').style.display='none';

}

