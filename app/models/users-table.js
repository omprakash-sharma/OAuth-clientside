var moongoos = require('mongoose');
var Schema = moongoos.Schema;

var userSchema = new Schema({
    userName: String,
    userEmail: {type: String, require: true, index:{unique: true}},
    userPassword: {type: string, require: true, select: false}
});

module.exports = moongoos.model('user', userSchema);