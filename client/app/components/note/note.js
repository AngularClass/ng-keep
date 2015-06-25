import angular from 'angular';
import {noteComponent} from './note.component';

let note = angular.module('note', [])
  .directive('note', noteComponent)

export {note};
