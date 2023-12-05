// importing mongoose
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/Habit_Tracker')
  .then(() => console.log('database connection is Successully..!'))
  .catch((error) => {
    
            // if there is some error
            console.log('database connection is failed');
            console.log(error);

  })
