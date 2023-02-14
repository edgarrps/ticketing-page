
export const Register = () => {
    return (
        <div><label>Usuário novo? Registrar</label>
            <div>
                <label htmlFor='username'>Nome do Usuário</label>
                <input id='username' type='text' placeholder='username'></input>
            </div>
            <div>
                <label htmlFor='email'>E-mail</label>
                <input id='email' type='email' placeholder='user@user.com'></input>
            </div>
            <div>
                <label htmlFor='passwd'>Senha</label>
                <input id='passwd' type='password' placeholder='********'></input>
            </div>
            <div>
                <label htmlFor='repasswd'>Repetir senha</label>
                <input id='repasswd' type='password' placeholder='********'></input>
            </div>
            <div>
                <button type='submit'>Registrar</button>
            </div>
        </div>
    )
}
