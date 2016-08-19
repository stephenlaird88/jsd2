// Structure
//--------------
var form 	    	 = document.querySelector("form"),
	messageName 	 = document.querySelector("#message");
var messageTemplate  = document.querySelector("#message-template");
var messageBoardList = document.querySelector(".message-board");
//var upVote 			 = document.querySelector(".fa.fa-thumbs-up.pull-right");
//var downVote 		 = document.querySelector(".fa.fa-thumbs-down.pull-right");
//var trash 			 = document.querySelector(".fa.fa-trash.pull-right.delete");



// Setup
//-----------------------------
var app = {
	"messages":[]
};

// Setup firebase
var fbRef = new Firebase("https://fanapp-cbd53.firebaseio.com");




// Events
//-------------------
window.addEventListener("load", getMessageBoardList);
form.addEventListener("submit", addMessage);





// Event Handlers
//------------------------------
function addMessage(event) {
	event.preventDefault();

	// create JSON for new message
	var message = {
		id: generateUUID(),
		content: messageName.value,
		voteCount: 0,
		dateCreated: Date.now()
	};

	createMessage(message);

	app.messages.push(message);
	saveMessage();

	form.reset();
};

function messageActionClicked(event) {

	app.messages.forEach(updateVoteCountOrDelete);

	function updateVoteCountOrDelete(message) {
		// use event delegation to determine which icon was clicked
		if(event.target.className == "fa fa-thumbs-up pull-right" || event.target.classList == "fa fa-thumbs-down pull-right") {
			var li = event.target.parentElement;
			if (li.dataset.id === message.id){
				// update vote count
				message.voteCount = message.voteCount + 1;
			} else {
				return;
			}
		} else if(event.target.className == "fa fa-trash pull-right delete"){
			var li = event.target.parentElement;
			if (li.dataset.id === message.id){
				li.remove();
				// To do - Try to remove from your firebase
			} else {
				return;
			}
		}
	}
	// save your voteCount update back to firebase 
	saveMessage();
}





// Update page functions
//--------------------------
function createMessage(message) {
   
   	// Using a Template
 	var template = Handlebars.compile(messageTemplate.innerHTML);
    messageBoardList.insertAdjacentHTML('beforeend', template(message));

    // upVote, downVote event listener inside create message to leverage local message object
    messageBoardList.addEventListener("click", messageActionClicked);
};






// Storage Functions
//--------------------------------
function dataChanged(snapshot) {

    if (snapshot.val() === null) {
        return;
    }

    app = snapshot.val();
    // resets the page
    messageBoardList.innerHTML = '';
    // update page with messages
    app.messages.forEach(createMessage);
};


function getMessageBoardList() {
	fbRef.on("value", dataChanged);
};


function saveMessage() {
	fbRef.set(app);
};






// Helper Functions
//--------------------------------

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};



