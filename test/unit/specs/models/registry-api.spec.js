import RegistryApi from '@/models/registry-api';
import Raml from 'raml-1-parser-browser';
import { assert } from 'chai';

const raml = `#%RAML 1.0
title: test-registry
baseUri: http://localhost:8080/test
/:
  displayName: 'Root register'
  get:
    displayName: List the register
    description: Returns the JSON description of the register that is used for testing and demos
/:{version}:
  get:
    displayName: List a specific version of the register
`;
const fetch = Raml.parseRAML(raml);

describe('RegistryApi', () => {
  describe('#resources()', () => {
    it('should return an array of Resources', (done) => {
      fetch.then((ramlDoc) => {
        const rApi = new RegistryApi(ramlDoc.toJSON());
        const resources = rApi.resources();
        expect(resources).to.have.lengthOf(2);
        expect(resources[0].displayName()).to.equal('Root register');
        done();
      })
      .catch((error) => {
        console.log(`Promise rejected with ${error}`); // eslint-disable-line no-console
        assert.fail(error, null, 'Promise rejected');
        done();
      });
    });
  });
});
