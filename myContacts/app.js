const express =  require('express');
const dbConnect = require('./config/dbConnect');
const methodOverride = require('method-override');

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(methodOverride("_method"));

app.use(express.static('./public'));

dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes/loginRoute'));
app.use('/contacts', require('./routes/contactRoutes'));

app.listen(3000, () => {
    console.log('서버 실행중');
})