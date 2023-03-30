var el = document.getElementById('btn');
if(el){
  el.addEventListener('click', showUsername);
}

// document.getElementById(btn).addEventListener('click',showUsername);

function showUsername(){
    console.log('Calling');

    let username = document.getElementById('username').value

    let url = `https://api.github.com/users/${username}?q=Q`
    fetch(url).then(res=>res.json()).then(data=>{
        if(data.message){
            document.getElementById('result').innerHTML = `
            <h3>Not Found</h3>
            `
        }else{
            // console.log(data)
            document.getElementById('result').innerHTML = `
            <div class="card">
            <div>
              <img class="image" src="${data.avatar_url}" />
            </div>
            <div class="details">
              <h2>${data.name}</h2>
              <p>${data.login}</p>
              <p>${data.bio}</p>
              <ul>
                <li>${data.followers} Followers &nbsp</li>
                <li>${data.following} Following &nbsp</li>
                <li>${data.public_repos} Public Repositories</li>

              </ul>
              <ul class = "repos"> 
                <li><button class="btn btn-success success"><a href="${data.html_url}?tab=repositories" target="_blank" >See Repositories</a></button></li>
              </ul>
            </div>
          </div>
            `
        }
        
    }).catch(e=>{
        console.log(e);
    })
    
}