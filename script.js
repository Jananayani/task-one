var el = document.getElementById("btn");
// if(el){
el.addEventListener("click", showUsername);
// }

async function showUsername() {
  console.log("Calling");

  let username = document.getElementById("username").value;

  let url = `https://api.github.com/users/${username}?q=Q`;
  let token = "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";
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (data.message) {
      document.getElementById("result").innerHTML = `
            <h3>Not Found</h3>
            `;
    } else {
      document.getElementById("result").innerHTML = `
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
              </div>
            </div>
       
      `;
    }
  } catch (e) {
    console.log(e);
  }
}
