module.exports = function(app) {
  app.get('/v1', function(req, res) {
    var people = {
      'name' : 'koki',
      'sex' : 'female',
      'age' : '10'
    };
    var peopleJSON = JSON.stringify(people);
    res.send(peopleJSON);
  });

  app.get('/v1/ap' , function(req, res) {
     var people = {
      'name' : 'poki',
      'sex' : 'female',
      'age' : '80'
    };
    var peopleJSON = JSON.stringify(people);
    res.send(peopleJSON);
  });
}
