// import Raml from 'raml-1-parser-browser';
const Raml = require('raml-1-parser');

// const api = Raml.loadRAML('http://localhost:8080/static/api.raml');
const raml = `#%RAML 1.0
title: test-registry
baseUri: http://localhost:8080/test
/:
  get:
    displayName: List the register
    description: Returns the JSON description of the register that is used for testing and demos
`;
const ramlDoc = Raml.parseRAMLSync(raml, {});
console.log(`parsed: ramlDoc is ${ramlDoc}`);
