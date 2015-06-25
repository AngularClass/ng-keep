import angular from 'angular';
import {noteListComponent} from './noteList.component';

let noteList = angular.module('noteList', [])
  .directive('noteList', noteListComponent)

export {noteList};
