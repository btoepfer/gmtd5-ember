import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  status: DS.attr("number"),
  dueDate: DS.attr("date"),
  statusIcon: Ember.computed('status', function() {
    let icon_status;
    switch (this.get('status')) {
    case 0:
      icon_status = "square-o";
      break;
    case 1:
      icon_status = "pencil-square-o";
      break;
    case 2:
      icon_status = "check-square-o";
      break;
    default:
      icon_status = "";
    }
    return icon_status;
  }),
  statusTodo: Ember.computed('status', function() {
    return (this.get('status') === 0);
  }),
  statusWorking: Ember.computed('status', function() {
    return (this.get('status') === 1);
  }),
  statusDone: Ember.computed('status', function() {
    return (this.get('status') === 2);
  })
});
