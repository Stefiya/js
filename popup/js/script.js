/*popup
alert("checking");
confirm("confirm");
prompt('prompt');*/

//accessing values from prompt
//var a=prompt("enter your name");
//document.write(a);

/*var n1=parseInt(prompt('enter 1st number'));
var n2=parseInt(prompt('enter 2nd number'));
var sum=n1+n2;
//alert(sum);
document.write("sum is"+sum);*/

/*var a=prompt("enter your name"); 
alert("your name is "+a);*/
//document.write(result);

//document.getElementById("demo").innerHTML="orisys";

/*var a=prompt("enter string");

document.getElementById("demo").innerHTML=a;*/

/*var a=10;
document.write("<h1>"+a+"</h1>");
function myfunction()
{
	var a=5;
	document.write("<h1>"+a+"</h1>");
}
myfunction();
document.write("<h1>"+a+"</h1>");*/

/*function change()
{
	document.getElementById ("demo").innerHTML="orisys";
}*/
/*

function change()
{
var fname=document.getElementById("demo").value;	
var lname=document.getElementById("demo1").value;
alert("your name is "+fname+" "+lname);
}
*/
/*
 var fruits=["mango","apple","orange"]

 document.write("<h1>"+fruits+"</h1>");
 document.write("<h1>"+fruits[1]+"</h1>");
 fruits.push('pineapple');
 document.write("<h1>"+fruits+"</h1>");
 fruits.pop();
 document.write("<h1>"+fruits+"</h1>");
 fruits.unshift('pineapple');
 document.write("<h1>"+fruits+"</h1>");
 fruits.shift();
 document.write("<h1>"+fruits+"</h1>");
 for (var i=0;i<fruits.length;i++)
 {
	 document.write("<h1>"+fruits[i]+"</h1>");
 }
 */
 /*
function changes()
{
	
	var rd1=document.getElementById("rd1");
	var rd2=document.getElementById("rd2");
	if(rd1.checked==true)
	{
		alert("select  "+rd1.value);
	}
	else if(rd2.checked==true)
	{
		alert("select  "+rd2.value);
	}
	else
	{
		alert("error");
	}
	
}
*/

/*
function check()
{
var select=document.getElementById("selectbox");
alert(select.options[select.selectedIndex].value);	
}
*/

/*
function myfunction()
{
	var para=document.getElementsByTagName("p");
	
	for(var i=0;i<para.length;i++)
	{
		para[i].style.color="red";
	}
	
}
*/
/*
function fun()
{
	var p=document.getElementsByClassName("p1");
	
	for(var i=0;i<p.length;i++)
	{
		p[i].style.color="red";
	}
}
*/

function mouseover()
{
	document.getElementById("img1").src="img/2.jpg";
}

function mouseout()
{
document.getElementById("img1").src="img/3.jpg";
}
