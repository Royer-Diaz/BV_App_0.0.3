import DS from 'ember-data';

export default DS.Model.extend({
  post: DS.belongsTo('post', {async: true}),
  user: DS.attr('string'),
  text: DS.attr('string')
});
