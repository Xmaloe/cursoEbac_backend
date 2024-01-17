
//garantir que o script seja executado apenas quando o DOM estiver totalmente carregado.
    document.addEventListener('DOMContentLoaded', async () => {

// Fetch API para fazer uma solicitação à API do GitHub e obter informações do usuário. O código verifica se a resposta está OK. Se não estiver, um erro é lançado.
        const apiUrl = 'https://api.github.com/users/Xmaloe';
    
        try {
        const response = await fetch(apiUrl);
    
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }    
        const userData = await response.json();    

//Limpeza do conteúdo existente no contêiner, garante que os novos elementos não se acumulem na página
        const profileContainer = document.getElementById('profile-container');
        profileContainer.innerHTML = '';
    
// Cria elementos com os dados do usuário
        const avatarImg = document.createElement('img');
        avatarImg.classList.add('profile-avatar');
        avatarImg.src = userData.avatar_url;
        avatarImg.alt = '.';
// Cria elementos com os dados do usuário    
        const nameHeader = document.createElement('h1');
        nameHeader.classList.add('profile-name');
        nameHeader.textContent = userData.name;
// Cria elementos com os dados do usuário    
        const usernameHeader = document.createElement('h2');
        usernameHeader.classList.add('profile-username');
        usernameHeader.textContent = `@${userData.login}`;
// Cria elementos com os dados do usuário    
        const numbersList = document.createElement('ul');
        numbersList.classList.add('numbers');
// Cria elementos com os dados do usuário   
        const repositorios = createNumberItem('Repositórios', userData.public_repos);
        const seguidores = createNumberItem('Seguidores', userData.followers);
        const seguindo = createNumberItem('Seguindo', userData.following);
// Cria elementos com os dados do usuário  como filhos do elemento com o ID profile-container
        numbersList.appendChild(repositorios);
        numbersList.appendChild(seguidores);
        numbersList.appendChild(seguindo);
// Cria elementos com os dados do usuário       
        const githubLink = document.createElement('a');
        githubLink.classList.add('profile-link');
        githubLink.href = userData.html_url;
        githubLink.textContent = 'Ver no Github';
// Cria elementos com os dados do usuário  como filhos do elemento com o ID profile-container    
        profileContainer.appendChild(avatarImg);
        profileContainer.appendChild(nameHeader);
        profileContainer.appendChild(usernameHeader);
        profileContainer.appendChild(numbersList);
        profileContainer.appendChild(githubLink);
        } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error.message);
        }
    });
    
    function createNumberItem(label, value) {
        const item = document.createElement('li');
        item.classList.add('numbers-item');
    
        const labelHeader = document.createElement('h4');
        labelHeader.textContent = label;
    
        const valueSpan = document.createElement('span');
        valueSpan.textContent = value;
    
        item.appendChild(labelHeader);
        item.appendChild(valueSpan);
    
        return item;
    }

    