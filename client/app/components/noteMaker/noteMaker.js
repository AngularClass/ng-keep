import angular from 'angular';
import {noteMakerComponent} from './noteMaker.component';

let noteMaker = angular.module('noteMaker', [])
  .directive('noteMaker', noteMakerComponent);

export {noteMaker};
