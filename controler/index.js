const Task = require('../models/Task')

const indexGet = async function(req, res){
    try {
        const tasks = await Task.find({})
        res.status(201).json(tasks)
    } catch (error) {
        res.status(500).json(error)
    }
}

const indexPost = async function(req, res){
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json(error)
    }

}

const indexPut = async function(req, res){
    //res.send(req.params['id'])
    // or res.send(req.params.id)
    try {
        const task = await Task.findOne({_id: req.params['id']})
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json(error)
    }
}

const indexPatch = function(req, res, next){
    res.send(req.params['id'])
    next()
}

const indexDelete = function(req, res, next){
    res.send(req.params['id'])
    next()
}

module.exports = {
    indexGet,
    indexPost,
    indexPut,
    indexPatch,
    indexDelete
}