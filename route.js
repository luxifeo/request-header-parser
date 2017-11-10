module.exports = function(app) {
  app.route('/*')
  .get(function(req, res){
    var ip = req.headers['x-forwarded-for'].split(',')[0]
    var info = {
      'ipaddress': ip,
      'language': req.headers["accept-language"].split('.')[0],
      'OS': req.headers["user-agent"].split('(')[1].split(')')[0] // take the value in the first bracket ()
    };
    res.send(info);
  })
}