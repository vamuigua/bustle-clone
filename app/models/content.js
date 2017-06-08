import DS from 'ember-data';

export default DS.Model.extend({
  headlines: DS.attr(),
  author: DS.attr(),
  image: DS.attr()
});
