var users = require ('../data/users.json');

module.exports = {
    user: (req, res) => {
        var id = req.params.id;
        var user = users.find( u => u.id == id);
        console.log(user)
        if (user === undefined){

            var message = "L'utilisateur n'existe pas !"
            res.status(200).render('error', {
                message
            })
        }


        res.status(200).render('index', {
            user
        })
    }, 


    users: (req, res) => {
        res.status(200).render('users', {
            users
        })
    },

}