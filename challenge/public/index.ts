console.log(`connected to index`);

async function handleLogin(ev) {
	ev.preventDefault();
	try {
		const email = ev.target.logEmail.value;
		const username = ev.target.logUsername.value;
		const password = ev.target.logPassword.value;

		if (!email || !username || !password) throw new Error('Missing info');
		//@ts-ignore
		const { data } = await axios.post('/users/login', { email, username,  password});
		const { login, error } = data;
		if (error) throw error;

		if (login) {
			window.location.href = `./user.html?username=${username}`;
		}

		if (error) throw error;
		console.log(data);

		ev.target.logEmail.value = '';
		ev.target.logUsername.value = '';
		ev.target.logPassword.value = '';
	} catch (error) {
		console.error(error);
	}
}

async function handleRegister(ev) {
	ev.preventDefault();
	try {
		const email = ev.target.regEmail.value;
		const username = ev.target.regUsername.value;
		const password = ev.target.regPassword.value;

        console.log(email, username, password)

		if (!email || !username || !password) throw new Error('Missing info');
		//@ts-ignore
		const { data } = await axios.post('/users/register', { email, username, password});
		const { register, error } = data;
		if (error) throw error;

		if (register) {
			window.location.href = `./user.html?username=${username}`;
		}

		if (error) throw error;
		console.log(data);

		ev.target.regEmail.value = '';
		ev.target.regUsername.value = '';
		ev.target.regPassword.value = '';
	} catch (error) {
		console.error(error);
	}
}

