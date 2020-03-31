var currentHour = moment().format('H');

var dataObj = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : {}

for(var i = 9; i < 18; i++ )  //i++ equivalent to i=i+1
{
   //targeting container class to appendChild
$(".container").append(`<div class="row"> 
<div class="hour col-2">${i}:00</div><textarea id='${i}' class="description col-8 
${i < currentHour ? 'past' : i > currentHour ? 'future' : 'present'}">${dataObj[i] || ''}</textarea> 
<button class="saveBtn col-2">Save</button></div>`)
}
//||= "or"  set to blank, replaced undefined script
//terinary operator/statement
//add event Listener
$(".saveBtn").on("click" , function()
{
 //when I click save, consoleLog the information into the DOM
var value = $(this).siblings("textarea").val();
var id = $(this).siblings("textarea").attr("id");
dataObj[id] = value;
//console.log(id, value) 
//now store in local storage
//now use JSON to make a string
localStorage.setItem('todos', JSON.stringify(dataObj))
})  //used es6syntax update to javaScript

