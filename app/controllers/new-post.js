import Ember from "ember";

var ref = new Firebase("https://testing-bv-env.firebaseio.com");

var NewPostController = {
  actions: {
    submit: function() {
      var newAuthor = this.store.createRecord('author', {
        name: this.get('author')
      });
      newAuthor.save();

      var newPost = this.store.createRecord('post', {
        author: newAuthor,
        img: this.get('img'),
        date: this.get('date'),
        title: this.get('title'),
        bodyIntro: this.get('bodyIntro'),
        bodyRest: this.get('bodyRest')
      });
      newPost.save();
      this.transitionToRoute('posts');
    }
  }
};

export default Ember.ObjectController.extend(NewPostController);
