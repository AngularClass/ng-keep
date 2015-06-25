import 'normalize.css';
import './app.styl';
import angular from 'angular';
// we need to import
// other angular modules and
// register them them
angular.module('app', [
  // module dependencies here
  // modules have name properties
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
