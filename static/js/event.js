//
// Copyright 2013 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//


// This is a sligthly modified version of Angular.js event list demo
// from https://angularjs.org/#add-some-control.
// It uses the resource plugin to talk to an App Engine JSON backend.
angular.module('event', ['ngResource'])
  .factory('Event', function($resource) {
    var Event = $resource('/events');
    return Event;
  })
  .controller('EventCtrl', function($scope, Event) {
    $scope.events = Event.query();

    $scope.addEvent = function() {
      var event = new Event();
      event.text = $scope.eventText;
      event.updating = true;
      event.done = false;
      event.$save();
      event.state = 'saving'
      $scope.events.push(event);
      $scope.eventText = '';
    };

    $scope.change = function(event) {
      event.$save();
      event.state = 'updating';
    }

    $scope.disabled = function(event) {
      return event.state !== undefined
    }

    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.events, function(event) {
        count += event.done ? 0 : 1;
      });
      return count;
    };

    $scope.archive = function() {
      Event.remove(function() {
        Event.query(function(events) {
          $scope.events = events;
        });
      });
    };
  });