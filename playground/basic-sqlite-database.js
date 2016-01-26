var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/basic-sqlite-database.sqlite'
});

var Todo = sequelize.define('todo', {
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 250]//notEmpty: true
        }
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

//sequelize.sync({force: true}).then(function () {
sequelize.sync().then(function () {
    console.log('Everything is synced');
    
    Todo.findById(3).then(function (todo){
        if (todo) {
            console.log(todo.toJSON());
        } else {
            console.log('no todo found');
        }
    });
    
    /*Todo.create({
        description: 'Walk the dog',
        completed: false
    }).then(function (todo){
        return Todo.create({
            description: 'Clean office',
        });
    }).then(function (todo){
        //return Todo.findById(1);
        return Todo.findAll({
            where: {
                 //completed: false
                description: {
                    $like: '%dog%'
                }
            }
        });
    }).then(function (todos){
        if (todos) {
            todos.forEach(function (todo) {
                console.log(todo.toJSON());
            });
        } else {
            console.log('no todos found');
        }
    }).catch(function (e) {
        console.log(e);
    });*/
})