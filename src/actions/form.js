import { Map } from 'immutable';

export const sessionState = {
  fields: Map()
};

export const updateField = (name, value) => {
  if (sessionState.fields.hasOwnProperty(name)) {
    sessionState.set(name, value);
  }

  return sessionState;
};
