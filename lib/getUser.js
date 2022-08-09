const fetch = require('node-fetch')

class getUser {
    constructor(username) {
        this.username = username;
    }
   async getInfo() {
        if (!this.username || ' ') throw new Error('Please enter a username.');
        const url = `https://instagram.com/${this.username}/?__a=1&__d=dis`;
        const res = await fetch(url).then(url => url.json());
        const account = res.graphql.user;
        return account;
    }
}

module.exports = getUser;