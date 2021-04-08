const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
    class Question extends Model { }
    
        Question.init({
            firstpic: {
                type: DataTypes.BLOB,
                allowNull: false
            },
            secondpic: {
                type: DataTypes.BLOB,
                allowNull: false
            },
            thirdpic: {
                type: DataTypes.BLOB,
                allowNull: false
            },
            answer: {
                type: DataTypes.STRING,
                allowNull: false
            }
            },{
                sequelize,
                modelName: 'Question'
            }
    );

    return Question;
}