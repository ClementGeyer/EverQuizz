const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
    class User extends Model { }
    
        User.init({
            username: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            mail: {
                type: DataTypes.STRING,
                isEmail: true,
                allowNull: false
            },
            highscore: {
                type: DataTypes.INTEGER
            }
            },{
                sequelize,
                modelName: 'User'
            }
    );

    return User;
}