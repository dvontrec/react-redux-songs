import React, { Component } from 'React';
import { connect } from 'react-redux';
// import the select song action
import { selectSong } from '../actions';

class SongList extends Component {
  // helper function to render each song from the props
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="ui right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// function used to pass global state (from redux store(reducers)) as props
const mapStateToProps = state => {
  //  sets the props to be the object returned
  return { songs: state.songs };
};

// runs map state to props and returns the song list
export default connect(
  mapStateToProps,
  // passing action to connect automatically passes it to dispatch
  { selectSong }
)(SongList);
