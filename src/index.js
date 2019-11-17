const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
//Initialization
const app = express();
//Setting
const port  = process.env.PORT || 3000;
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout : 'main',
    layoutsDir : path.join(app.get('views'),'layout'),
    partialsDir : path.join(app.get('views'),'partials'),
    extname : '.hbs'
}));

app.set('view engine', '.hbs');
//Middleware
app.use(express.urlencoded({ extended : false }));
app.use(express.json());
//Static files
app.use(express.static(path.join(__dirname,'public')));

//Routes

app.use(require('./routes/index'));











//Starting server
app.listen(port, () => {
    console.log(`Server on port : ${ port }`);
});