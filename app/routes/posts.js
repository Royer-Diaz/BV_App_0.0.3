import Ember from 'ember';
import AunthenticatedRoute from './authenticated';

var PostsRoute = AunthenticatedRoute.extend({
	model: function() {
    return this.store.findAll('post');
  }
});

export default PostsRoute;