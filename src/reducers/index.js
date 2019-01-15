import { combineReducers } from 'redux';

// Static song list reducer
const songsReducer = () => {
  return [
    { title: '123 Ewing DR ', duration: '2:35' },
    { title: 'We find love', duration: '4:15' },
    { title: 'Thats how you feel', duration: '3:30' },
    { title: 'Soothsayer', duration: '7:30' }
  ];
};

// selected song reducer that takes a song and an action
const selectedSongReducer = (selectedSong = null, action) => {
  // if action type is song selected
  if (action.type === 'SONG_SELECTED') {
    // return the payload (the new selected song)
    return action.payload;
  }
  //  if not return the already selected song
  return selectedSong;
};

// combines all reducers and exports them for use in the app
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
