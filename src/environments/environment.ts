import secureApiKey from '../config/firebasekey';
import secureEnviroment from '../config/enviroment.js';

export const environment = {
  production: false,
  firebase: {
    apiKey: secureApiKey.configKey,
    authDomain: secureEnviroment.ANGULAR_APP_AUTH_DOMAIN,
    databaseURL: secureEnviroment.ANGULAR_APP_DATABASE_URL,
    projectId: secureEnviroment.ANGULAR_APP_PROJECT_ID,
    storageBucket: secureEnviroment.ANGULAR_APP_STORAGE_BUCKET,
    messagingSenderId: secureEnviroment.ANGULAR_APP_MESSAGING_SENDER_ID,
    appId: secureEnviroment.ANGULAR_APP_APP_ID,
    measurementId: secureEnviroment.ANGULAR_APP_MEASUREMENT_ID
  }
};
