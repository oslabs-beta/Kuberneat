import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

// Tailwind Shades vs code ext: cmd + k cmd + g
// gives you all the shades from 1 color

// 2 interfaces to type the returned obj of objs
export interface subColorObj {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}

export interface ColorObject {
    grey: subColorObj;
    primary: subColorObj;
    greenAccent: subColorObj;
    redAccent: subColorObj;
    blueAccent: subColorObj;
}


export const tokens = (mode: string ): ColorObject => ({
    ...( mode === 'dark' 
        ? {
            grey: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        primary: {
            100: "#d0d1d5",
            200: "#a1a4aa",
            300: "#727680",
            400: "#3F4E4F", // "#1F2A40" , 2C3333
            500: "#2C3639", // "#141b2b" , 2C3639, 3F4E4F
            600: "#101622",
            700: "#0c101a",
            800: "#080b11",
            900: "#040509"
        },
        greenAccent: {
            100: "#dbf5ee",
            200: "#b7ebde",
            300: "#94e2cd",
            400: "#22A39F",  // change here... 70d8bd
            500: "#22A39F",  // change here... 4cceac
            600: "#3da58a",
            700: "#2e7c67",
            800: "#1e5245",
            900: "#0f2922"
        },
        redAccent: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f" // manually chnage for button: 2c100f
        },
        blueAccent: {
            100: "#e1e2fe",
            200: "#c3c6fd",
            300: "#a4a9fc",
            400: "#868dfb",
            500: "#6870fa",
            600: "#535ac8",
            700: "#3e4396",
            800: "#2a2d64",
            900: "#151632"
        } 
    } :
        { // to invert -> go to control palette and choose Sort Line Descending
            // hold option down to select, or cmd+shift+down -> cmd+c, then cmd+shift+left arrow key -> cmd+v
            grey: {
                100: "#141414",
                200: "#292929",
                300: "#3d3d3d",
                400: "#525252",
                500: "#666666",
                600: "#858585",
                700: "#a3a3a3",
                800: "#c2c2c2",
                900: "#e0e0e0",
            },
            primary: {
                100: "#040509",
                200: "#080b11",
                300: "#0c101a",
                400: "#DCD7C9", // manually changed this color "#f2f0f0"
                500: "#141b2b",
                600: "#434955",
                700: "#727680",
                800: "#a1a4aa",
                900: "#d0d1d5",
            },
            greenAccent: {
                100: "#0f2922",
                200: "#1e5245",
                300: "#2e7c67",
                400: "#968C83", // change here... 3da58a
                500: "#968C83", // change here... 4cceac
                600: "#70d8bd",
                700: "#94e2cd",
                800: "#b7ebde",
                900: "#dbf5ee",
            },
            redAccent: {
                100: "#2c100f",
                200: "#58201e",
                300: "#832f2c",
                400: "#af3f3b",
                500: "#db4f4a",
                600: "#e2726e",
                700: "#e99592",
                800: "#f1b9b7",
                900: "#f8dcdb", // manually chnage for button: f8dcdb
            },
            blueAccent: {
                100: "#151632",
                200: "#2a2d64",
                300: "#3e4396",
                400: "#535ac8",
                500: "#6870fa",
                600: "#868dfb",
                700: "#a4a9fc",
                800: "#c3c6fd",
                900: "#e1e2fe",
            } 

        }
    )
})

// color design tokens


// mui theme settings

export interface colorsObj {
    dark?: string;
    main?: string;
    light?: string;
    default?: string;
}

export interface PaletteObject {
    mode: string;
    primary: object;
    secondary: object;
    neutral: object;
    background: object;
}

export interface hObject {
    fontFamily: string;
    fontSize: number;
}

export interface TypographyObject {
    fontFamily: string;
    fontSize: number;
    h1: hObject;
    h2: hObject;
    h3: hObject;
    h4: hObject;
    h5: hObject;
    h6: hObject;
}

export interface ThemeObject {
    palette: PaletteObject;
    typography: TypographyObject;
   
}


export const themeSettings = (mode: string): ThemeObject => {

    const colors = tokens(mode);

    return {

        palette: {
            mode: mode as PaletteMode,
            ...(mode === 'dark'
            ? {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.greenAccent[500], // colors.greenAccent[500], 22A39F
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background: {
                    default: colors.primary[500]
                }
            } : {
                primary: {
                    main: colors.primary[100],
                },
                secondary: {
                    main: colors.greenAccent[500], // colors.greenAccent[500], F7DAD9
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background: {
                    default: '#FFF5EA', // try changing this '#fcfcfc'
                },
            }),

        },

        typography: {

            fontFamily: ['Source Sans Pro', 'sans-serif'].join(","),
            fontSize: 12,

            h1: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(","),
                fontSize: 14,
            },
        },
    };
};

// React context for color mode

// this function gets imported in App and used to change the color mode throughout the entire app
export const ColorModeContext = createContext( { toggleColorMode: () => {} } );

// 
export const useMode = () => {

    const [mode, setMode] = useState('dark');// set state, mode has type inference of string, bc we passed string as a default value

    const colorMode = useMemo( // functionality of the dark/light mode

        () => ({
            toggleColorMode: () => 
                setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
        }),
    []);

    const themeArg: any = themeSettings(mode)// this gets passed in below

    const theme: any = useMemo(() => createTheme(themeArg), [mode]) // passing in the mode to themeSettings on line 193

    return [theme, colorMode]; // this is what is getting exported to files
}