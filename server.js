var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: "Article One",
    heading: "Article One",
    content:`
    <p>
                Ils sont squisheless.
    </p>`
}
var articleTwo = {
    title: "Article TWO",
    heading: "Article Two",
    content:`
    <p>
                Ils sont crackies.
    </p>`
}
function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate =`
        <html>
            <head>
                <title> ${title} </title>
                <meta name="viewport" content="width-device-width, initial-scale-1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                <div>
                    <a href='/'>Home</a>
                </div>
                <h3>
                    ${heading}
                </h3>
                <div>
                    Sept 29, 2016
                </div>
                <div>
                    ${content}
                </div>
        
                <hr/>
                </div>
            </body>
        </html>`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});
app.get('/article-two', function (req, res) {
  res.send(createTemplate(articleTwo));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
