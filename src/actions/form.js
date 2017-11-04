// import Axios from 'axios';

export let sessionState = {
  fields: {
    age: null,
    pregnacy_num: null,
    fertility_issue: null,
    smoker_status: null,
    partners: null,
    sti_num: null,
    sti_type: null,
    edm: null,
    pco: null,
    periods_irregular: null,
    ep: null
  }
};

export const fields = () => sessionState.fields;

export const updateField = (name, value) => {
  if (sessionState.fields.hasOwnProperty(name)) {
    sessionState.fields[name] = value;
  }

  pushSessionState();
};

export const pushSessionState = () => {
  console.log(sessionState);
  // return axios.get(sessionState);
};
