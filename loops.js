for (let i = 0; i < 10; i++) {
	console.log(i);
}

const users = ['Max', 'Anna', 'Joel'];

for (const user of users) {
	console.log(user);
}

const loggedInUser = {
	name: 'Alin',
	age: 32,
	isAdmin: true,
};

for (const propertyName in loggedInUser) {
	console.log(propertyName);
	console.log(loggedInUser.name);
	console.log(loggedInUser[propertyName]);
}
