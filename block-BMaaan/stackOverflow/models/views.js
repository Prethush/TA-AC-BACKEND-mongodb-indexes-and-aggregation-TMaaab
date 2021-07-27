let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let viewSchema = new Schema({
    questionId: {type: Schema.Types.ObjectId, ref: "Question", required: true},
    date: Date,
    count: {type: Number, default: 0}
}, {timestamps: true});

module.exports = mongoose.model("View", viewSchema);

