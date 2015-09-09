import Ember from 'ember';
import AunthenticatedRoute from './authenticated';

var ref = new Firebase("https://testing-bv-env.firebaseio.com");


var PostsRoute = AunthenticatedRoute.extend({
	model: function() {
    return this.store.findAll('post');
  }
});

export default PostsRoute;