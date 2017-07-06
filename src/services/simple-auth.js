/**
 * Load a simple file of user authentication tokens from the
 * server.
 */

import Axios from 'axios';

const AUTH_FILE = 'static/auth.json';
let creds = {};

Axios
  .get(AUTH_FILE)
  .then((file) => {
    creds = file.data;
  });

export default {
  credentials: () => creds,
};
