fetch('https://cors-anywhere.herokuapp.com/' + 'http://interview.plaid.com/data/footer.json', {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => populateInformation(data))


    function populateInformation(data){
        let information = data.filter(x => x.information)
        const container = document.getElementById("information-container");
        information.map(info => {
            let allInfo = info.information
            allInfo.map(x => {
                let capInfo = x.charAt(0).toUpperCase() + x.substr(1);
                let li = document.createElement("li");
                let node = document.createTextNode(capInfo);
                li.appendChild(node);
                container.appendChild(li);
            })
        }) 
    }