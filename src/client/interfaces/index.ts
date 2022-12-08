export interface AppProps {
	darkModeOn?: boolean;
	toggleDarkMode?: React.FC;
	setUser?: React.FC;
	user?: any | null; // can't find type to use
	handleCallbackResponse?: React.FC;
};

export interface HeaderProps {
    title: string;
    subtitle: string;
};

export interface valProps {
	values: any;
	errors: any;
	touched: any;
	isSubmitting: any;
	handleBlur: any;
	handleChange: any;
	handleSubmit: any; 
};

export interface InitVals {
	email: string;
	password: string;
	confirmPassword: string;
};

export interface FormProps {
	initialValues?: InitVals;
	validationSchema?: any;
	onSubmit?: any;
};

export interface LoginProps {
    onClick: () => void;
};