const axios = require('axios');

exports.homeRoutes = (req, res) => {
  axios
    .get('http://localhost:3000/api/users')
    .then(function (response) {
      console.log(response.data);
      res.render('index', { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.addRoute = (req, res) => {
  res.render('add_user');
};

exports.updateRoute = (req, res) => {
  axios
    .get('http://localhost:3000/api/users', { params: { id: req.query.id } })
    .then(function (userdata) {
      //console.log(userdata.data);
      res.render('update_user', { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
