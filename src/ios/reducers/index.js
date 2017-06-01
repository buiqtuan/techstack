import { combineReducers } from 'redux';
import LibraryReducer from './libraryreducer';

export default combineReducers({
	libraries: LibraryReducer
});

