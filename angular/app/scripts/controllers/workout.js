'use strict';

/**
 * @ngdoc function
 * @name theGymApp.controller:WorkoutCTRL
 * @description
 * # WorkoutCTRL
 * Controller of the theGymApp
 */
angular.module('theGymApp')
  .controller('WorkoutCTRL',function WorkoutCTRL($scope) {
	  
		$scope.sortableOptions = {
			disabled: false
		};
		
		$scope.removeSet = function(index,sets) {
			sets.splice(index,1);
		};
		
		$scope.addSet = function(exercise) {
			var set = 0;
			exercise.Sets.push(set);
		};
		
		$scope.addWorkout = function(workouts){
			var newWorkout =  {"Title": "",
			  "Description": "",
			  "Notes":"",
			  "minRestDays" : 1,
			  "isOptional": false,
			  "Exercises": []
			};
			workouts.push(newWorkout);
		};
		
		$scope.addExercise = function(workout){
			var newExercise = {
				  "Name": "",
				  "Sets": [],
				  "oneRepMax": 0,
				  "maxReps": 0,
				  "notes": ""
				};
			workout.Exercises.push(newExercise);
		}
		
		$scope.isEditMode=true;
		$scope.oneAtATime = true;
		
		$scope.workoutSortEditToggle = function() {
			$scope.sortableOptions.disabled = !$scope.sortableOptions.disabled;
		};
		
		$scope.workoutEditToggle = function() {
			$scope.workoutSortEditToggle();
			$scope.isEditMode = !$scope.isEditMode;
		};
		
		$scope.workoutData = {
		  "days": [{
			  "Title": "Chest and Back",
			  "Description": "Heavy Ass lifting",
			  "Notes":"Start of Week",
			  "minRestDays" : 1,
			  "isOptional": false,
			  "Exercises": [
				{
				  "Name": "Bench Press",
				  "Sets": [
					15,
					12,
					10
				  ],
				  "oneRepMax": 200,
				  "maxReps": 30,
				  "notes": "Lift as heavy as possible"
				},
				{
				  "Name": "Pull Up",
				  "Sets": [
					12,
					10,
					8
				  ],
				  "oneRepMax": 200,
				  "maxReps": 200,
				  "notes": "Lift as heavy as possible"
				},
				{
				  "Name": "Deadlift",
				  "Sets": [
					4,
					2,
					1
				  ],
				  "oneRepMax": 200,
				  "notes": "Lift as heavy as possible"
				}
			  ]
			},
			   {
			  "Title": "Arms and Tris",
			  "Description": "Heavy Ass lifting",
			  "Notes": "After a day of rest",
			  "minRestDays": 1,
			  "isOptional": false,
			  "Exercises": [
				{
				  "Name": "Barbell Curls",
				  "Sets": [
					15,
					12,
					10
				  ],
				  "oneRepMax": 200,
				  "maxReps": 30,
				  "notes": "Lift as heavy as possible"
				},
				{
				  "Name": "Chin Ups",
				  "Sets": [
					12,
					10,
					8
				  ],
				  "oneRepMax": 200,
				  "maxReps": 200,
				  "notes": "Lift as heavy as possible"
				},
				{
				  "Name": "Tricep pushdowns",
				  "Sets": [
					4,
					2,
					1
				  ],
				  "oneRepMax": 200,
				  "notes": "Lift as heavy as possible"
				}
			  ]
			},
			  {
			  "Title": "Yoga",
			  "Description": "Stretch your muscles jim!",
			  "Notes": "Optional",
			  "minRestDays": 0,
			  "isOptional": true,
			  "Exercises": [
				{
				  "Name": "Astanga Salutations",
				  "Sets": [
					15,
					12,
					10
				  ],
				  "oneRepMax": 200,
				  "maxReps": 30,
				  "notes": "Lift as heavy as possible"
				},
				{
				  "Name": "Downward Dog",
				  "Sets": [
					12,
					10,
					8
				  ],
				  "oneRepMax": 200,
				  "maxReps": 200,
				  "notes": "Lift as heavy as possible"
				},
				{
				  "Name": "Upward Dog",
				  "Sets": [
					4,
					2,
					1
				  ],
				  "oneRepMax": 200,
				  "notes": "Lift as heavy as possible"
				}
			  ]
			}
		  ]
		}
  });
