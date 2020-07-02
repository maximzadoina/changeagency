const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showcaseSchema = new Schema({
    showcaseTitle: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    subtitle: {
        type: String,
        required: true
    },
    serviceType: {
        type: String,
        required: true
    },
    descriptionBold: {
        type: String,
        required: false
    },
    description_1: {
        type: String,
        required: false
    },
    description_2: {
        type: String,
        required: false
    },
    headerImg: {
        type: String,
        required: true
    },
    descriptionImg: {
        type: String,
        required: true
    },
    showcaseCover:{
        type:String,
        required:true
    }
})

const Showcase = mongoose.model('Showcase', showcaseSchema);
module.exports = Showcase;