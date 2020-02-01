fetch('https://cors-anywhere.herokuapp.com/' + 'http://interview.plaid.com/data/footer.json', {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => populateCompany(data))


    function populateCompany(data){
        let company = data.filter(x => x.company)
        const container = document.getElementById("company-container");
        company.map(comp => {
            let allComp = comp.company
            allComp.map(x => {
                let capComp = x.charAt(0).toUpperCase() + x.substr(1);
                let li = document.createElement("li");
                let node = document.createTextNode(capComp);
                li.appendChild(node);
                container.appendChild(li);
            })
        }) 
    }