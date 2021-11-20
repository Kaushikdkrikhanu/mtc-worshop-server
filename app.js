var express = require('express');
var app = express(); 
var PORT = 3000;
  
// For parsing application/json
app.use(express.json());
  
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
  
app.get('/', function (req, res) {
  console.log(req.query);
  res.send(
    `<!DOCTYPE html>
    <html>
        <head>
            <style>
                .ys{display: block;margin-left: 1em;}
            </style>
        </head>
        <body>
            <h4>Hi ${req?.query?.senderName}</h4>
            <h4 class="ys">Your request has been processed. We will contact you shortly</h4>
        </body>
    </html`
  );
  
});
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});