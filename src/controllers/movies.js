class MoviesController {
    get(req, res) {
        return res.send(
            [
                {
                    params: 'params values'
                }
            ]
        )
    }
}

export default MoviesController;