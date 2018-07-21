const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const AWS = require('aws-sdk')
const app = express();

var dbFunc = require("./dbfunc");
 

app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ******** AWS STUFF ********
AWS.config.update({
	region: 'us-east-1'
});
AWS.config.dynamodb = {
	endpoint: 'dynamodb.us-east-1.amazonaws.com'
};
	
// ******** UNCOMMENTED IN PRODUCTION ********
// let myCredential = AWS.config.getCredentials(function(err) {
//   if (err) console.log(err.stack); 
//   else console.log('Access Key and SecretAccessKey Obtained');
// });

app.get('*', (req,res) => {
	res.sendFile(path.resolve(__dirname + '/static/test.html' ));
})

app.post('*', (req,res) => {
	var table = "AC-Eml"
	var email = req.body.email;
	var user = {email: email};
	console.log(email + table);

	const docClient = new AWS.DynamoDB.DocumentClient();


	docClient.put(dbFunc.makeParams(user, table), function(err, data) {
      if (err) {
          console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          console.log("Added item:", JSON.stringify(data, null, 2));
    }
    })
	res.redirect("/");
})

app.listen(3000,() => {
	console.log('App has started on port 3000');
});