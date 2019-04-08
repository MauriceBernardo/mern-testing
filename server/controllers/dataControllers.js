const mongoose = require("mongoose");
var Data = mongoose.model("Data");

// this is our get method
// this method fetches all available data in our database
var getData = function(req, res){
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
};

// this is our update method
// this method overwrites existing data in our database
var updateData = function(req, res){
  const { id, update } = req.body;
  Data.findOneAndUpdate({_id: id}, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
};

// this is our delete method
// this method removes existing data in our database
var deleteData = function(req, res){
  const { id } = req.body;
  
  Data.findOneAndDelete({_id: id}, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
};

// this is our create method
// this method adds new data in our database
var putData = function(req, res){
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS",
    });
  }
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
};

module.exports.getData = getData;
module.exports.deleteData = deleteData;
module.exports.updateData = updateData;
module.exports.putData = putData;

