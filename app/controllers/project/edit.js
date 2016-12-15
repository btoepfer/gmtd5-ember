import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(project) {
      const self = this;
        function transitionToProjects() {
          self.transitionToRoute('projects');
        }

       function failure(reason) {
         console.log(reason);
        }
        project.save().then(transitionToProjects).catch(failure);
      }
    }
});
