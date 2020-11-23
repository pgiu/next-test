const movies=[{name:'Star Wars Ep. 5'}, {name:'The Big Lebowsky'}]

export default function handler(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(movies))
}
