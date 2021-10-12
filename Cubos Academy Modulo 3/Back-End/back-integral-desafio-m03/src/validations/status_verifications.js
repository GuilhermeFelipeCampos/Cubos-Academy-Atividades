// 200 (OK) = requisição bem sucedida
// 201 (Created) = requisição bem sucedida e algo foi criado
// 204 (No Content) = requisição bem sucedida, sem conteúdo no corpo da resposta
// 400 (Bad Request) = o servidor não entendeu a requisição pois está com uma sintaxe/formato inválido
// 401 (Unauthorized) = o usuário não está autenticado (logado)
// 403 (Forbidden) = o usuário não tem permissão de acessar o recurso solicitado
// 404 (Not Found) = o servidor não pode encontrar o recurso solicitado
const statusVerified = (status) => {

    if (status === 1) {
        return 200;

    } else if (status === 2) {
        return 201;

    } else if (status === 3) {
        return 204;

    } else if (status === 4) {
        return 400;

    }else if (status === 5) {
        return 401;
    }else if (status === 6) {
        return 403;    
    }else if (status === 7) {
        return 404;  
    }


}

module.exports = {
    statusVerified,
}