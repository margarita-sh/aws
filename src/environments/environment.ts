// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Config } from './config.interface';

export const environment: Config = {
  production: false,
  apiEndpoints: {
    product: 'https://hlmn5evit3.execute-api.us-east-1.amazonaws.com',
    order: 'https://hlmn5evit3.execute-api.us-east-1.amazonaws.com',
    import: 'https://gkjne8ir61.execute-api.us-east-1.amazonaws.com',
    bff: 'https://hlmn5evit3.execute-api.us-east-1.amazonaws.com',
    cart: 'https://hlmn5evit3.execute-api.us-east-1.amazonaws.com',
  },
  apiEndpointsEnabled: {
    product: true,
    order: true,
    import: true,
    bff: true,
    cart: true,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
