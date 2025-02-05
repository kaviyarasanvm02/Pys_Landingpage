import axios from 'axios';
import Cookies from 'universal-cookie';

// export const BaseUrl = 'http://13.233.39.109:8080';
// export const BaseUrl = 'http://192.168.29.206:8080/UPass';

export const BaseUrl = `http://13.127.83.156:8080`;

// export const BaseUrl = `https://pickyourslot.com`;

// CourseURL new url
export const CourseURL = `http://3.108.184.168:5001/UPass`;

export const Courseinstance = axios.create({
  baseURL: CourseURL,
});

export const instance = axios.create({
  baseURL: BaseUrl,
});

const cookie = new Cookies();

instance.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error.response;
    switch (status.status) {
      case 401:
        cookie.remove('user');
        cookie.remove('token');
        setToken('');
        window.location = '/sessionExpired';
        throw error;
      case 500:
        throw error;
      default:
        throw error;
    }
  }
);

export const setToken = (token, vendorId) => {
  instance.defaults.headers['x-auth-token'] = token;
  instance.defaults.headers.vendorId = vendorId;
};

export const MapApiKey = 'AIzaSyCyBg7L39I7RsEKJazpA7MydrK6146O70k';

export const emailFormat =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const urlFormat = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!/]))?/;

export const slotTypes = [
  { name: 'PRE DEFINED SLOT', value: 'PDS' },
  { name: 'NET PRACTICE', value: 'NET' },
  { name: 'BADMINTON', value: 'BMN' },
  { name: 'COURSE', value: 'COR' },
  { name: 'MEMBERSHIP', value: 'MEM' },
  { name: 'CONSECUTIVE', value: 'CON' },
];
