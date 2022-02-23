const axios = require("axios");

exports.rootPage = (req, res) => {
    axios
    .get("http://localhost:5500/api/users")
    .then(response => {
        res.render('index.html', { userInfo: response.data});

    }).catch(err => {
        res.send(err.message)
    })
};

exports.addMember = (req, res) => {
    res.render('addMember.html');
};


exports.editMember = (req, res) => {
    axios
    .get("http://localhost:5500/api/users", {params: {id: req.query.id}})
    .then(response => {
        res.render('editMember.html', {editUser: response.data});
    }).catch(err => {
        res.send(err.message)
    })
};