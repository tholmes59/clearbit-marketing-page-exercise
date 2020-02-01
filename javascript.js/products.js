fetch('https://cors-anywhere.herokuapp.com/' + 'http://interview.plaid.com/data/footer.json', {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => populateProducts(data))

    function populateProducts(data){
        let products = data.filter(x => x.products)
        const container = document.getElementById("products-container");
        products.map(prod => {
            let allProd = prod.products
            allProd.map(x => {
                let capProd = x.charAt(0).toUpperCase() + x.substr(1);
                let li = document.createElement("li");
                let node = document.createTextNode(capProd);
                li.appendChild(node);
                container.appendChild(li);
            })
        }) 
    }