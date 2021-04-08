const question_ctrl = require('../controllers/questionCtrl');

module.exports = [
	
	{
		url: '/question',
		method: 'get',
		func: question_ctrl.get_random
	}
	
];