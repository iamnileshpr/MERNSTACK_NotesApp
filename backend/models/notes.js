    const mongoose = require("mongoose")

    const notesSchema = new mongoose.Schema({
        tittle: String,
        content: String,
    }, {
        timestamps: true //use to give time whenever data is inserted, created , deleted
    })
    let Notes = mongoose.model('Notes', notesSchema)
    module.exports = Notes;