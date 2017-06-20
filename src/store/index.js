import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import * as types from './mutation-types';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

/* Vuex's recommended style breaks an Airbnb eslint rule, so disable it for this file */
/* eslint-disable no-param-reassign */

export const mutations = {
  /** A new API model has been loaded */
  [types.LOAD_API_MODEL](state, model) {
    state.apiModel = model;
  },
  /** User has selected an operation within a resource */
  [types.SELECT_OPERATION](state, operation) {
    state.currentOperation = operation;
    state.currentResource = operation.resource();
  },
  /** A new base URI has been given */
  [types.SET_API_BASE_URI](state, uri) {
    state.baseURI = uri;
  },
  /** A new relative URI for the API operation has been set */
  [types.SET_API_RELATIVE_URI](state, relativeURI) {
    state.relativeURI = relativeURI;
  },
  /** Add an API query parameter */
  [types.SELECT_API_PARAM](state, paramName, paramValue) {
    state.queryParams.push({ [paramName]: paramValue });
  },
  /** Remove an API query parameter */
  [types.UNSELECT_API_PARAM](state, paramName, paramValue) {
    _.remove(state.queryParams, { [paramName]: paramValue });
  },
  /** Remove all API query parameters */
  [types.CLEAR_API_PARAMS](state) {
    state.queryParams.splice(0, state.queryParams.length);
  },
};

function asUrlParam(obj) {
  const k = _.keys(obj)[0];
  const v = obj[k];

  return `${k}=${encodeURIComponent(v)}`;
}

export const getters = {
  apiEndpoint(store) {
    if (store.baseURI) {
      const sep = (store.relativeURI && !store.relativeURI.startsWith('/')) ? '/' : '';
      const queryParams = _.map(store.queryParams, asUrlParam).join('&');
      const queryPart = _.isEmpty(queryParams) ? '' : `?${queryParams}`;

      return `${store.baseURI}${sep}${store.relativeURI || ''}${queryPart}`;
    }

    return '';
  },
};

export default new Vuex.Store({
  strict: debug,
  state: {
    apiModel: {},
    currentOperation: null,
    currentResource: null,
    baseURI: null,
    relativeURI: null,
    queryParams: [],
  },
  mutations,
  getters,
});
