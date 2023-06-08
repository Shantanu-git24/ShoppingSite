const Product = require('../models/product');

exports.create_Product = async (req,res)=>{

   try {
    const{title,description,price,imgUrl} =req.body;

    let newProduct = new Product({
        title,description,price,imgUrl,
    })

  newProduct = await newProduct.save();

  res.json(newProduct);
  
   } catch (e) {
    res.status(500).json({error:e.message});
   }
};

exports.products = async(req,res)=>{
  try{
    const products = await Product.find({});
    res.json(products);
  } catch(e){
    res.status(500).json({error:e.message});
  }

}


exports.product = async(req,res)=>{
  try{
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch(e){
    res.status(500).json({error:e.message});
  }

}

exports.update_product = async(req,res)=>{
  try{
    const{title,description,price,imgUrl} =req.body;
    let updatedProduct = new Product({
      title,
      description,
      price,
      imgUrl,
      _id:req.params.id,
    });


    updatedProduct = await Product.findByIdAndUpdate(req.params.id,updatedProduct)

    res.json({msg:`Product with id ${req.params.id} updated succesfully!`});

  } catch(e){
    res.status(500).json({error:e.message});
  }

}


exports.delete_product = async (req,res)=>{
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id,deletedProduct)

    res.json({msg:`Product with id ${req.params.id} deleted succesfully!`});

  } catch (e) {
    
    res.status(500).json({error:e.message});
  }
}