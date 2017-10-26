/**
 * es6
 */
import Rx from 'rxjs/Rx';
import {Obervable} from 'rxjs/Obervable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
Rx.Observable.of(1,2,3).map(x => x +'!!!');
/**
 * commonJS
 */

var Observable = require('rxjs/Obervable').Observable;
require('rxjs/add/obervable/of');
require('rxjs/add/operator/map');

Observable.of(1,2,3).map(function(x){
    "use strict";
    return x + '!!!';
});

var of = require('rxjs/observable/of').of;
var map = require('rxjs/operator/map').map;

map.call(of(1,2,3),function(x){
    "use strict";
    return x + '!!!';
});