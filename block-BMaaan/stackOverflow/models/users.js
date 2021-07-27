let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true},
    education: {type: String},
    profession: {type: String},
    questionId: [{type: Schema.Types.ObjectId, ref: "Question"}],
    answerId: [{type: Schema.Types.ObjectId, ref: "Answer"}],
    questionsAsked: {type: Number, defult: 0},
    questionsAnswered: {type: Number, default: 0},
    upvotes: {type: Number, default: 0}
}, {timestamps: true});

userSchema.index({name: "text"})
module.exports = mongoose.model('User', userSchema);