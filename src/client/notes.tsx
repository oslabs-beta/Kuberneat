/* 

Mon, Wed (lectures) ---> Tues: only full day of coding ---> Thurs @ 2:30pm MVP
----- for POST-MVP:
1. integrate more Typescript throughout codebase: this is the same thing as inplementing testing
2. LineChart.TSX ---> orient propery on axis- causing component to break...? why??  
3. play around with design and color schemes and Nivo charts/inputs 
4. Electron, IPC, iFrames ---> embedding grafana charts with iFrames
---> interface for Command Line ---> ie) Kubectl interface, KubeSpy interface
5. React Query migration
6. Github OAuth with server + DB, Facebook OAuth, our own OAuth

A. view clusters and zoom in pod details
B. Custom charts
C. integrated interface for CLI



----- Sat 11/26: 
1. implement RTL + Jest ---> at least 3 tests for frontend initially : all tests failing so far...
2. start looking into React O-Auth/ Google - add users... need a database for Github OAuth: Google OAuth doable now...
----- Sun 11/27:
2. Add Google OAuth with login page: need Context API? done
*/

// short cut for boilerplate: typescript react function component export -> tsrfce
/* 
--> tsc command will run the JS compiler
strong-typed
compiler catches bugs in advance, before production
valid JS is valid in TS
npm i -g typescript
$ tsc index.ts -> index.js

interface Person {
    firstL string;
    last: string;
    [key: string]: any
}

const person2: Person {
    first: 'Ed';
    last: 'Cho';
    fast: true;
}

function pow(x: number, y: number): string {
    return Math.pow(x, y).toString()
}

function pow(x: number, y: number): void { <--- void if doesn't return anything like event listeneres or side effects
    
    Math.pow(x, y).toString()
}

const arr: number[] = []
const arr: Person[] = [] --> array of objs from the DB, using Person interface

Tuple: defined array with length and types

type MyList = [number?, string?, boolean]
const arr: MyList = []

arr.push(1)
arr.push('23')
arr.push(false)

11/27: adding Google Identity Services aka 2022 React OAuth with Google Login
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

---> $npm install jwt-decode


*/

/* some of the BUGS FIXED: 11/25 pm
1. SRC/INDEX.TSX ---> can't read imported CSS file  Fixed
2. SIDEBAR.TSX ---> can't load import 'react-pro-sidebar/dist/css/styles.css'; Fixed
4. APP.TSX ---> Sidebar and Topbar component attributes cause errors but why?? <leaving out for now>
5. alignment of main landing page is off, currently sidebar and main page are stacked, should be side by side. Fixed
*/

/*  production level, enterprise level

---> react query installled, better than fetch, context, redux?

---> MUI, Nivo charts, Formik (TESTING: form validation included in our codebase), Yup, FullCalendar, Data Grid

---> React Pro Sidebar

---> added tsc to 'scripts' in package.json

---> tsconfig.json --> how we configure the compiler --- added "rootDir": "src" (tells the compiler where our source code is)
---> removed for now bc of errrors
--> add build folder to gitignore??? bc Generally, you don’t want to keep the generated javascript in your source control....

---> DefinitelyTyped is a huge repository of declarations for libraries that don’t bundle a declaration file. 
The declarations are crowd-sourced and managed by Microsoft and open source contributors. React for example doesn’t bundle its own declaration file. 
Instead we can get it from DefinitelyTyped. To do so enter this command in your terminal.

so ran...
npm i --save-dev @types/react

alot of syntax errors caused some bugs
had to uninstall and install several things to resolve issues
importing React from 'react' solved sveral component issues
had to correct syntax for some bugs... ie) backgroundColor -> bgcolor, colors -> color, etc...
generally, creating interfaces and setting types to any or any[] have resolved TS issues for now
should go back over codebase later and implement best practices

--> installed style, css, sass loaders

11/25:
---> installed fullcalendar/react 
---> installed fullcalendar/react

--> uninstalled sass, reinstalled sass
npm i sass --save-dev
and this, sudo npm install --save-dev  --unsafe-perm node-sass
npm install --save-dev @types/node-sass
uninstalled node-sass again and reinstalled previous version (6.0) restarted vs code. Error went away. 

--> npm i @nivo/geo

11/26:
---> npm install --save-dev @testing-library/react
---> npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer

package.json ---> "test": "echo \"Error: no test specified\" && exit 1", 
changed it: ---> "test": "jest"

*/


/* 
1. unit tests: test components in isolation
2. Integration Tests: test interaction between components
3. E2E: testing start to end process, simulate user flow (Cypress, Puppeteer)
*/

/* 
Test Block Structure:
1. Render a component we want to test
2. Find elements we want to interact with
3. interact with those elements
4. Assert that the results are as expected

--- code examples ---

import { render, screen } from '@testing-library/react';
// we import render and screen from...
import App from './App'; // app we are testing gets imported in


// this is the first test you get with create react app as DEFAULT

test('renders learn react link', () => { // what we are testing
// 1st render the component we want to test
  render(<App />);
// finding elements we want to interact with
  const linkElement = screen.getByText(/learn react/i);
// use screen to interact with it
// looks at the DOM and then uses methods to get a linkElement with 'learn react'
  expect(linkElement).toBeInTheDocument();// expect the linkEle to be in the document
  //Assertion that the results are as expected
// ---> this test will fail bc the text 'learn react' is no where in the app
});

// can use it or test -> interchangeable

// it('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

/* import { render, screen } from '@testing-library/react';
import Sidebar from '../Sidebar' */
/* 
test('renders learn react link', () => { // what we are testing
    // 1st render the component we want to test
      render(<App />);
    // finding elements we want to interact with
      const linkElement = screen.getByText(/learn react/i);// screen is a way to interact with the component
    // use screen to interact with it via its methods
    // looks at the DOM and then uses methods to get a linkElement with 'learn react'
      expect(linkElement).toBeInTheDocument();// expect the linkEle to be in the document
      //Assertion that the results are as expected
    // ---> this test will fail bc the text 'learn react' is no where in the app
    }); */

    /* 
    it and test are interchangeable

    can use DESCRIBE BLOCKS to nest mulitple tests that are similar ie) all are for a component and just that component

    describe("Component A",() => {
      <add your tests here, group your common tests here>
    })
    */

/*     describe("Sidebar component testing", () => {


      it('should render same text passed', async () => {
        render(<Sidebar title="My Header"/>);
        const component = screen.getByTestId("the-sidebar");
        expect(component).toBeInTheDocument();
      });



    }); */