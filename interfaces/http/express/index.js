const express = require("express");
const cors = require('cors');
const expressApp = express();

expressApp.use(cors());
expressApp.set('trust proxy', true) //avoid nginx proxy ip and get actual client ip in req.op
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: false }));

function extractParams(req){
  let actorLocation = {ip:req.ip, userAgent: req.headers['user-agent'], originDomain: req.headers.origin}
  let identificatorObject = Object.assign(req.headers, {actorLocation})
  let o = Object.assign({identificatorObject}, req.body, req.query, req.params);
  if(req.headers.apikey){
    o.identificatorObject.apiKey = req.headers.apikey
  }
  return o
}

const errorHandler = (mapper) => async (error, req, res, next) => {
  let {status, data} = mapper.present(error)
  console.log(`Error in endpoint ${req.method} ${req.originalUrl} : ${status}`)
  res.status(status).json(data);
}

const responseHandler = (mapper) => async (req, res) => {
  let {status, data} = mapper.present(req.results)
  res.status(status).json(data);
}

const endpoint = (uoc) => async (req, res, next) => {
  try {
    req.results = await uoc(extractParams(req))
    next()
  } catch (error) {
    next(error)
  }
}
const addPrefixToPaths = prefix => route => {
  route.path = prefix + route.path
  return route
}
module.exports = (routes = [], responseMapper, errorMapper, port, middlewares=[], prefix='') => {
  routes.map(addPrefixToPaths(prefix)).forEach(({path, verb, uoc})=>{
    expressApp[verb.toLowerCase()](path,[...middlewares, endpoint(uoc),responseHandler(responseMapper), errorHandler(errorMapper)])
  })

  let server = expressApp.listen(port)
  console.log(`express running on port ${port}`)
  return server
};