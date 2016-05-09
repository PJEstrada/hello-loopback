/**
 * Created by pablo on 6/05/2016.
 */

module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/ping', function(req, res) {
    res.send('pong');
  });
  router.post('/hello',function(req,res){
    console.log(req);
    var name = req.body.name;
    res.send('Hello '+name+'!');
  });
  app.use(router);

}
