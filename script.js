var el = document.getElementById('btn');
if(el){
  el.addEventListener('click', showUsername);
}

// document.getElementById(btn).addEventListener('click',showUsername);

function showUsername(){
    console.log('Calling');

    let username = document.getElementById('username').value

    let url = 'https://api.github.com/users?q=$(username)' + username
    fetch(url).then(res=>res.json()).then(data=>{
        if(data.message){
            document.getElementById('res').innerHTML = `
            <h3>Not Found</h3>
            `
        }else{
            // console.log(data)
            document.getElementById('res').innerHTML = `
                <img src = "${data.avatar_url}">
                <p>${data.name}(${data.login})</p>
                <p>${data.bio}</p>
                <p>${data.repos_url}</p>
            `
        }
        
    }).catch(e=>{
        console.log(e);
    })
    
}