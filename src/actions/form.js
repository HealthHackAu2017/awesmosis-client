// import Axios from 'axios';

export let sessionState = {
  fields: {
    age: 0,
    pregnacy_num: 0,
    fertility_issue: 0,
    smoker_status: 0,
    partners: 0,
    sti_num: 0,
    sti_type: 0,
    edm: 0,
    pco: 0,
    periods_irregular: 0,
    ep: 0
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
