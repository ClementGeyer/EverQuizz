const user_ctrl = require('../controllers/userCtrl');

module.exports = [
	
	{
		url: '/user',
		method: 'get',
		func: user_ctrl.get_all
	},
	{
		url: '/user',
		method: 'post',
		func: user_ctrl.create
	},
	{
		url: '/user/:user_id',
		method: 'get',
		func: user_ctrl.get_by_id
	},
	{
		url: '/user/:user_id',
		method: 'put',
		func: user_ctrl.update_by_id
	},
	{
		url: '/user/:user_id',
		method: 'delete',
		func: user_ctrl.delete_by_id
	}
	
];