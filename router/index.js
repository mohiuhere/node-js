const express = require('express')
const router = express.Router()
const {
    indexGet,
    indexPost,
    indexPut,
    indexPatch,
    indexDelete
} = require('../controler')

router.get('/', indexGet)

router.post('/', indexPost)

router.put('/:id', indexPut)

router.patch('/:id', indexPatch)

router.delete('/:id', indexDelete)

module.exports = router