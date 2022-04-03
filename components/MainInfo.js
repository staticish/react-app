import React from "react"




export default function MainInfo  (){
    return <div className  = "info"> 
    <h1 className = "name"> Ismail Olanrewaju </h1>
    <h5> Frontend Developer </h5>
    <h6> IsmailOlanrewaju0@gmail.com </h6>
    <span className = "btn"> 
    <button onClick = {email} >  <i className="fa fa-envelope"/> Email </button> 
    <button onClick = {twitter}>  <i className="fa fa-twitter" /> Twitter </button> 
    </span>
    <h2 > About </h2> 
    <p> I am a frontend developer with the particular interests of making websites.  I am from Nigeria, and I hacked the NASA database system at age 6. The picture you see above you is my  mugshot. Don't cross path with me, and you'll be spared. </p>
    <h2>Interests </h2>
    <p> I am a very interesting person, with plenty of goals and aspirations. My interests are walking, eating, sleeping and repeat. I also enjoy playing games. </p>
    </div>
    
    
}

function email(){
  alert("Nice try Fed. Im not showing you my email")
  
}

function twitter(){
    window.location.href = 'https://Twitter';
}