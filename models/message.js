const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    topic: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Message', messageSchema)
