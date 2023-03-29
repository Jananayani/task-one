var el = document.getElementById('btn');
if(el){
  el.addEventListener('click', showUsername);
}

function showUsername(){
    console.log('Calling');

    let username = document.getElementById('username').value

    let url = `https://api.github.com/users/${username}?q=Q`
    let token = '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'; 
    fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.message){
            document.getElementById('res').innerHTML = `
            <h3>Not Found</h3>
            `
        } else {
            document.getElementById('res').innerHTML = `
            <div class="border">
                <div>
                    <img class="image" src="${data.avatar_url}" />
                </div>
                <div class="details">
                    <h2 style="color:black">${data.name}</h2>
                    <p style="color:black">${data.login}</p>
                    <p style="color:black">${data.bio}</p>
                    <ul class="info">
                        <li>${data.followers}<strong> Followers &nbsp</strong></li></br>
                        <li>${data.following}<strong> Following &nbsp</strong></li>
                        <li>${data.public_repos}<strong> Public Repositories</strong></li>
                    </ul>
                    <div id="repos"></div>
                </div>
        </div>
               
                   
                        
                    
                
            
            `
        }
    })
    .catch(e => {
        console.log(e);
    })
}
