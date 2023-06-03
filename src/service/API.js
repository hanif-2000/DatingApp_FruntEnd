import axios from 'axios';
const BASE_URL = 'https://lightcode.in/jadeen.org/api/';
const headers = {
  'Content-Type': 'multipart/form-data',
};

// 1. LoginWithFacebook_API
export  const LoginWithFacebook_API  = (body, onResponse, onError) => {
  axios({
    method: 'POST',
    url: `${BASE_URL}auth/facebook-store`,
    data: body,
    headers: headers,
  })
    .then(function (response) {
      onResponse(response.data);
    })
    .catch(error => {
      onError(error.response);
    });
};

// 2. language-list
export  const getLanguageList_API  = (onResponse, onError) => {
  axios({
    method: 'GET',
    url: `${BASE_URL}auth/language-list`,
    data: {},
    headers: headers,
  })
    .then(function (response) {
      onResponse(response?.data?.result);
    })
    .catch(error => {
      console.warn(error);
      onError(error?.response);
    });
};

// 3.account-setting
export  const setAccountSetting_API  = (body, onResponse, onError) => {
  axios({
    method: 'POST',
    url: `${BASE_URL}auth/account-setting`,
    data: body,
    headers: headers,
  })
    .then(function (response) {
      onResponse(response.data);
    })
    .catch(error => {
      onError(error.response);
    });
};

// 4 Logout Api
export  const logoutApi  = (body, onResponse, onError) => {
  axios({
    method: 'POST',
    url: `${BASE_URL}auth/logout`,
    data: body,
    headers: headers,
  })
    .then(function (response) {
      onResponse(response.data);
    })
    .catch(error => {
      onError(error.response);
    });
};

export  const editPost  = (body, onResponse, onError) => {
  axios({
    method: 'POST',
    url: `${BASE_URL}auth/post/edit/5`,
    data: body,
    headers: headers,
  })
    .then(function (response) {
      onResponse(response.data);
    })
    .catch(error => {
      onError(error.response);
    });
};

export const updateProfileData= (body, onResponse, onError) => {
  axios({
    method: 'POST',
    url: `${BASE_URL}auth/facebook-update`,
    data: body,
    headers: headers,
  })
    .then(function (response) {
      onResponse(response.data);
    })
    .catch(error => {
      onError(error.response);
    });
};


export const UserListing_API= (body, onResponse, onError) => {
  axios({
    method: 'POST',
    url: `${BASE_URL}auth/post/list`,
    data: body,
    headers: headers,
  })
    .then(function (response) {
      onResponse(response.data);
    })
    .catch(error => {
      onError(error.response);
    });
};


export const Logout_Api= (body, onResponse, onError) => {
  axios({
    method: 'POST',
    url: `${BASE_URL}auth/logout`,
    data: body,
    headers: headers,
  })
    .then(function (response) {
      onResponse(response.data);
    })
    .catch(error => {
      onError(error.response);
    });
};

