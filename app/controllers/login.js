import Ember from 'ember';

var ref = new Firebase("https://testing-bv-env.firebaseio.com");


export default Ember.Controller.extend({

reset: function() {
    this.setProperties({
      userEmail: "",
      userPassword: "",
      error: ""
    });
  },

  token: localStorage.token,
  tokenChanged: function() {
    localStorage.token = this.get('token');
  }.observes('token'),

	actions: {
	loginUser: function(){
		var _this = this;
		ref.authWithPassword({
			email: this.get('userEmail'),
			password: this.get('userPassword')
		}, function(error, authData, email) {
	  if (error === null) {
	    console.log("User Logged in.");
	    _this.set('token', authData.token);
	    console.log(_this.get('userEmail'));
	   $('#userTagName').html(_this.get('userEmail'));
	} else {		
	    console.log(error);
	    _this.set('error', error);
	}

	   var attemptedTransition = _this.get('attemptedTransition');
        if (attemptedTransition) {
          attemptedTransition.retry();
          _this.set('attemptedTransition', null);
          console.log(attemptedTransition);
          
	  } else {
	  	_this.transitionToRoute('home');
	  }
		});
	}
}
});

var isNewUser = true;

ref.onAuth(function(authData) {
  if (authData && isNewUser) {
    ref.child('users').child(authData.uid).set(authData);
  }
});
