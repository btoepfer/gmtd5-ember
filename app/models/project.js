import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title:       DS.attr("string"),
  description: DS.attr("string"),
  
  abbrDesc: Ember.computed('description', function() {
      const d = this.get('description');
      if (d) {
        return `${d.substring(0, 20)}...`;
      } else {
        return '';
      }
    })
});
