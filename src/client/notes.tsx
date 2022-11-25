// short cut for boilerplate: type -> tsrfce
import React from 'react'

type Props = {}

export default function notes({}: Props) {
  return (
    <div>notes</div>
  )
}


/*  
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
importing React from 'react' solved sveral compnent issues
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
*/