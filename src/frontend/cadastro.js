
const cadastroForm = document.getElementById("cadastroForm");
if (cadastroForm) {
    cadastroForm.addEventListener('submit', async(e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {

            const response = await fetch('http://localhost:5500/auth/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            });
            if (response.ok) {
                alert("Usuário cadastrado com sucesso!");
            } else {
                alert("erro ao cadastrar usuário!");
            }
        } catch (error) {
            console.error("erro ao cadastrar usuário!", error);
        }
    })
}