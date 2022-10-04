const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get('project');

getProject = (id) =>{
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json())
        .then(json => {
            let title = json.company.name;
            let subtitle = json.company.bs;
            let text= json.company.catchPhrase
            
            
            
            document.querySelector('.project-name h1').innerHTML = title;
            document.querySelector('.project-name h4').innerHTML = subtitle;
            document.querySelector('.project-info article').insertAdjacentHTML('afterbegin', text);

    })
}

getProject(id)