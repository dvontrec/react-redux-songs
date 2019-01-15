// Creates an action called select song
export const selectSong = song => {
  // return an action
  return {
    // Must have a type
    type: 'SONG_SELECTED',
    payload: song
  };
};
