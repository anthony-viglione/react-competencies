module.exports = {
    register: async (req, res) => {
        console.log('hit controller register')
        console.log({body: req.body})
        const {username, password} = req.body;
        let profile_pic = `https://robohash.org/${username}?set=set4`
        const db =req.app.get('db');
        let newperson = await db.new_user({username, password, profile_pic})
        console.log({newperson})
        res.status(200).send(newperson)
    },
    login: async (req, res) => {
        console.log('hit controller login')
        console.log({body: req.body})
        const {username, password} = req.body;
        const db =req.app.get('db');
        let loggedInUser = await db.login_user({username, password})
        console.log(loggedInUser)
        res.status(200).send(loggedInUser)
    },
    getPosts: async (req, res) => {
        console.log("hit controller getPosts")
        console.log({params:req.params})
        console.log({body:req.body})
        const { id } = req.params;
        const { userposts, search } = req.body
        const db =req.app.get('db');

        if (userposts === true && search){
            console.log("true true")
            let posts = await db.true_posts_and_string({search})
            res.status(200).send(posts)

        } else if(userposts === false && !search) {
            console.log("false false")
            let posts = await db.false_posts_and_no_string({id})
            res.status(200).send(posts)

        } else if (userposts === false && search){
            console.log("false true")
            let posts = await db.false_posts_and_string({id, search})            
            res.status(200).send(posts)

        } else if (userposts === true && !search){
            console.log("true false")
            let posts = await db.true_posts_and_no_string()            
            res.status(200).send(posts)

        } else {
            res.sendStatus(400)
        }



    }
}