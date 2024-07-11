import { dataFavorites } from "./dataFavorites.js"

export class tableFavorites extends dataFavorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector("tbody")
    this.update()
    this.searchFavorite()
  }
  empyt() {
    const empytEntries = this.entries.length == 0
    if (empytEntries) {
      const emptyRow = document.createElement("tr")

      emptyRow.innerHTML = `           
         <td>
            <div class="empty">
                <img src="./assets/Estrela.svg">
                <p>Nenhum favorito ainda</p>
            </div>
        </td>
        `
      this.tbody.append(emptyRow)
    }
  }
  searchFavorite() {
    const searchButton = this.root.
    querySelector("header .search button")
    .onclick = () => {
        const { value } = input
        this.add(value)
    }
    const input = this.root.querySelector("header .search input")
    input.onkeypress = (event) => {
      if (event.key == "Enter") {
        searchButton()
      }
    }
  }
  update() {
    this.removeAllTr()
    this.empyt()
    this.entries.forEach((data) => {
      const row = this.createRow()
      row.querySelector("td.user img").src = `https://github.com/${data.login}.png`
      row.querySelector("td.user img").alt = `Imagem de ${data.name}`
      row.querySelector("td.user a").href = `https://github.com/${data.login}`
      row.querySelector("td.user p").textContent = `${data.name}`
      row.querySelector("td.user span").textContent = `${data.login}`
      row.querySelector("td.repositories").textContent = `${data.public_repos}`
      row.querySelector("td.followers").textContent = `${data.followers}`

      row.querySelector(".action").onclick = () => {
        const isOk = confirm("Deseja mesmo excluir esse favorito")
        if (isOk) {
          this.delete(data)
        }
      }
      this.tbody.append(row)
    })
  }
  createRow() {
    const tr = document.createElement("tr")

    tr.innerHTML = `                        
        <td class="user">
        <img src="https://github.com/maykbrito.png" alt="Imagem de Mayk Brito">
        <a href="https://github.com/maykbrito" target="_blank">
        <p>Mayk Brito</p>
        <span>/maykbrito</span>
        </a>
        </td>
        <td class="repositories">1000</td>
        <td class="followers">100</td>
        <td class="action">
        <button>Remover</button>
        </td>
        `

    return tr
  }
  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove()
    })
  }
}
