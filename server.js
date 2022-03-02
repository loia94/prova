var express = require('express'); //utilizziamo la tecnologia express per node.js (una libreria)

var app = express();

app.set('port', process.env.PORT || 3000); //porta HTTP 3000 in ascolto

app.get('/', function(req,res) {
    res.send('Ciao Mondo, sono una APP DI PROVA - first deploy');
});

app.listen(app.get('port'),function() {
    console.log('Esempio di web app che gira sulla porta : ' + app.get('port'));
});

//descrizione del progetto in package.json