


getProjects = (numProjects) =>{
    let html = '';
    for (let i = 1; i <= numProjects; i++) {
      fetch('https://jsonplaceholder.typicode.com/users/' + i)
        .then(response => response.json())
        .then(json => {
            let title = json.company.name;
            let text= json.company.catchPhrase
            console.log(title+" "+text);
            html += `<div class="card is-full-mobile  is-full-tablet is-one-third column-desktop">
                        <div class="card-image">
                            <img src="./img/projects-section/${i}.jpg" alt="">
                        </div>
                        <div class="card-content">
                            
                            <div class="card-title">
                                <h4>${title}</h4>
                            </div>
                            <div class="card-text">${text}</div>
                            <div class="card-link  link"><a href="./html/project-page.html?project=${i}">Learn more</a></div>
                        </div>
                    </div>`
            document.querySelector('.project_cards').innerHTML = html;
        })
    }
}

getProjects(3);