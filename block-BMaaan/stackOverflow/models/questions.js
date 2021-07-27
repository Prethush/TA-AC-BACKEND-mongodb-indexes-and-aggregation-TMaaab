let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let questionSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    authorId: {type: Schema.Types.ObjectId, ref: "User", required: true},
    upVotes: {type: Number, default: 0},
    tags: {type: [String], required: true},
    answers: [{type: Schema.Types.ObjectId, ref: "Answer"}]
}, {timestamps: true});

questionSchema.index({title: "text"});
questionSchema.index({tags: 1});
module.exports = mongoose.model("Question", questionSchema);