const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Library');
//mongoose.connect('mongodb+srv://kavya:KavyaAtlas123@cluster0.s7eqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;