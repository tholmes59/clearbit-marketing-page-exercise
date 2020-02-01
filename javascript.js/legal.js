fetch('https://cors-anywhere.herokuapp.com/' + 'http://interview.plaid.com/data/footer.json', {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => populateLegal(data))


    function populateLegal(data){
        let legal = data.filter(x => x.legal)
        const container = document.getElementById("legal-container");
        legal.map(comp => {
            let allLeag = comp.legal
            
            allLeag.map(x => {
                let capLeag = x.charAt(0).toUpperCase() + x.substr(1);
                let li = document.createElement("li");
                let node = document.createTextNode(capLeag);
                li.appendChild(node);
                container.appendChild(li);
            })
        }) 
    }