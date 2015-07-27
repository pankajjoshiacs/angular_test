var app = angular.module('pankaj-app', []);

//function Profile($scope) {
app.controller('Profile', function($scope) {
	$scope.message = '';
	minlength = 10;

	getMessageLength = function() {
		return $scope.message.length;
	};

	$scope.getMessageMinLength = function() {
		return minlength - getMessageLength();
	};

	$scope.checkEmail = function() {
		email = $scope.email;
		if (email.length < 1 ) {
			return "Email address is required.";
		}

		emailRegEx = /\S+@\S.\S+/;
		if (emailRegEx.test(email)) {
			return "OK";
		}
		else {
			return "Invalid email address";
		}
	};

	$scope.checkPassword = function() {
		strength = new Array();
		strength[0] = "Very Weak";
		strength[1] = "Weak";
		strength[2] = "Better";
		strength[3] = "Medium";
		strength[4] = "Strong";
		strength[5] = "Strongest";

		score = 0;
		password = $scope.password;

		if (password.length > 6 ) {
			score++;
		}

		if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
			score++;
		}

		if (password.match(/\d+/)) {
			score++;
		}

		if (password.match(/.[!,@,#,$,%,^,&,*,(,),?,_,~,-]/)) {
			score++;
		}

		if (password.length > 12 ){
			score++;
		}

		return strength[score];

	};

	$scope.altemail = 'pankaj.joshi.acs@gmail.com';
});



app.controller('JsonDataCtrl', function($scope, $http) {
	$http.get("http://www.w3schools.com/angular/customers.php").success(function(res) {
		$scope.results = res.records; 
	});

	$scope.display = function() {
		$scope.showMe = true;
		$scope.isDisplay = false;
	};
	$scope.hide = function() {
		$scope.showMe = false;
		$scope.isDisplay = false;
	};
});

app.controller('testCtrl', function($scope) {

	$scope.clickedMe = function () {
		return alert('You clicked me?');
	}

	$scope.name = "Pankaj Joshi";
});