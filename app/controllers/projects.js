import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete(project) {
      const self = this;
        function transitionToProjects() {
          self.transitionToRoute('projects');
        }

       function failure(reason) {
         console.log(reason);
        }
        
        if (confirm(`Möchten Sie dieses Projekt löschen?`)) {
          project.destroyRecord().then(transitionToProjects).catch(failure);
        } 
      }
    }
});
