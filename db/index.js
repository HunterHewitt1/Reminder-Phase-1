const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://virallzz:Kiwi0616@cluster0.y19dlxw.mongodb.net/reminderDatabase'
  )
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((e) => {
    console.log('Connection Error', e.messages)
  })

const db = mongoose.connection

module.exports = db
