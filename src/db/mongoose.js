const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
})
