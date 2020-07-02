/*//localhost:3000/user/first
const express = require('express')
const app = express()
const interceptorFunction = function(req,res,next){
console.log(`URL: : ${req.url}`);
console.log(`METHOD: : ${req.method}`);
next();
}
app.use(interceptorFunction);
const userRoute = require('./userRoute')
app.use('/user', userRoute)
app.listen(3000)

//localhost:3000/user/first
const express = require('express')
const app = express()
const userRoute = require('./userRoute')
app.use('/user', userRoute)
app.listen(3000)

//localhost:3000/dogandcatRoute
const express = require('express')
const app = express()
const dogRoute = require('./dogRoute')
const catRoute = require('./catRoute')
app.use('/dog', dogRoute)
app.use('/cat', catRoute)
app.listen(3000)

/////////////////////////localhost:3000/test.txt
const express = require('express')
const app = express()
app.use(express.static('./public/'))
const userRoute = require('./userRoute')
//app.use('/user', userRoute)
app.listen(3000)

////////////////localhost:3000/picture.png
const express = require('express')
const app = express()
app.use(express.static('./public/'))
const userRoute = require('./userRoute')
app.use('/user', userRoute)
app.listen(3000)*/