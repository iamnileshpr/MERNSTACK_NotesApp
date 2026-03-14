const Notes = require("../models/notes")
const notes = require("../models/notes")
module.exports.getAllNotes = async function(req, res) { //name of function
    let allNotes = await notes.find()
    res.status(200).json({
        message: "all notes fetched successfully",
        notes: allNotes
    })
}

module.exports.getNotesById = async function(req, res) {
    let id = req.params.id
    let note = await Notes.findById(id)
    res.status(200).json({
        message: "Notes fetched successfully",
        note: note
    })
}


module.exports.createNotes = async function(req, res) {
    const formData = req.body;
    let createdNotes = await notes.create({
        tittle: formData.tittle,
        content: formData.content
    })
    res.status(201).json({
        message: "Notes Created Successfully",
        notes: createdNotes
    })
}

module.exports.editNotes = async function(req, res) {
    const id = req.params.id;
    const updated = req.body;
    let updatedData = await notes.findByIdAndUpdate(id, updated, { new: true })
    res.status(200).json({
        message: "updated successfully",
        note: updatedData,
    })
}

module.exports.deleteNote = async function(req, res) {
    let id = req.params.id
    let deleted = await notes.findByIdAndDelete(id)
    res.status(200).json({
        message: "deleted successfully",
        note: deleted
    })
}