const { stripIndents } = require("common-tags");
const fetch = require("node-fetch");
class findUser {
    constructor (username) {
        this.username = username;
        async function findInstagramUser() {

            try {
                const url = `https://instagram.com/${this.username}/?__a=1&__d=dis`;
                res = await fetch(url).then(url => url.json());
                const account = res.graphql.user;
                
            }
            catch (error) {
                throw new Error(`An error occured: ${error}`)
            }
        
        }
    }
}

module.exports = findUser;
