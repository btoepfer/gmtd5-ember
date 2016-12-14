import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      create(project) {
        project.save();
      }
    }
});
