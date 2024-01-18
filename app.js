// chapter 31 - 34

var currentDate = new Date()
console.log(currentDate)

var dobj = new Date()
console.log(dobj)
var dstr = dobj.toString()
console.log(typeof dstr)


var rightNow = new Date()
var theDay = rightNow.getDay()
console.log(theDay)


var dateObj = new Date()
var d = dateObj.getDay()
var array = [ 'Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturay' ]
alert(array [3])


var date = new Date()
var day = date.getDay()
var date = date.getDate()
// var year = date.getFullYear()
// var hours = date.getHours()
// var minutes = date.getMinutes()
// var seconds = date.getSeconds()
// var millisecons = date.getMilliseconds()


var createDate = new Date(2020,11 ,31)
console.log(createDate)


var today = new Date()
var myDay = new Date(1980, 0 ,1)
var msToday = today.getTime()
var msMyDay = myDay.getTime()
var msDifference = msToday - msMyDay
console.log(msDifference)
var msDif = msDifference / (1000 * 60 * 60 * 24 * 365);
console.log(msDif)



var myDate = new Date();
console.log("Current Date:", myDate.toDateString());
myDate.setFullYear(2022);
console.log("Updated Date:", myDate.toDateString());


// What is the method to change the day of the week for a
// specific date in JavaScript?
var doomsday = new Date("June 30, 2035");


function changeMinutes() {
    var modifiedDate = new Date();
    var newMinutes = prompt("Enter new minutes:");
  modifiedDate.setMinutes(newMinutes);
  console.log(modifiedDate);
     }
  
  var curDate = new Date(); 
  changeMinutes(curDate);


function ageCal(){
    var yourBirthYear = prompt("Enter your Birth Year")
    var curYear = new Date().getFullYear()
    var age = curYear - yourBirthYear
    console.log( age )  
}
ageCal()


// chapter 35 - 37

function a (){
    alert("Hello!")
}
a()


function askName(){
    var name = prompt("Enter Your Name")
    var answer = name
    console.log(answer)
}
askName()


function other(){
    var x = 13
    if(x === 123){
        alert("Matched")
    }else{
        alert("Unmatched")
    }
}
other()


function concat(fours,sixes,runs){
    var total = fours*sixes*runs
    console.log(total)
}
concat(3,5,2)


function usd(para1,para2){
    var reslt = para1 + para2
    console.log(reslt)
}
usd("Hello"," World")


function gdp(par1,par2){
    var reslt = par1 + par2
    console.log(reslt)
}
gdp(12,45)


// chapter 38

function abc(){
    var a = 123456
    console.log(a)
}

abc()


var b = 654321

function xyz(){
    console.log(b)
}
xyz()