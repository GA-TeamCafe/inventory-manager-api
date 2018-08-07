const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
  itemReference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  },
  onhand: {
    type: Number,
    required: true
  },
  needed: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Inventory', inventorySchema)
