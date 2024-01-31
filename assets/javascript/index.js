/*

Goal 1 - When the platforms selection button is clicked by the user, the box containing platform selection buttons should open. 

		Step 1 - Get the platforms selection button in JS to verify when the user click on it. 
	
		Step 2 - Get the element of the content that has to be shown. 

		Step 3 - Get the user click in JS. 

		Step 4 - When the user clicks, add the active class in the platforms list inside the button for the content appearing. 


Goal 2 - If the platform list buttons is appearing and the user clicks up to the button, the content has to be hidden. 
		
		Step 1 - Verify if the button is already opened, if it is opened, we have to remove the active class for that it hides the content again. 

*/

const button = document.querySelector('.btn-platform');
const platformsElement = document.querySelector('.btn-platform .platforms'); 

button.addEventListener('click', () => {
    platformsElement.classList.toggle('active');
});