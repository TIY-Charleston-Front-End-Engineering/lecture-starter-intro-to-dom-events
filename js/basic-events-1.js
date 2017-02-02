
//-------------------------------------
//  :::: (Ex. A)  anatomy of event listener (pop alert)  ::::
//-------------------------------------
//(1) select dom element that receives event (the listening element)

//(2) declare what will happen (the event-handler function)

//(3) add the event listener to the element that will receive the event,
//     « elemenet ».addEventListener( «evt-type» , « event-handler function » )


var alertBtnEl = document.querySelector('.pop-alert')

alertBtnEl.addEventListener( 'click' , function(){
	alert('you just pushed the pop alert button!!')
})


//-------------------------------------
//  :::: (Ex. B) using the event-handler function to modify another element  ::::
//-------------------------------------

var writeBtnEl = document.querySelector('.write-btn')

writeBtnEl.addEventListener('click', function(evt){
	console.log(evt)
 
	var msgEl = document.querySelector('.msg')
	msgEl.innerHTML = "<strong>Baby Shampoo</strong><br/>"
	msgEl.innerHTML += "I love you baby shampoo. You make my hair so soft and i know that you will never make me cry."
})


//-------------------------------------
//  :::: (Ex. C)  using the event-handler function to modify another element  ::::
//-------------------------------------
var mouseOverEl = document.querySelector('.mouse-over-example')
mouseOverEl.addEventListener('mouseover', function(evt){
	// console.log(evt.target)	
	// console.log(evt.currentTarget)
	// console.log(evt.target)
	// console.log(evt.currentTarget)
	var domElOfEvent = evt.currentTarget
	domElOfEvent.innerHTML = "<h2>YOU TOUCHED ME!!!!!</h2>"
})


//-------------------------------------
//  :::: (Ex. D)  using the event-handler function to modify another element  ::::
//-------------------------------------
window.addEventListener('resize', function(evt){
	var bottomRightEl = document.querySelector('.bottom.right')
	bottomRightEl.classList.add('alt-color')
})


//-------------------------------------
//  :::: (Ex. E)  using the event-handler function to modify another element  ::::
//-------------------------------------
var infoInputEl = document.querySelector('.info-source-input')

infoInputEl.addEventListener('keydown', function(evt){
	if(evt.keyCode === 13){
		console.log('ENTER PRESSED')
		var remindersListEl = document.querySelector('.reminders-list')
		var inputEl = evt.currentTarget
	   remindersListEl.innerHTML += '<li>' + inputEl.value + '</li>'
		inputEl.value = ''
	}
})


