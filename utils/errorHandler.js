const handleRequestError = (err)=>{
  let error
  if(err.message.includes("Product validation failed")){
    error = {error: "Enter a product name"};
  }
  if(err.message.includes("query parameter required")){
    error = {error: "productName query parameter required"};
  }
  if(err.message.includes("invalid product")){
    error = {error: "product not found"};
  }
  return error;
}

module.exports = {handleRequestError};