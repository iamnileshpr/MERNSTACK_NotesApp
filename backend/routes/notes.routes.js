const express = require("express")
const { getAllNotes, createNotes, editNotes, deleteNote, getNotesById } = require("../controller/notes.controller")
const router = express.Router() // use to create routes


router.get('/', getAllNotes)
router.get('/all-notes', function(req, res) {
    res.send('code ki pathshala')

})
router.get('/:id', getNotesById)
router.post('/', createNotes)

router.put('/:id', editNotes)

router.delete("/:id", deleteNote)




module.exports = router;