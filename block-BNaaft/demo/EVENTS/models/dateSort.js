var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dateSortSchema = new Schema(
  {
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
  },
  { timestamps: true }
);

var Datesort = mongoose.model('Datesort', dateSortSchema);

module.exports = Datesort;
