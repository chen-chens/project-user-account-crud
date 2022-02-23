const Userdb = require('../model/model');


/* 撰寫： crud API from mongoDB */ 

// get all users or retrieve a single user 
exports.find = (req, res) => {
    if(req.query.id){
        Userdb
        .findById(req.query.id)
        .then(data => {
            if(!data){
                res
                .status(404)
                .send({message: err.message})
            }else{
                res.send(data)     
            }

        }).catch(err => {
            res
            .status(500)
            .send({message: err.message})
        })
    }else{
        Userdb
        .find()
        .then(data => {
            res.send(data)
        }).catch(err => {
            res
            .status(500)
            .send({message: err.message})
        })
    }
}

// add user
exports.create = (req, res) => {
    // validate req body
    if(!req.body){
        res
        .status(400)
        .send({message: "Invalid Request!"})

        return
    }

    const newUser = new Userdb({
        name: req.body.name,
        email: req.body.email,
        level: req.body.level,
        phone: req.body.phone
    });

    newUser
    .save(newUser)
    .then(data => {
        res
        .status(200)
        // .send(data)
        .redirect('/')
    }).catch(err => {
        res
        .status(500)
        .send({message: err.message})
    })
}

// update user data
exports.update = (req, res) => {
    if(!req.body){
        
        res
        .status(400)
        .send({message: "Request body is empty!"})

        return
    }

    const id = req.params.id;
    Userdb
    .findByIdAndUpdate(id, req.body, {new:true})
    .then(data => {
        if(!data){
            res
            .status(404)
            .send({message: `Can't not upadte ${id}.`})
        }else{
            res.send(data);
        }
    }).catch(err => {
        res
        .status(500)
        .send({message: err.message})
    })
}

// delete
exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb
    .findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res
            .status(404)
            .send({message: "Fail to delete" + id})
        }else{
            res.send(data)
        }
    }).catch(err => {
        res
        .status(500)
        .send({message: err.message})
    })
}