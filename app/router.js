import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authenticated');
  this.route('signup');
  this.route('login');
  this.route('logout');
  this.route('email');
  this.route('create');
  this.route('messages');
  this.route('secret');
  this.route('password');
  this.route('emailreset');
  this.route('home');
  this.route('my-profile');
  this.resource('library', function(){
     this.resource('display-lib');
  });
  this.route('tracks');
  this.route('about');
  this.route('contact');
  this.resource('posts', function() {
     this.resource('new-post', { path: '/new-post'});
  });
  this.resource('post', { path: '/:post_id' }, function() {
     this.resource('new-comment');
  });

  this.route('support');
  this.route('profile');
  this.route('settings');
});

export default Router;
