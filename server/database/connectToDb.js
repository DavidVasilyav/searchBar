const mongoose = require('mongoose');
const uri = 'mongodb+srv://david:123123123@cluster0.1owu7pj.mongodb.net/?retryWrites=true&w=majority'


const connectToDB = () => {
    mongoose.set("strictQuery", false);
    mongoose
    .connect(uri)
    .then(() =>
      console.log("Mongo DB database connection established successfully")
    )
    .catch((error) => console.log(error));
};

module.exports = connectToDB;
