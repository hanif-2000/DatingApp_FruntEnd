import axios from 'axios';
const BASE_URL = '';
const headers = {
  'Content-Type': 'application/json',
};

const onSingIn = (body, onResponse, onError) => {
  axios({
    method: 'POST',
    url: `${BASE_URL}users/v1/loginNormalUser`,
    data: body,
    headers: headers,
  })
    .then(function (response) {
      onResponse(response.data);
    })
    .catch(error => {
      onError(error);
    });
};



export {
  onSingIn,
};
