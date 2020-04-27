
let didShowMessage = false;

function showMessage()
{
	const message = "I like logs";

	for (let i = 0; i < 5; i++) {
		//eslint-disable-next-line
        console.log(message);
        
		//eslint-disable-next-line semi
		console.log(message)
        
	}
}

showMessage();
