import 'normalize.css';
import './app.styl';
import angular from 'angular';
import {noteMaker} from './components/noteMaker/noteMaker';

angular.module('app', [
  noteMaker.name
])
.directive('app', ()=> {
  return {
    restrict: 'E',
    replace: true,
    template: `
      <div>
        <note-maker></note-maker>
      </div>
    `
  }
})
