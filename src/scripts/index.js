document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})

async function user(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json()
}

function getUserProfile(userName) {
    user(userName).then(userData => {
        let userInfo = `<img src="${userData.avatar_url}" alt="Foto de perfil">
        <div>
        <h1>${userData.name ?? 'Esse usuário não possui nome!'}</h1>
        <p>${userData.bio ?? 'Esse usuário não possui biografia'}</p>
        </div>`
        
        document.querySelector('.profile-data').innerHTML = userInfo
    }).catch(error => {
        console.error('Erro ao buscar usuário:', error)
    })
}