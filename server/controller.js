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
    }
}