const { showAllProducts, detailProduct, insertProduct, updateProduct, deleteProduct } = require("../dao/dao_products");
const { validateProducts } = require("../validations/products_validations");


const showProducts = async (req, resp) => {
    const { id } = req.user;
    const product = await showAllProducts(id, req.query.categoria);
    const {status, message } = product;
    if(typeof message !== 'string'){

      return  resp.status(status).json(message);
    }
    return  resp.status(status).json({message});

}

const detailProducts = async (req, resp) => {

    const { id: user_id } = req.user;
    const {id: product_id} = req.params;
    const {status, message } = await detailProduct(user_id,product_id);

    if(typeof message !== 'string'){

        return  resp.status(status).json(message);
      }
      return  resp.status(status).json({message});
}



 const registerProducts = async (req, resp) => {

    const { id: user_id } = req.user;
    const product = await insertProduct(user_id,validateProducts(req.body));
    
    const {status, message } = product;

    if(typeof message !== 'string'){

        return  resp.status(status).json(message);
      }
      return  resp.status(status).json({message});
 }

 const updaterProducts = async (req, resp) => {

    const { id: user_id } = req.user;
    const {id: product_id} = req.params;

    const product = await updateProduct(user_id, product_id, validateProducts(req.body));

    const {status, message } = product;
    if(typeof message !== 'string'){

        return  resp.status(status).json(message);
      }
      return  resp.status(status).json({message});
 }

 const excludeProducts = async (req, resp) => {
    const { id: user_id } = req.user;
    const {id: product_id} = req.params;

    const product = await deleteProduct(user_id, product_id);
    const {status, message } = product;
    if(typeof message !== 'string'){

        return  resp.status(status).json(message);
      }
      return  resp.status(status).json({message});
 }   


module.exports = {

    showProducts,
    detailProducts,
    registerProducts,
    updaterProducts,
    excludeProducts,

}