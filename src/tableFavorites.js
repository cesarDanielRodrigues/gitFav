import { dataFavorites } from "./dataFavorites.js"

export class tableFavorites extends dataFavorites{
    constructor(root){
        super(root)
        
        this.tbody = this.root.querySelector("tbody")
        this.update()
    }
    update(){
        this.removeAllTr()
    }
    removeAllTr(){
        this.tbody.querySelectorAll('tr').forEach(tr=>{
            tr.remove()
        })
    }
}