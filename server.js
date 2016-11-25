var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool=required('pg').pool;
var confi={
    user:'ashwinm73',
    database:'ashwinm73',
    host:'db,imad.hasura-app.io',
    port:'5432',
    password:process.env.DB-PASSWORD
    
    
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/click', function(req,res){
    res.sendfile(path.join(__dirname, 'ui', "click.html"));
});
var pool = new Pool(config);

app.get('/test-db',function(req,res){
    pool.query('select*fromtest',function(err,result){
        if(err){
            res.status(500).send(err.tostring());
        }else{
            res.send(json.stringify(result));
        }
    });
    
});
var articleone={
    tittle:'Article one - Ashwin',
    heading:'Article one',
    date:'nov 05, 2016',
    content:'<p> this is frist article used to write in webapp</p> '
    
    
};

function createtemplate(data){
    var title= data.title;
    var date= data.date;
    var heading= data.heading;
    var content= data.content;
    
    var htmltemplate=
   ` <html>
         <head>
             <title>
           ${title}
    </title>
    
        <meta name="viewport" content="width=device-width,inital-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
        <body>
    <div class="container">
    <div>
    <a href='/'>home</a>
    </div>
    
    <hr/>
    <h3>
    ${heading}
    </h3>
    
    <div>
    ${date}
    </div>
    
    <div>
    ${content}
    </div>
    </div>
        </body>
        
        </html>`;
    return htmltemplate;
    
}


app.get('/arcticle-one', function (req, res) {
  res.send(createtemplate(articleone));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names=[];
app.get('/submit-name',function(req,res){
    varname=req.query.name;
    names.push(name);
    res.send(JSON.stringfy(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
