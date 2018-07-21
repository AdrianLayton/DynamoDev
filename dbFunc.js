module.exports = {
	makeParams: (user, tableName) => {
		const emailEntry = user.email;

		const table = tableName;
		const params = {
			TableName: table,
			Item: {
			email: emailEntry,
			}
		}
		return params
		}
}