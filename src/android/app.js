import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LibraryList from './components/librarylist';
import reducers from './reducers';
import { Header } from './components/common';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View style={{ flex: 1 }}>
					<Header headerText='Tech Stack' />
					<LibraryList />
				</View>
			</Provider>
		);
	}
}
