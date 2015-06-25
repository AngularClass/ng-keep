import './noteList.styl';
import template from './noteList.html';
import {NoteListController as controller} from './noteList.controller';

let noteListComponent = ()=> {
  return {
    controller,
    template,
    restrict: 'E',
    replace: true,
    controllerAs: 'vm'
  };
};

export {noteListComponent};
