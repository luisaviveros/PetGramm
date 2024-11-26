import { Actions, AppState, NavigationActions, PostActions } from '../types/types';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	const { action, payload } = currentAction;

	switch (action) {
		case NavigationActions.NAVIGATE:
			return {
				...currentState,
				screen: payload,
			};

		case PostActions.ADD_POST:
			return {
				...currentState,
				posts: [...currentState.posts, payload], // Agrega una nueva publicación
			};

		case PostActions.DELETE_POST:
			return {
				...currentState,
				posts: currentState.posts.filter((post) => post.id !== payload.id), // Elimina una publicación por ID
			};

		case PostActions.UPDATE_POST:
			return {
				...currentState,
				posts: currentState.posts.map((post) => post.id === payload.id ? payload : post), // Actualiza una publicación por ID
			};

		default:
			return currentState;
	}
};
