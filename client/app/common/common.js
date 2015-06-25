import angular from 'angular';
import {Notes} from './notes';

let common = angular.module('common', [])
  .factory('Notes', Notes);

export {common};
