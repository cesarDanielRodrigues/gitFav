export class dataFavorites{
    constructor(root){
        this.root = document.querySelector(root)
        this.load()
    }
    load(){
        this.entries = [
            {
                name:"Mayk Brito",
                login:"maykbrito",
                public_repos: 120,
                followers: 7000
            },
            {
                name:"Diego Fernandes",
                login:"diego3g",
                public_repos: 120,
                followers: 7000
            }
        ]
    }
    delete(user){
        const verification = this.entries.filter(entry => entry.login !== user.login)
        this.entries = verification
        this.update()
    }
}