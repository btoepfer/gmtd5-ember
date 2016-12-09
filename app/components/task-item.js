import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    changeStatus(task) {
      task.status=2
      task.save();
    }
  }
});
