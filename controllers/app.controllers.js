function get(req, res) {
    res.send('Metodo GET')
}


function post(req, res){
    res.send(`Metodo POST`)
}


function put(req, res){
    res.send(`Metodo PUT`)
}

function delet(req, res){
    res.send(`Metodo DELETE`)
}


module.exports = {
    get,
    post,
    put, 
    delet
};