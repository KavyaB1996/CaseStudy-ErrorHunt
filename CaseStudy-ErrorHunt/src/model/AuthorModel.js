const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');
//mongoose.connect('mongodb+srv://kavya:KavyaAtlas123@cluster0.s7eqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;