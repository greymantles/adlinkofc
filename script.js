// Função para definir um cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Função para ler o valor de um cookie
function getCookie(name) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}

// Função para deletar um cookie
function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

// Função para verificar se o usuário está logado
function isUserLoggedIn(username) {
    return getCookie(username) === 'loggedIn';
}

// Função para fazer login
function login(username, password) {
    // Verificar se o usuário e senha estão corretos
    const users = {
        "owner98": "209876%",
        "owner06": "297689#",
        "AllanADS01": "hhh862792#"
    };

    if (users.hasOwnProperty(username) && users[username] === password) {
        if (isUserLoggedIn(username)) {
            return 'alreadyLoggedIn'; // Usuário já está logado
        } else {
            setCookie(username, 'loggedIn', 1); // Definir o cookie de usuário autenticado por 1 dia
            return 'loginSuccessful'; // Login bem-sucedido
        }
    }
    return 'loginFailed'; // Login falhou
}

// Evento de submit do formulário de login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginResult = login(username, password);
    if (loginResult === 'loginSuccessful') {
        alert("Login bem-sucedido!");
        window.location.href = "dashboard.html"; // Redirecionar para a página de dashboard
    } else if (loginResult === 'alreadyLoggedIn') {
        alert("Usuário já está logado.");
    } else {
        alert("Usuário ou senha inválidos. Por favor, tente novamente.");
    }
});
