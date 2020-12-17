const Message = require('../models/message')

exports.create = async (req, res) => {
  const { email, phone, topic, message } = req.body
  try {
    if (!email || !topic || !message) {
      res.status(400).json({
        error: 'All fields exept phone are required.',
      })
    }

    let newMessage = new Message({
      email,
      phone,
      topic,
      message,
    })

    await newMessage.save()

    res.status(201).json({
      message: 'Your message was succefully sent, thank you.',
    })
  } catch (err) {
    console.log(err)
    res.status(400).send({ error: err.message })
  }
}

exports.read = (req, res) => {
  Message.find().exec((err, data) => {
    if (err) {
      res.status(400).json(err)
    }
    res.json(data)
  })
}
