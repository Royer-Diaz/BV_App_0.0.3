import Ember from 'ember';

var ref = new Firebase("https://testing-bv-env.firebaseio.com");

export default Ember.Controller.extend({
	actions: {
		passwordReset: function(){
		var _this = this;
		ref.changePassword({
  		email: this.get('userEmail'),
  		oldPassword: this.get('oldPassword'),
  		newPassword: this.get('newPassword')
}, function(error) {
  if (error === null) {
    console.log("Password changed successfully");
    _this.transitionToRoute('secret');
  } else {
  	_this.set('error', error);
    console.log("Error changing password:", error);
  }
});
		}
	}
});
