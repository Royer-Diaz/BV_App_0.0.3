import Ember from "ember";

var ref = new Firebase("https://testing-bv-env.firebaseio.com");

var NewCommentController = {
  // needs: ['post'],
  actions: {
    // save: function() {
      // var newComment = this.store.createRecord('comment', {
      //   text: this.get('text'),
      //   user: this.get('user')
      // });
      // newComment.save();
      //
      // var post = this.get('controllers.post.model');
      // post.get('comments').pushObject(newComment);
      // post.save();
      //
      // this.transitionToRoute('post', post.id);
    save: function() {
      var comment = this.get('model');
      comment.save();

      var controller = this;
      comment.get('post').then(function(post) {
        post.save();
        controller.transitionToRoute('post', post.id);
      });
    }
  }
};

export default Ember.ObjectController.extend(NewCommentController);
