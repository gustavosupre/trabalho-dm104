//verifica se esta logado
if (getLocalStorage(LSKEY_login) != null) {
    setLogado()
} else {
    setLogoff()
}
