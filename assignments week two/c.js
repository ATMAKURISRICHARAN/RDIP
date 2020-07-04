
// displayinput


function myfunction(val){
document.getElementById("d").value+=val;
}
// checkoperator

function splitarray(){
var d = document.getElementById("d").value;
var e= d.split(" ");
b=e[1];
if (b=='+'){
      document.getElementById("d").value=add();
}
else if(b=='-'){
      document.getElementById("d").value=sub();
}
else if(b=='/'){
     document.getElementById("d").value=div();
}
else if(b=='*'){
      document.getElementById("d").value=mul();
}
else if(b=='%'){
      document.getElementById("d").value=mod();
}
}


 //addition

function add(){
var d = document.getElementById("d").value;
var e= d.split(" ");
var a=parseInt(e[0]);
var b=parseInt(e[2]);
var r=a+b;
return r;

}

// subtraction

function sub(){
      var d = document.getElementById("d").value;
      var e= d.split(" ");
      var a=parseInt(e[0]);
      var b=parseInt(e[2]);
      var r=a-b;
      return r;
      
      }


// multiplication

function mul(){
      var d = document.getElementById("d").value;
      var e= d.split(" ");
      var a=parseInt(e[0]);
      var b=parseInt(e[2]);
      var r=a*b;
      return r;
            
      }
      

// division

function div(){
      var d = document.getElementById("d").value
      var e= d.split(" ");
      var a=parseInt(e[0]);
      var b=parseInt(e[2]);
      var r=a/b;
      return r;
                  
      }

//percentage

function mod(){
      var d = document.getElementById("d").value;
      var e= d.split(" ");
      var a=parseInt(e[0]);
      var b=parseInt(e[2]);
      var r=(a/100)*b;
      return r;                  
      }

//absolute

function absolute(){
var d=document.getElementById("d").value;
var e=d.split(" ");
var a=e.length
if(a>1){
b=e[2];
 document.getElementById("d").value=b;
}
else{
 document.getElementById("d").value=d;
}
}

//squareroot

function squareroot(){
var d=document.getElementById("d").value;
b=parseInt(d);
e=Math.sqrt( b );
document.getElementById("d").value=e;
}


//clear


function clr(){
document.getElementById("d").value=''
}


//validatefirstname


function validate1(){
      var a = document.getElementById("fname").value
      var letters = /^[A-Za-z]+$/;
      if(a.match(letters)){
            document.getElementById("1").innerHTML="verified";
            document.getElementById("button").disabled=false;
      }
      else{
            document.getElementById("1").innerHTML="unverified";
            document.getElementById("button").disabled=true;
      }
}


//validatelastname

function  validate2(){
      var b=document.getElementById("lname").value
      var letters = /^[A-Za-z]+$/;
      if(b.match(letters)){
            document.getElementById("2").innerHTML="verified";
            document.getElementById("button").disabled=false;
      }
      else{
            document.getElementById("2").innerHTML="unverified";
            document.getElementById("button").disabled=true;
      }
}


//validateemail

function  validate3(){
      var b=document.getElementById("email").value
      var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(b.match(mail)){
            document.getElementById("3").innerHTML="verified";
            document.getElementById("button").disabled=false;
      }
      else{
            document.getElementById("3").innerHTML="unverified";
            document.getElementById("button").disabled=true;
      }
}


//validatephonenumber

function  validate4(){
      var b=document.getElementById("number").value
      var pno = /^[0-9]+$/;
      if(b.match(pno) && b.length==10){
            document.getElementById("4").innerHTML="verified";
            document.getElementById("button").disabled=false;
      }
      else{
            document.getElementById("4").innerHTML="unverified";
            document.getElementById("button").disabled=true;

      }
}


//validatecollegename

function  validate5(){
      var b=document.getElementById("cname").value
      var c = /^[A-Za-z]+$/;
      if(b.match(c)){
            document.getElementById("5").innerHTML="verified";
            document.getElementById("button").disabled=false;
      }
      else{
            document.getElementById("5").innerHTML="unverified";
            document.getElementById("button").disabled=true;

      }
}


//validatesubmit

function validate6(){
var a=document.getElementById("fname").value
var b=document.getElementById("lname").value
var c=document.getElementById("email").value
var d=document.getElementById("number").value
var e=document.getElementById("cname").value
if(a.length==0 || b.length==0 || c.length==0 || d.length==0|| e.length==0){
     alert("SOMETHING MISSING");
}
}

//palindrome()

function pal(){
var a=document.getElementById("t").value
var b=a.length
for(var i=0;i<b;i++){
   if(a[i]!=a[b-i-1]){
        var c="true";
         break;
   }
}
if(c=="true"){
   document.getElementById("ans").innerHTML="IT IS NOT A PALINDROME";
}
else{
   document.getElementById("ans").innerHTML="IT IS A PALINDROME";
}
}


//Anagram
function ang(){
var a=document.getElementById("s").value
var b=document.getElementById("u").value
a=a.toLowerCase()
b=b.toLowerCase()
c=a.split("")
d=b.split("")
var e=[];
var f=[];
for(var i=0;i<=a.length;i++){
       if(c[i]!=" "){
             e.push(c[i]);
         }
}
for(var j=0;j<=b.length;j++){
     if(d[j]!=" "){
          f.push(d[j]);
     }
}
if(e.length!=f.length){
document.getElementById("ans1").innerHTML="THEY ARE NOT ANAGRAM";
}
else{
     e= e.sort()
     f =f.sort()
    for (var k = 0; k <e.length; k++) { 
         if (e[k] != f[k]) { 
           var g="true";
        } 
     }
 if(g=="true"){
      document.getElementById("ans1").innerHTML="THEY ARE NOT ANAGRAM";
      }
      else{
            document.getElementById("ans1").innerHTML="THEY ARE ANAGRAM";
      }
}
}

//let's play game
function rdnumber(){
      document.getElementById("e").value=Math.floor(Math.random() * Math.floor(1000));
      document.getElementById("s").value=Math.floor(Math.random() * Math.floor(1000));
      }

      function character1(){
      var a=document.getElementById("e").value;
      if(a>=0 && a<=250){
            c= 1;
            document.getElementById("f").value=c;
      }
      else if(a>250 && a<=500){
            c= 2;
            document.getElementById("f").value=c;
      }
      else if(a>500 && a<=1000){
            c= 3;
            document.getElementById("f").value=c;
      }
}
      function character2(){
      var b=document.getElementById("s").value;
      if(b>=0 && b<=250){
            d= 1;
            document.getElementById("c").value=d;
      }
      else if(b>250 && b<=500){
            d= 2;
            document.getElementById("c").value=d;
      }
      else if(b>500 && b<=1000){
            d= 3;
            document.getElementById("c").value=d;
      }
}
      function game(){
      var c=document.getElementById("f").value;
      var d=document.getElementById("c").value
      if (c==d){
            document.getElementById("ans1").innerHTML="TIE";
      }
      else if(c==1 && d==2){ 
            document.getElementById("ans1").innerHTML="HUMAN SURVIVES";
      }
      else if(c==2 && d==1){ 
            document.getElementById("ans1").innerHTML="HUMAN SURVIVES"
      }
      else if(c==2 && d==3){
            document.getElementById("ans1").innerHTML="COCKROAGES SURVIVES";
      }
      else if(c==3 && d==2){
            document.getElementById("ans1").innerHTML="COCKROAGES SURVIVES";
      }

      else if(c==3 && d==1){
            document.getElementById("ans1").innerHTML="HUMAN DIES";
      }
      else if(c==1 && d==3){
            document.getElementById("ans1").innerHTML="HUMAN DIES";
      }
      }