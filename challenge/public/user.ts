const userHeader = document.querySelector('#userHeader');

function handleEditTitle(username) {
    const head = document.querySelector('head');
    head.innerHTML += `<title>${username}</title>`;
}

function getUserName() {
	try {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const username = urlParams.get('username');
		return username;
	} catch (error) {
		console.error(error);
	}
}

function EditHeader(username) {
    userHeader.innerHTML = `Welcome Back ${username}!`
}

function onPageLoad() {
	const username = getUserName();
	handleEditTitle(username);
    EditHeader(username);
}