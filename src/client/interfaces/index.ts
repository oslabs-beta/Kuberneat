export interface AppProps {
	darkModeOn?: boolean;
	toggleDarkMode?: React.FC;
	setUser?: React.FC;
	user?: string | null;
	handleCallbackResponse?: React.FC;
}