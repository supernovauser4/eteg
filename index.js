function demo(){
    let a=document.getElementById("sample");
    if(a.style.display==="none"){
        a.style.display="block";
    }
    else{
        a.style.display="none";
    }
    
}
var a =document.getElementById("cards")
function clicked(val){
    if (val==="Technical Skills"){
        let temp="<div class='card-1'>";
        temp+="<h2>Technical Skills</h2>";
        temp+="<div class='card-1-condent'>";
        temp+="<div class='card-1-head'>";
        temp+="<img src='images/C-logo.png' alt='...' width='25' height='25'>";
        temp+="<p>C Programming</p>";
        temp+="</div>";
        temp+="<div class='card-1-head'>";
        temp+="<img src='images/Python-logo.png' alt='...'' width='25' height='25'>";
        temp+="<p>Python</p>";
        temp+="</div>";
        temp+="<div class='card-1-head'>";
        temp+="<img src='images/html-logo.png' alt='...' width='25' height='25'>";
        temp+="<p>HTML</p>";
        temp+="</div>";
        temp+="<div class='card-1-head'>";
        temp+="<img src='images/CSS-logo.png' alt='...'' width='25' height='25'>";
        temp+="<p>CSS</p>";
        temp+="</div>";
        temp+="<div class='card-1-head'>";
        temp+="<img src='images/JS-logo.png' alt='...' width='25' height='25'>";
        temp+="<p>Java-Script</p>";
        temp+="</div>";
        temp+="</div>";
        temp+="</div>";
        a.innerHTML=temp;
    }
    else if (val==="Education"){
        temp="<div class='card-2'>";
        temp+="<h2>Education</h2>";
        temp+="<div class='card-2-condent'>";
        temp+="<div class='card-2-head'>";
        temp+="<p class='side-head'>SSLC</p>";
        temp+="<div class='card-2-body'>";
        temp+="<p>AASS Girls Higher Secondary School / State Board</p>";
        temp+= "<p>Percentage 90%</p>";
        temp+="</div>";
        temp+="</div>";
        temp+="<div class='card-2-head'>";
        temp+="<p class='side-head'>HSC</p>";
        temp+="<div class='card-2-body'>";
        temp+="<p>AASS Girls Higher Secondary School / State Board</p>";
        temp+="<p>Group - BioMaths</p>";
        temp+="<p>Percentage 76%</p>";
        temp+="</div>";
        temp+="</div>";
        temp+="<div class='card-2-head'>";
        temp+="<p class='side-head'>COLLEGE</p>";
        temp+="<div class='card-2-body'>";
        temp+="<p>Vaigai College of Engineering / Anna University</p>";
        temp+="<p>Department - B.E EEE</p>";
        temp+="<p>Percentage 84%</p>";
        temp+="</div>";
        temp+="</div>";
        temp+="</div>";
        temp+="</div>";
        a.innerHTML=temp
    }
    else if(val==="Certificate") {
        temp="<div class='card-3'>";
        temp+="<h2>Certificate</h2>";
        temp+="<div class='card-3-condent'>";
        temp+="<p class='side-head'>Internship Training Certificate</p>";
        temp+="<div class='card-3-body'>";
        temp+="<p>1. Technoneo Engineering and Technologics Pvt Limited about Solar, UPS, Servo-stabilizers and PMDC motors (30 Days).</p>";
        temp+="<p>2. Quantanics Techserv Private Limited about Basic of Internet of Things (30 Days)</p>";
        temp+="</div>";
        temp+="<p class='side-head'>Course Completion Certificate</p>";
        temp+="<div class='card-3-body'>";
        temp+="<p>3.  Successfully completed CORE and ADVANCE PYTHON course at ELYSIUM ACADEMY at Madurai in Top Grade “A” from 20-April-2023 to 20-July-2023</p>";
        temp+="</div>";
        temp+="</div>";
        temp+="</div>";
        a.innerHTML=temp;
    }
    else{
        temp="<div class='card-4'>";
        temp+="<h2>Projects</h2>";
        temp+="<div class='card-4-condent'>";
        temp+="<p class='side-head'>Automatic Solar Tracking System</p>";
        temp+="<div class='card-4-body'>";
        temp+="<p>Solar Tracker, a system that positions an object at an angle relative to the sun</p>";
        temp+="</div>";
        temp+="<p class='side-head'>Restaurant Management System using Tkinter Librarry</p>";
        temp+="<div class='card-4-body'>";
        temp+="<p>This project is a Desktop Application Software system where the management of entire Hotel is computerized.</p> ";
        temp+="</div>";
        temp+="</div>";
        temp+="</div>";
        a.innerHTML=temp;
    }
}
clicked("Technical Skills");



function validateForm(e){
    e.preventDefault();
    // console.log(e);
    let name=document.getElementById("fname").value;
    let email=document.getElementById("email").value;
    let subject=document.getElementById("subject").value;
    let message=document.getElementById("message").value;

    let mailid="kamalishakila0120@gmail.com";
    let subjectto=`${subject}`;
    let content=`${email}, ${message}`;
    let cBody=`Hi i am ${name}`;
    let vl=`mailto:${mailid}?subject=${subjectto}&body=${cBody} ${content}`;
    // let vl='tel:918870609902';
    window.location.href=vl;
   
}
// whatsapp://send?phone=+918870609902&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND