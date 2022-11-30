import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

import {ContextProvider} from './Context';
import './styles.css'


const container = document.getElementById('root') as HTMLElement;
let root = createRoot(container);

root.render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
);


/* 11/27: adding Google Identity Services aka 2022 React OAuth with Google Login
-> newer version, now makes login process simpler, 1 tap sign up, auto sign-in, in add to reg sign-in
go to ---> developers.google.com/identity/gsi/web for info
go to --> console.cloud.google.com/gettingstarted --> search for credentials under APIs & services
-> select Create Project, then name your project and proceed, 
-> select and go to OAuth consent screen -> select configure consent screen -> choose external for now and hit create
-> then just save and cont again, add test users, save & cont, then back to dashboard
-> got to credentials, then create credentials select OAuth client ID, then choose Web Application
-> then add all 4 URIs, make second ones the PORT you're actually testing on http://localhost:8080
-> name can be Web client (for now) then hit create and save Client ID and Client Secret

client id: 833474983530-c13t85njtalij2aqacd17slt6tr8te5j.apps.googleusercontent.com
client secret: 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

---> Now DONE with the google side of the setup
add following to your index.html in head tag, under title: 

<script src="https://accounts.google.com/gsi/client" async defer></script>

provided by google, to load and make it do it faster with async and defer

Build and test of login with React OAuth Google Login
---> started building the Context.js file and Login page, started with JS

---> $npm install jwt-decode */

