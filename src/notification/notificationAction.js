import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef?.current?.navigate(name, params);
}

export const notificationOpen = notification => {
  console.warn(notification, '/////------------------->');
  //   let notifyData = Platform.OS=='ios'?notify?.data:notify?.data?.response_data;
  //   if(notifyData){
  //     setTimeout(() => {
  //       let data = notifyData;
  //       if(data?.job_number){
  //       navigate('BookingDetails',{job_id: data.job_number});
  //       }
  //   },2000);
  // }
};
