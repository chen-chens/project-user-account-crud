
let userInfo = [
    {
        id: 1,
        name: "Joanna",
        email: "joanna@gmail.com",
        phone: "0912399999",
        level: "VVIP"
    },
    {
        id: 2,
        name: "David",
        email: "david@gmail.com",
        phone: "0988888888",
        level: "VIP"
    },
    {
        id: 3,
        name: "Bob",
        email: "bob@gmail.com",
        phone: "0912887999",
        level: "General"
    }
];


exports.rootPage = (req, res) => {
    res.render('index.html', { userInfo: userInfo});
};

exports.addMember = (req, res) => {
    res.render('addMember.html');
    // res.sendFile(path.resolve(__dirname, './views/addMember.html'))
};