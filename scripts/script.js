const divProductos = document.getElementById("divProductos")
const alertError = document.getElementById("alertError")
const URLMain = "https://fakestoreapi.com/products/"

function crearCard(item){
    let card = `
    <div class="col-4 card">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p><strong>${item.category}</strong></p>
            <p class="card-text">${(item.description).substring(0,100)} ...</p>
            <p>${item.rating.rate} <i class="bi bi-star"></i></p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `
    divProductos.insertAdjacentHTML("beforeend", card)
}

function getData(){
    fetch(URLMain)
    .then((response)=>{
        console.log(response)
        response.json().then(res =>{
            console.log(res)
            res.forEach(element => {
                crearCard(element)
            });
        }).catch((err) =>{
            alertError.innerHTML = err
            alertError.style.display="block"
        })
    })
    .catch((err) =>{
        alertError.innerHTML = err
        alertError.style.display="block"
    })
}

getData()