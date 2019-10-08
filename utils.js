/**
 * Helpers
 */


/* Usage: 
    server.get('', async (req, res) => {
        const [err, cars] = await withCatch(CarsModel.update(req.params.id, req.body))
        if (err) res.status(500).json(err)
        else res.status(200).json(cars)
    })
*/
function withCatch(promise) {
    return promise
        .then(data => [null, data])
        .catch(err => [err])
}

function objectFromEntries (arrOfArrs) {
    return Object.assign({}, ...arrOfArrs.map(([k, v]) => ({ [k]: v }) ))
}


module.exports = {
    withCatch,
    objectFromEntries
}
