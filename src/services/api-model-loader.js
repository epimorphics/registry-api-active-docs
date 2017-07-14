/*
 * Loader service that accesses the defining RAML document for the
 * API, and returns a wrapper value-object.
 */

import Raml from 'raml-1-parser-browser';
import RegistryApi from '@/models/registry-api';

const load = () =>
  Raml
    .loadRAML(`${window.location.origin}${window.location.pathname}static/api.raml`)
    .then(raml => new RegistryApi(raml.toJSON()));

export default {
  load,
};
