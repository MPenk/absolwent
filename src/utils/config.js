import config from '../config.json';

export const API_URL = localStorage.getItem('API_URL') || process.env.REACT_APP_API_URL || config.API_URL;
export const ENV = (!isProd() && localStorage.getItem('ENV')) || process.env.REACT_APP_ENVIRONMENT ||  config.ENV;

export function isProd(){
    return process.env.REACT_APP_ENVIRONMENT == "Prod"
}