

// ****** sign up.html************




var inputName=document.getElementById("input-Name")
var inputEmail =document.getElementById("input-Email")
var inputPassword =document.getElementById("input-Password")
// var signupBtn =document.getElementById("sign-up-btn")
var aler =document.getElementById("aler")
var aler2 =document.getElementById("aler2")
var aler3 =document.getElementById("aler3")
var aler4 =document.getElementById("aler4")




// if (inputName==null & inputEmail==null & inputPassword==null & aler==null & signupBtn==null) {
//     console.log("sorry");
// }

if (localStorage.getItem("acounts") ==null) {
    
    arry=[]
}else{

    arry=JSON.parse(localStorage.getItem("acounts"))
}



// var s= signupBtn.addEventListener("click" , function(){
 
//     addData()
//     deleteValue()
// })


function addData() {
   var acount ={
       
    name:inputName.value,
    email:inputEmail.value,
    password:inputPassword.value
   }
// console.log(acount.name);
console.log("jjjj"); 


var x =0
    for (let i = 0; i < arry.length; i++) {
        if(arry[i].email==inputEmail.value ){
            // console.log("1");
                    aler2.style.display="block"
                    aler.style.display="none"
                    aler3.style.display="none"
             console.log(arry[i]);
            x =1
            

        }    
    } 
    console.log(x);

    if (acount.name=="" |acount.email==""|acount.password=="") {
                    aler.style.display="block"
                    aler2.style.display="none"
                    aler3.style.display="none"
                console.log("2");
                
    }else if(x==0){
                    arry.push(acount)
                    localStorage.setItem("acounts" ,JSON.stringify(arry))
                    aler.style.display="none"
                    aler2.style.display="none"
                    aler3.style.display="block"
                    console.log(arry);
                    console.log("3");
            
                }
                deleteValue()




            }

function deleteValue() {
    inputName.value=''
    inputEmail.value=''
    inputPassword.value=''

}



// *********** log in.html***********


var userEmail =document.getElementById("user-Email")
var userPassword =document.getElementById("user-Password")
 var login =document.getElementById("login")
 

// loginBtn.addEventListener("click" , function(){
//     getData() 
// })


var theName ='alaa'
function getData() {
   

    console.log("hhhhhh");
for (let i = 0; i < arry.length; i++) {
    
    if (arry[i].email==userEmail.value & arry[i].password==userPassword.value) {
    // console.log("welcome" + arry[i].name+ "lol");
        login.href="welcome.html"
        theName +="ggg"
        aler4.style.display="none"
    }
    else{

        aler4.style.display="block"

    }
}



if (userEmail.value==''|userPassword.value=='') {
    aler.style.display="block"
    aler4.style.display="none"
   
}else {

     aler.style.display="none"
    // aler4.style.display="none"
 }


 deleteInput()
 }

function deleteInput() {
    userEmail.value =''
    userPassword.value=''
}


// ******* welcome.html**********



console.log("ttt");


var welcome=document.getElementById("h")

welcome.innerHTML=theName







