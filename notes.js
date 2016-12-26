console.log('Starting note.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
};

var getNote = (title) => {
  console.log("Getting note", title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

var getAll = () => {
  console.log('Getting all notes');
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
