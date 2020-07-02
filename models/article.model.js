const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    articleTitle: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    articleMainImg: {
        type: String,
        required: true
    },
    articleDuration: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    description_1: {
        type: String,
        required: true
    },
    descriptionBold_1: {
        type: String,
        required: true
    },
    description_2: {
        type: String,
        required: true
    },
    descriptionBold_2: {
        type: String,
        required: true
    },
    descriptionImg: {
        type: String,
        required: true
    },
    articleCover:{
        type:String,
        required:true
    }
}, {
    timestamps: true
})

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;