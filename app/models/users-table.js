const moongoos = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = moongoos.Schema;

var userSchema = new Schema({
    name: String,
    email: {type: String, require: true, index:{unique: true}},
    password: {type: String, require: true, select: false},
    createdDate: {type: Date, default: Date.now}
});

userSchema.pre("save", function(next){
    var user = this;
    if (!user.isModified('password') || user.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
})

userSchema.methods.comparePassword = function(password){
    var user = this;
    console.log("compare psw::" + user)
    return bcrypt.compareSync(password, user.password);
};
module.exports = moongoos.model('user', userSchema);