let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let answerSchema = new Schema({
    questionId: {type: Schema.Types.ObjectId, ref: "Question"},
    description: String,
    tags: {type: [String], required: true},
    authorId: {type: Schema.Types.ObjectId, ref: "User", required: true},
    upVotes: {type: Number, default: 0},
}, {timestamps: true});

answerSchema.index({tags: 1});

module.exports = mongoose.model("Answer", answerSchema);