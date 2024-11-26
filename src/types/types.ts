// export type AppState = {
// 	screen: string;
// };

export type Observer = { render: () => void } & HTMLElement;

//crear acción de navegar
// export enum Actions {
// 	'NAVIGATE' = 'NAVIGATE',
// }

//crear tipados de las pantallas
export enum Screens {
	'ADDPOST' = 'ADDPOST',
	'CREATEACCOUNT' = 'CREATEACCOUNT',
	'EDITPROFILE' = 'EDITPROFILE',
	'EDITPROFILEPICTURE' = 'EDITPROFILEPICTURE',
	'FEED' = 'FEED',
	'LANDING' = 'LANDING',
	'LOGIN' = 'LOGIN',
	'MYPOSTVIEW' = 'MYPOSTVIEW',
	'MYPROFILE' = 'MYPROFILE',
	'PROFILESETUP' = 'PROFILESETUP',
	'REGISTER' = 'REGISTER',
	'SINGLEPOST' = 'SINGLEPOST',
	'USERPROFILE' = 'USERPROFILE',
}
const get = <T>({ key, defaultValue }: { key: Screens; defaultValue: T }): T => {
	const value = localStorage.getItem(key) || sessionStorage.getItem(key);
	return value ? JSON.parse(value) : defaultValue;
};
const set = ({ key, value, session = false }: { key: Screens; value: unknown; session?: boolean }) => {
	const storage = session ? sessionStorage : localStorage;
	const parsed = JSON.stringify(value);
	storage.setItem(key, parsed);
};

export default {
	get,
	set,
};

export interface PostCardShape {
	id: string; // Asegúrate de tener un ID único para cada publicación
	profilePicture: string;
	postPicture: string;
	name: string;
	breed: string;
	caption: string;
}


export interface AppState {
    screen: Screens;
    posts: PostCardShape[];
    profile: User[]; // Asegúrate de que `profile` está definido como una lista de `User`
}

export enum NavigationActions {
	'NAVIGATE' = 'NAVIGATE',
}

export interface NavigateAction {
	action: NavigationActions.NAVIGATE;
	payload: Screens;
}

export enum PostActions {
	ADD_POST = 'ADD_POST',
	DELETE_POST = 'DELETE_POST',
	UPDATE_POST = 'UPDATE_POST',
}

export interface AddPostAction {
	action: PostActions.ADD_POST;
	payload: PostCardShape;
}

export interface DeletePostAction {
	action: PostActions.DELETE_POST;
	payload: { id: string };
}

export interface UpdatePostAction {
	action: PostActions.UPDATE_POST;
	payload: PostCardShape;
}

export type Actions = NavigateAction | AddPostAction | DeletePostAction | UpdatePostAction;

// types.ts
export interface PostCardElement extends HTMLElement {
	profilePicture: string;
	postPicture: string;
	name: string;
	breed: string;
	caption: string;
}

// types.ts
export interface User {
    profilePic: string;
    name: string;
}
