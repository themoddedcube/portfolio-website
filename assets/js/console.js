const manageConsole = () => {
	console.clear();
	console.log(
		"%c Woah! You made it to the console! :D ",
		'background: #000814; color: #f4f4f4; padding: 6px; border-radius: 5px; margin: 10px; font-size: 16px'
	);
	console.log = () => {};
	console.error = () => {};
	console.info = () => {};
	console.warn = () => {};
	console.clear = () => {};
};

manageConsole();
