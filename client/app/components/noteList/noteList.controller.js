class NoteListController {
  constructor(Notes) {
    this.Notes = Notes;
    this.notes = Notes.getNotes();
  }
}

NoteListController.$inject = ['Notes'];

export {NoteListController};
