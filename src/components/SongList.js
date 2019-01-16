import React, { Component } from 'React';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    console.log(this.props);
    return <div>Song List</div>;
  }
}

// function used to pass global state (from redux store(reducers)) as props
const mapStateToProps = state => {
  //  sets the props to be the object returned
  return { songs: state.songs };
};

// runs map state to props and returns the song list
export default connect(mapStateToProps)(SongList);
