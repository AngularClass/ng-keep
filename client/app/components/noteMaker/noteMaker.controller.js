const defaultContent = 'nothing';

class NoteMakerController {
  // inject things here
  constructor(Notes) {
    this.newNote = '';
    this.Notes = Notes;
    console.log('loaded')
  }

  createNote(content) {
    console.log('add')
    // will use this later
    this.Notes.addNote(content);
    this.newNote = '';
  }

  getData(){
    return 'heyy'
  }
}

NoteMakerController.$inject = ['Notes'];

export {NoteMakerController};
