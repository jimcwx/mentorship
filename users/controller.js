const validator = require('./validation');
const service = require('./service')

const controller = {
	getUser: async (req, res, next) => {
		try {
			const result = {name: 'Jimmy', title: "breakfastEater", sky: "grey"};
			res.send(result);
		} catch (e) {
			next(e);
		}
	},
	addUser: async (req, res, next) => {
		try {
			await validator.addUser(req.body);
			console.log(req.body);
			const result = await service.addUser(req.body.name, req.body.number);
			res.send(`hello, ${result}`);
		} catch (e) {
			next(e);
		}
	}
};

module.exports = controller;