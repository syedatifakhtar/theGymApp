'use strict';

   
describe("WorkoutCTRL", function() {
	
 beforeEach(module('theGymApp'));	
 var $controller;
 var $scope;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
	$scope = {};
	$controller = $controller('WorkoutCTRL', { $scope: $scope });
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
		};
  }));
  
  
  describe("Add/Remove workouts,sets and exercises",function(){
	it("It adds a set to the exercise in a workout", function() {
		$scope.addSet($scope.workoutData.days[0].Exercises[0]);
		console.log($scope.workoutData);
		expect($scope.workoutData.days[0].Exercises[0].Sets[3]).toBe(0);
	});
	it("It removes a set from the exercise", function() {
		var numberOfSets = $scope.workoutData.days[0].Exercises[0].Sets.length;
		$scope.removeSet(0,$scope.workoutData.days[0].Exercises[0].Sets);
		console.log(numberOfSets);
		expect($scope.workoutData.days[0].Exercises[0].Sets.length).toBe(numberOfSets - 1);
	});
	it("It adds an empty exercise object to the Workout", function() {
		var numberOfExercises = $scope.workoutData.days[0].Exercises.length;
		$scope.addExercise($scope.workoutData.days[0]);
		console.log($scope.workoutData);
		expect($scope.workoutData.days[0].Exercises.length).toBe(numberOfExercises + 1);
	});
	it("It adds an empty workout", function() {
		console.log($scope.workoutData);
		var numberOfWorkouts = $scope.workoutData.days.length;
		$scope.addWorkout($scope.workoutData.days);
		expect($scope.workoutData.days.length).toBe(numberOfWorkouts + 1);
	});
  });
});
