// store.ts

import { createStore } from 'redux';

// Define the initial state and reducer
interface RootState {
    isPortuguese: boolean;
}

const initialState: RootState = {
    isPortuguese: true,
};

export const toggleLanguage = () => ({ type: 'TOGGLE_LANGUAGE' });

type Action = { type: 'TOGGLE_LANGUAGE' };

const reducer = (state: RootState = initialState, action: Action): RootState => {
    switch (action.type) {
        case 'TOGGLE_LANGUAGE':
            return { ...state, isPortuguese: !state.isPortuguese };
        default:
            return state;
    }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
