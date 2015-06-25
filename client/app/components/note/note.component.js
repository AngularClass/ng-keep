import './note.styl';
import template from './note.html';
import {NoteController as controller} from './note.controller';

let noteComponent = () => {
  return {
    controller,
    template,
    restrict: 'E',
    replace: true,
    controllerAs: 'vm',
    bindToController: true,
    scope: {noteData: '='}
  };
};

export {noteComponent};
