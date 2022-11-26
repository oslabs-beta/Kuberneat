// short cut for boilerplate: type -> tsrfce
import React from 'react'

type Props = {}

export default function notes({}: Props) {
  return (
    <div>notes</div>
  )
}

/* 
1. fix that last bug   
2. integrate more Typescript into codebase
3. implement RTL + Jest - at least 3 tests for frontend
4. start looking into Oauth - users...
5. 
*/


/* 
BUGS TO FIX: 11/25

3. LINECHART>TSX ---> orient propery on axis- causing component to break...? why?? 

Top 5 BUGS FIXED: 11/25 pm
1. SRC/INDEX.TSX ---> can't read imported CSS file  Fixed
2. SIDEBAR.TSX ---> can't load import 'react-pro-sidebar/dist/css/styles.css'; Fixed
4. APP.TSX ---> Sidebar and Topbar component attributes cause errors but why?? <leaving out for now>
5. alignment of main landing page is off, currently sidebar and main page are stacked, should be side by side. Fixed

*/

/*  production level, enterprise level

---> react query installled, better than fetch, context, redux?

---> MUI, Nivo charts, Formik, Yup, FullCalendar, Data Grid

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
*/