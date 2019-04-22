// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBpmKjOSNS29I59L8Gg2dZw6GqUs6S2vfY",
    authDomain: "messyfrase.firebaseapp.com",
    databaseURL: "https://messyfrase.firebaseio.com",
    projectId: "messyfrase",
    storageBucket: "messyfrase.appspot.com",
    messagingSenderId: "883698255629"
  }
};
