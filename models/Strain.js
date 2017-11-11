const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StrainSchema = new Schema({
  strainName: String,
  strainRating: Number,
  strainDescription: String,
  strainFlavors: Array,
  effectsAttributesArray: Array,
  medicalAttributesArray: Array,
  negativesAttributesArray: Array
});

module.exports = mongoose.model('Strain', StrainSchema);