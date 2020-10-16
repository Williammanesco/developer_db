module.exports = errorHandler;

function errorHandler(err, req, res, next) {

    if (typeof (err) === 'string') {
        // erros jogados pela aplicacao
        return res.status(400).json({ message: err });
    }

    if (err.name === 'ValidationError' ) {
        // Erros de validacao do mongoose
        return res.status(400).json({ message: err.message });
    }

    // Qualquer erro retona 500
    return res.status(500).json({ message: err.message });
}
