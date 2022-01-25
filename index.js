var arrayuser = []

const fetchuser = async () => {
   await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => {
        arrayuser = data.results
        console.log(arrayuser[0]);
    })
}


const display = async () => {
    await fetchuser()

    document.body.innerHTML = arrayuser
    .map((user) =>
        `
        <div class="card">
            <img src="${user.picture.large}">
            <h3> ${user.name.title}.${user.name.first} ${user.name.last}</h3>
        </div>
        `    

    ).join("")
}





display()