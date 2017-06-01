import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends React.Component {
    render() {
        return (
            <View />
        );
    }
}

const mapStateToProps = (state) => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
