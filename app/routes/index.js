module.exports = function(app) {
  app.get('/', function(req, res) {
    var people = {
      'name' : 'toki',
      'sex' : 'male',
      'age' : '0'
    };
    var peopleJSON = JSON.stringify(people);
    res.send(peopleJSON);
  });

  require('./v1')(app)
}
