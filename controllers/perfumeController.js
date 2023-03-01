const Perfume = require("../models/perfume");

//create
module.exports.create = async (req, res) => {
  try {
    const { perfume } = req.body;
    let newPerfume = Perfume.create(perfume);
    if (newPerfume) {
      res.status(201).send(newPerfume);
    }
  } catch (error) {
    console.log(error);
  }
};


//update
module.exports.update = async (req, res) => {
  try {
    const { updates } = req.body;
    const result = await Perfume.findByIdAndUpdate({ _id: updates.id }, updates);
  } catch (error) {
    console.log(error);
  }
};

// delete
module.exports.delete = async (req, res) => {
  try {

  } catch (error) {
    console.log(error);
  }
};

// get
module.exports.get = async (req, res) => {
  try {
    let result;
    if (req.query.name !== undefined){
       result = await Perfume.find({name: req.query.name})
    }else{
       result = await Perfume.find({})
    }
    console.log(result);
    if(result){
        res.status(200).send(result)
    }else{
        res.status(404).send({message:'no perfume found'})
    }
  } catch (error) {
    console.log(error);
  }
};
