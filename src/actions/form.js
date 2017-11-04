import { Map } from 'immutable';
// import Axios from 'axios';

export const sessionState = {
  fields: Map()
};

export const fields = sessionState.fields.toJS();

export const updateField = (name, value) => {
  if (sessionState.fields.hasOwnProperty(name)) {
    sessionState.fields.set(name, value);
    console.log(name, value);
  }
};

export const pushSessionState = () => {
  // return axios.get(sessionState);
};
