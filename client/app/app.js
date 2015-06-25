import 'normalize.css';
import './app.styl';
import angular from 'angular';
import {noteMaker} from './components/noteMaker/noteMaker';
import {common} from './common/common';

angular.module('app', [
  noteMaker.name,
  common.name
])
.directive('app', ()=> {
  return {
    restrict: 'E',
    replace: true,
    template: `
      <div>
        <note-maker></note-maker>
        <note-list></note-list>
      </div>
    `
  }
})
