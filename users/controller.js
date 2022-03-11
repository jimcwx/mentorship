
const controller = {

	getUser: async (req, res, next) => {
		try {
			const result = 'The User Is Jimmy';
			res.send(result);
		} catch (e) {
			next(e);
		}
	},
};

module.exports = controller;