// main variable 
let theInput= document.querySelector(".get-repos input");
let getButton =document.querySelector(".get-button");
let reposData=document.querySelector(".show-data");


getButton.onclick=function(){

    getRepos();
};

// get repos function
function getRepos() {

    if(theInput.value=="") // if value empty
    {
        reposData.innerHTML= "<span>please write Github username </span>" 
    }
    else
    {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
    .then((response) => response.json())

    .then((repositories) => 
    {
      // Empty The Container
      reposData.innerHTML = '';

      // Loop On Repositories
      repositories.forEach(repo => {

            // Create The Main Div Element
            let mainDiv = document.createElement("div");
            // Create Repo Name Text

            let repoName = document.createTextNode(repo.name);
            // Append The Text To Main Div
            reposData.appendChild(repoName);

            // creat repo url 
            let theUrl =document.createElement('a');
            // creat repo url text 
            let theUrlText =document.createTextNode("visite");

            // append the  url text
            
            theUrl.appendChild(theUrlText);
            
            // add thr hyper text 'href'
            theUrl.href='https://github.com/${theInput.value}/ ${repo.name}';
            
            // set attribute blank
            theUrl.setAttribute('target','_blank');

            // appendurl anchor to main div
            mainDiv.appendChild(theUrl);
            
            
            // Create Stars Count Span
            let starsSpan = document.createElement("span");

            // Create The Stars Count Text
            let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

            // Add Stars Count Text To Stars Span
            starsSpan.appendChild(starsText);

            // Append Stars Count Span To Main Div
            mainDiv.appendChild(starsSpan);

            // Add Class On Main Div
            mainDiv.className = 'repo-box';




            // append the main div to container
            reposData.appendChild(mainDiv);
            
      
            
        });

  });
    
}
}