interface Usuario {
    nome: string,
    email: string,
    foto_perfil: string,
    senha: string;
    }

const usuario: Usuario = {
    nome: "João Silva",
    email: "affaef@example.com",
    foto_perfil: "https://example.com/foto.jpg",
    senha: "senha123",
};

export default function MinhaConta(props: Usuario) {
    return (
        <div className="minha-conta">
            <h1>Minha Conta</h1>
            <img src={usuario.foto_perfil} alt="Foto de perfil" />
            <p>Nome: {usuario.nome}</p>
            <p>Email: {usuario.email}</p>
            <p>Senha: {usuario.senha}</p>
            <button onClick={handleChangePassword}>Alterar Senha</button>
            <button onClick={handleChangeEmail}>Alterar Email</button>
        </div>
    );
}

function handleChangePassword() {   
    // Lógica para mudar a senha do usuário
    console.log("Senha alterada");
}   

function handleChangeEmail() {
    // Lógica para mudar o email do usuário
    console.log("Email alterado");
}   
