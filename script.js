// script.js
document.addEventListener("DOMContentLoaded", function() {

    // Função para animar o scroll suave ao clicar nos links de navegação
    const links = Array.prototype.slice.call(document.querySelectorAll("a"), 0, 5);
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            scrollToSection(targetSection);
        });
    });

    function validateEmail(email) {
        // Expressão regular para validar o formato do e-mail
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    document.getElementById('downloadForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que o formulário seja enviado normalmente

        // Dados do formulário
        var email = document.getElementById('email').value;
        
        // Verifica se o e-mail é válido
        if (!validateEmail(email)) {
            document.getElementById('message').textContent = 'Por favor, insira um endereço de e-mail válido.';
            document.getElementById('message').style.display = 'inline-block';
            return;
        }

        // Dados para enviar à API
        var data = {
            email: email
        };

        // Configuração da requisição
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://connect.mailerlite.com/api/subscribers', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMWIxYjkzYjNlNTQ3NTY1OTNiOWIwYzMxZTE4NzFmMmQxZDczZGRmMzUzM2M3Zjg4NDFjZjc1OGI1YWEwOGU2ODBkM2VlYWZlMWQxYTkzMTIiLCJpYXQiOjE3MTQ1OTE0NTIuMDAwMTYsIm5iZiI6MTcxNDU5MTQ1Mi4wMDAxNjIsImV4cCI6NDg3MDI2NTA1MS45OTY1OTIsInN1YiI6Ijk0MDI5OCIsInNjb3BlcyI6W119.DlIdFSe8ZLXxIh0DyIRp4ilUYtSA7YsISKq7r6-NqM-6Nb8KBPpwHxithsw9HaikI5PFdPU9azJwhYobyqTCr7lrFgTDulVzE5kI38vFyfV2sBmvs791QGFcMwwixW6lL5vdpsEqOUNkwkMeXQdwzXIHYR-08QKkcNWsuzi1f4zFGNxVMvt--iSS-pKkIbh-RHyuI0xZCxQyFTITJuqsHl6oaolQ-1ppthQYKBNZhpzEA12cM6BZn-f2PNltTkfpLjeKmIY4cIKI_vvpZnxc9lvAETBXFZvD_pBGg7-ywKF9ZOiBgn8nK7bNFKxqdK_Zn1pWX5TwfY8wQ1xdjf10L4ovY83ERfmajII-lecwah2R_azReYf5CwT4_usqO_jnuga4oYJYeMzaBhZiGggp2raBRrpkVDX5PQqfJ-yPsSkmcFZnm5_d4vBjYfHeSIqSqTs5YslIs2mC8n8vPtaIzx0GU1LRemMOPGarV4t0xkFMTwCCtV8ARsP3Nd5fjbwgG2PLZ-C1zRt5Tb7dA8Y91tSTrYaftneztLmDBzRD09LntEkvCqOILJsntKJA5fFwls0vmfGmus1rtkz9xAYXhTvqU9TBnekVHlishDv-kggES6dJAAQFrT3oNBohBPgAnIuDHanXXwlq3GXJZdhYkni-aPgIpNK4MQyMYR0620s'); // Substitua XXX pelo seu token de autenticação

        // Função para lidar com a resposta da API
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                document.getElementById('message').textContent = 'Obrigado por baixar o material!';
                document.getElementById('message').style.display = 'inline-block';
                document.getElementById('downloadForm').style.display = 'none';
            } else {
                document.getElementById('message').textContent = 'Ocorreu um erro ao adicionar o assinante. Tente novamente mais tarde.';
                document.getElementById('message').style.display = 'inline-block';
            }
        };

        // Envia a solicitação
        xhr.send(JSON.stringify(data));
    });

    // Função para rolar suavemente até a seção alvo
    function scrollToSection(targetSection) {
        const offsetTop = targetSection.offsetTop;
        window.scroll({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
});