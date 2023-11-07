var UserSession = (function() {

    var getPermission = function(){
        var usuarioLogado = localStorage.getItem('userLogin');
        if(usuarioLogado == null)
            return "userUnlogged";
        else if(JSON.parse(usuarioLogado).tipoCadastro == "Aluno")
            return "Aluno"
        else if(JSON.parse(usuarioLogado).tipoCadastro == "Professor")
            return "Professor"
        else if(JSON.parse(usuarioLogado).tipoCadastro == "Empresa")
            return "Empresa"
        else
            return "userLogged"
    };

    var setUserLogger = function(Logged: any){
        localStorage.setItem("userLogin", JSON.stringify(Logged));
        console.log("logadado: "+localStorage.getItem('userLogin'));
    };

    var removeUserLogger = function(){
        localStorage.removeItem("userLogin");
    };

    return {
        getPermission: getPermission,
        setUserLogger: setUserLogger,
        removeUserLogger: removeUserLogger
    }
})

export default UserSession;