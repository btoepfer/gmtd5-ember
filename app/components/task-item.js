import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    changeStatus(task) {
      const currentStatus = task.get("status");
      if (currentStatus<2) {
        task.status= currentStatus+1;
      }
      else {
        task.status=0;
      }
      task.save();
    }
  }
});
