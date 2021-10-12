const { query } = require ('../conexao');
const { statusVerified } = require('../validations/status_verifications');


const showAllProducts = async (id, categoria) => {

    if(!id){
        return ({status:statusVerified(5),
            message:"Usuário não logado no sistema!"});
    }

    if(categoria){
        try {
            const querySelect = `select * from produtos where usuario_id = $1 and categoria = $2`;

        const selectedProducts = await query(querySelect,[id, categoria]);

        if(selectedProducts.rowCount === 0) {
            return ({status:statusVerified(7),
                     message:"Não foi encontrado nenhum produto do usuário informado!"});

        }
        return ({status:statusVerified(1),
            message: selectedProducts.rows});
            
        } catch (error) {
            return ({status:statusVerified(4),
                message:error.message});
        }
    }

    try {

        const querySelect = `select * from produtos where usuario_id = $1`;

        const selectedProducts = await query(querySelect,[id]);

        if(selectedProducts.rowCount === 0) {
            return ({status:statusVerified(7),
                     message:"Não foi encontrado nenhum produto do usuário informado!"});

        }
        return ({status:statusVerified(1),
            message: selectedProducts.rows});
        
    } catch (error) {
        return ({status:statusVerified(4),
            message:error.message});
    }
}

const detailProduct = async (user_id, product_id) => {

    if(!user_id){
        return ({status:statusVerified(5),
            message:"Usuário não logado no sistema!"});
    }

    if(!product_id){
        return ({status:statusVerified(4),
            message:"Necessário informar o id do produto!"});
    }

    try {

        const querySelect = `select * from produtos where id = $1 and usuario_id = $2`;
        const selectedProduct = await query (querySelect,[product_id,user_id]);

        if (selectedProduct.rowCount === 0 ) {
            return ({status:statusVerified(7),
                message:`Não existe produto cadastrado com ID ${product_id}.`});
        }

        return ({status:statusVerified(1),
            message: selectedProduct.rows[0]});
        
    } catch (error) {
        
        return ({status:statusVerified(4),
            message:error.message});
    }


}

const insertProduct = async (id , product) => {

    const { nome, quantidade, categoria, preco, descricao, imagem, status } = product;
    console.log(product)
    if(status){
        return product;
    }
    if(!id){
        return ({status:statusVerified(5),
            message:"Usuário não logado no sistema!"});
    }
        
    try {

        const queryInsert = `insert into produtos ( usuario_id, nome, quantidade, categoria,
                             preco, descricao, imagem) values ($1, $2, $3, $4, $5, $6, $7)`;

        const registeredProduct = await query(queryInsert,[id,nome,quantidade,categoria,
                                                        preco, descricao, imagem]);
                                                        
        if(registeredProduct.rowCount === 0 ){
            return ({status:statusVerified(7),
                message:`Erro ao cadastrar o produto.`});
        } 
        
        return({status:statusVerified(3)});
        
    } catch (error) {
        
        return ({status:statusVerified(4),
            message:error.message});
    }

}


const updateProduct = async (user_id, product_id, product) => {

    const { nome, quantidade, categoria, preco, descricao, imagem, status } = product;

    if(status){
        return product;
    }
    if(!user_id){
        return ({status:statusVerified(5),
            message:"Usuário não logado no sistema!"});
    }

    if(!product_id){
        return ({status:statusVerified(4),
            message:"Necessário informar o id do produto!"});
    }

    try {

        const querySelect = ` select * from produtos where id = $1 and usuario_id = $2`;
        const selectedProduct = await query(querySelect,[product_id, user_id]);
        if(selectedProduct.rowCount === 0){
            return ({status:statusVerified(7),
                message:`Não existe produto cadastrado com ID ${product_id}.`});
        }
        
        try {

            const queryUpdate = `update produtos set nome = $1, quantidade = $2, categoria =$3,
                                 preco = $4, descricao = $5, imagem =$6 where id = $7 
                                 and usuario_id = $8`;
            
            const updatedProduct = await query(queryUpdate,[nome, quantidade, categoria,
                                                preco, descricao, imagem, product_id, user_id]);
            
            if(updatedProduct.rowCount === 0 ){

                return ({status:statusVerified(7),
                    message:`Erro ao atualizar o produto.`});
            } 
                
            return({status:statusVerified(3)});
            
        } catch (error) {
            
            return ({status:statusVerified(4),
                message:error.message});
        }
        
    } catch (error) {
        
        return ({status:statusVerified(4),
            message:error.message});
    }
}

const deleteProduct = async (user_id, product_id) => {
    if(!user_id){
        return ({status:statusVerified(5),
            message:"Usuário não logado no sistema!"});
    }

    if(!product_id){
        return ({status:statusVerified(4),
            message:"Necessário informar o id do produto!"});
    }
    
    try {
        const querySelect = ` select * from produtos where id = $1 and usuario_id = $2`;
        const selectedProduct = await query(querySelect,[product_id, user_id]);
        if(selectedProduct.rowCount === 0){
            return ({status:statusVerified(7),
                message:`Não existe produto cadastrado com ID ${product_id}.`});
        }

        try {
            const queryDelete = `delete from produtos where id = $1 and usuario_id = $2`;
            const deletedProduct = await query(queryDelete,[product_id, user_id]);

            if(deletedProduct.rowCount === 0){
                return ({status:statusVerified(7),
                    message:`Não existe produto cadastrado com ID ${product_id}.`});
            }

            return({status:statusVerified(1)});

        } catch (error) {
            return ({status:statusVerified(4),
                message:error.message});
        }
    } catch (error) {
        
        return ({status:statusVerified(4),
            message:error.message});
    }


}


module.exports = {
    showAllProducts,
    detailProduct,
    insertProduct,
    updateProduct,
    deleteProduct,


} 