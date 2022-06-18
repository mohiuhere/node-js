const indexGet = function(req, res, next){
    res.send('Get router for root')
    next()
}

const indexPost = function(req, res, next){
    // console.log(req.body)
    res.send(JSON.stringify(req.body))
    next()
}

const indexPut = function(req, res, next){
    res.send(req.params['id'])
    // or res.send(req.params.id)
    next()
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