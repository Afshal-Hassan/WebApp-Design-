function teacherSectionOpen(){
    document.getElementById('Boxes').style.display='none';
    document.getElementById('allbuttons').style.display='none';
    document.getElementById('Today-classes-box').style.display='none';
    document.getElementById('Teachers').style.display='flex';

}

function dashboardSectionOpen(){
    document.getElementById('Boxes').style.display='flex';
    document.getElementById('allbuttons').style.display='inline-block';
    document.getElementById('Today-classes-box').style.display='block';
    document.getElementById('Teachers').style.display='none';
    


}