import { reducer } from './reducer';
import Storage, { PersistanceKeys } from '../utils/storage';
import { Actions, AppState, Observer, Screens } from '../types/types';

const emptyState: AppState = {
	screen: Screens.LOGIN,
	posts: [],
	profile: [], // Agrega `profile` como arreglo vacío si se inicializa vacío
};

// 1. Crear el estado global appState: es un objeto con propiedades, estado actual: inicia en pantalla de landing
export let appState = Storage.get<AppState>({
	key: PersistanceKeys.STORE,
	defaultValue: emptyState,
});

let observers: Observer[] = []; //arreglo de observadores

const persistStore = (state: AppState) => Storage.set({ key: PersistanceKeys.STORE, value: state });
const notifyObservers = () => observers.forEach((o) => o.render());

// 2. Crear dispatch: método para lanzar las acciones
// Se clona el estado global, luego con el reducer se da cuenta qué acción estoy lanzando
export const dispatch = (action: Actions) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;

	persistStore(newState);
	notifyObservers();
};

//3. agregar observadores para los interesados (las screens o los componentes) le notifica a observadores que cambió el store
export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};
