const
	fs = require('fs'),
	{ Sequelize } = require('sequelize');

// create Sequelize instance
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'Everquizz.db'
});

// this object will contain the model objects
// each key being the model's name
const db = {};

// read the files of the current directory
fs.readdirSync(__dirname)
.filter(filename => filename !== 'index.js') // avoid this file
.forEach(filename => {
	const model = require('./' + filename)(sequelize); // get the model definition
	db[model.name] = model; // add the entry in the db object
});

// go through each entry of the db object
Object.keys(db).forEach((modelName) => {
	// call the "associate" function on the model object
	// and pass it the db object (so that it can have access to other models)
	db[modelName].associate(db);
});

// sync the DB
sequelize.sync();

// expose the db object
module.exports = db;
