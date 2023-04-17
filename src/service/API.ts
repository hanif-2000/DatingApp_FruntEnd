import axios from 'axios';
const BASE_URL = 'http://3.111.9.246:8000/api/';
const headers = {
  'Content-Type': 'application/json',
};

const onRegister = (body: any, onResponse: any, onError: any) => {
  axios({
    method: 'POST',
    url: `${BASE_URL}users/v1/registration`,
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
const onVerifyOTP = (body: any, onResponse: any, onError: any) => {
  axios({
    method: 'POST',
    url: `${BASE_URL}users/v1/verifyOtp`,
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
const onSingIn = (body: any, onResponse: any, onError: any) => {
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

const reSendOTP = (body: any, onResponse: any, onError: any) => {
  axios({
    method: 'POST',
    url: `${BASE_URL}users/v1/resendOtp`,
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

const ForgotPasswordApi = (body: any, onResponse: any, onError: any) => {
  axios({
    method: 'POST',
    url: `${BASE_URL}users/v1/send-forgot-password-token`,
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

const updatePassword = (body: any, onResponse: any, onError: any) => {
  axios({
    method: 'POST',
    url: `${BASE_URL}users/v1/updatePassword`,
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

const createAnimal = (body: any, onResponse: any, onError: any) => {
  axios({
    method: 'POST',
    url: `${BASE_URL}Animal/v1/createAnimal`,
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

const getAllAnimalsByUserId = (body: any, onResponse: any, onError: any) => {
  axios({
    method: 'POST',
    url: `${BASE_URL}Animal/v1/getAllAnimalsByUserId`,
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

const getAnimalById = async (id: any, onResponse: any, onError: any) => {
  axios({
    method: 'GET',
    url: `${BASE_URL}Animal/v1/getAnimalById/${id}`,
  })
    .then(response => {
      onResponse(response.data);
    })
    .catch(error => {
      onError(error);
    });
};

const deleteAnimal = (body: any, id: any, onResponse: any, onError: any) => {
  axios({
    method: 'DELETE',
    data: body,
    headers: headers,
    url: `${BASE_URL}Animal/v1/deleteAnimal/${id}`,
  })
    .then(response => {
      onResponse(response.data);
    })
    .catch(error => {
      onError(error);
    });
};

const updateAnimal = (id: any, body: any, onResponse: any, onError: any) => {
  axios({
    method: 'PATCH',
    url: `${BASE_URL}api/Animal/v1/AnimalUpdate/${id}`,
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

const logOutApi = (userId: any, body: any, onResponse: any, onError: any) => {
  axios({
    method: 'PUT',
    url: `${BASE_URL}api/users/v1/userLogout/:${userId}`,
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
  onRegister,
  onVerifyOTP,
  reSendOTP,
  onSingIn,
  ForgotPasswordApi,
  updatePassword,
  createAnimal,
  getAllAnimalsByUserId,
  getAnimalById,
  deleteAnimal,
  updateAnimal,
  logOutApi
};
