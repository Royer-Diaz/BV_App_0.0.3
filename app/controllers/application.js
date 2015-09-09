import Ember from 'ember';

var ref = new Firebase("https://testing-bv-env.firebaseio.com");

export default Ember.Controller.extend({
	actions: {
		logoutUser: function(){
			ref.unauth();
			localStorage.clear();
			console.log("Logged Out");
				this.transitionToRoute('logout');
		}
	}
});
