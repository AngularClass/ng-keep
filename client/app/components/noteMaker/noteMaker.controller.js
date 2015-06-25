const defaultContent = 'nothing';

class NoteMakerController {
  // inject things here
  constructor(Notes) {
    this.newNote = '';
    this.Notes = Notes;
  }

  createNote(content = defaultContent) {
    console.log('add')
    // will use this later
    this.Notes.addNote(content);
    this.newNote = '';
  }
}

NoteMakerController.$inject = ['Notes'];

export {NoteMakerController};
