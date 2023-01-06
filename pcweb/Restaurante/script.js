const url = "https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json"

const PlatesContainer = document.querySelector("#platesContainer")

async function getAllPlates(){
    const response = await fetch(url)

    console.log(response)

    const data = await response.json()

    console.log(data)

    data.map((plates) => {
        const div = document.createElement("div")
        const code = document.createElement("h1")
        const name = document.createElement("h2")
        const title = document.createElement("h2")
        const photo = document.createElement("img")
        const details = document.createElement("p")
        const price = document.createElement("p")

        function NameTitle() {
            if(plates.code != 'C1' && plates.code != 'C2' && plates.code != 'C3' && plates.code != 'C4' && plates.code != 'C5' && plates.code != 'C6' && plates.code != 'C7' && plates.code != 'C8' && plates.code != 'C9' &&plates.code != 'C10' && plates.code != 'C11' && plates.code != 'C12' && plates.code != 'C13' && plates.code != 'C14' && plates.code != 'C15' && plates.code != 'C16' && plates.code != 'C17' && plates.code != 'C18' && plates.code != 'C19'){
                name.innerText = plates.name
            }else {
                title.innerText = plates.title
            }
        }

        code.innerText = plates.code
        NameTitle()
        photo.innerHTML = plates.photo
        photo.setAttribute("src", `https://rafaelescalfoni.github.io/desenv_web/restaurante/${plates.photo}`)
        details.innerText = plates.details
        price.innerText = plates.price

        div.appendChild(code)
        div.appendChild(name)
        div.appendChild(title)
        div.appendChild(photo)
        div.appendChild(details)
        div.appendChild(price)

        PlatesContainer.appendChild(div)
    })
}



getAllPlates()