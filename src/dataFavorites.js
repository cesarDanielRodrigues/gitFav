import {GithubSearch} from './githubSearch.js'

export class dataFavorites{
    constructor(root){
        this.root = document.querySelector(root)
        this.load()
    }
    load(){
        this.entries = JSON.parse(localStorage.getItem('@gitFav')) || []
    }
    save(){
        localStorage.setItem('@gitFav', JSON.stringify(this.entries))
    }
    async add(userLogin){
        try{
            const verificationUserExists = this.entries.find(entry=>entry.login == userLogin)
            if(verificationUserExists){
                throw new Error('Esse usuário já existe')
            }

            const user = await GithubSearch.search(userLogin)
            if(user.login == undefined){
                throw new Error('Usuário não encontrado')
            }
            
            this.entries = [user, ...this.entries]
            this.update()
            this.save()
        }catch(error){
            alert(error.message)
        }

    }
    delete(user){
        const verification = this.entries.filter(entry => entry.login !== user.login)
        this.entries = verification
        this.update()
        this.save()
    }
}