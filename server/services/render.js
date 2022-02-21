const axios = require("axios");

exports.rootPage = (req, res) => {
    axios
    .get("http://localhost:5500/api/users")
    .then(response => {
        console.log("data: ", response);
        res.render('index.html', { userInfo: response.data});

    }).catch(err => {
        res.send(err.message)
    })
};

exports.addMember = (req, res) => {
    res.render('addMember.html');
    // res.sendFile(path.resolve(__dirname, './views/addMember.html'))
};