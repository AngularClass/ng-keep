const defaultContent = 'nothing';

class NoteMakerController {
  // inject things here
  constructor() {
    this.newNote = '';
  }

  createNote(content = defaultContent) {
    // will use this later
    alert('new note!', content);
    this.newNote = '';
  }
}

NoteMakerController.$inject = [];

export {NoteMakerController};
