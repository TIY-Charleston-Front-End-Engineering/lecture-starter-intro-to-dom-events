//-------------------------------------------------
// Event listeners on multiple-elements
//  + using the evt object to capture
/// where an event happened
//-------------------------------------------------k

// [1] select all the .collection-item elements
var collectionItemEls = document.querySelectorAll('.collection-item')

console.log(collectionItemEls)

// NOTE: Can't do this..... 
//     addButtonEls.addEventListener("click", function(){
// 	     console.log('rats')
//      })
// .... .addEventListener() is a method on a single DOM element, not an array 


// [2] - put an event listener on each element
forEach( collectionItemEls , function( domElement, index, theArray ){

	domElement.addEventListener('click', function(evt){
		console.log('event heard')
		
	   var domElementOfEvent = evt.target
		var currentTargetDOMEl = evt.currentTarget
		
		//[3] if the <button class="adder"> element was clicked...
      //     NOTE : we are using evt.target to see if the element where  
      //            the event actually happened was the <button> element 
      ///               
		if(domElementOfEvent.className === 'adder' ){
		
		   // [4]...select the <h6 class="item-name"></h6> element.
         //    NOTE: here we are using evt.currentTarget to query-select
         //          the h6.item-name element in order to capture the text content
         //          of the .collection-item that was clicked  
			var itemNameEl = currentTargetDOMEl.querySelector('.item-name')
			
			// [5] append the textContent from the <h6 class="item-name"></h6> element.
			//     as an li-tag
			var cartListContainerEl =  document.querySelector('.your-cart')
			cartListContainerEl.innerHTML +=  '<li>' + itemNameEl.textContent + '</li>'
		}
		

	})
})