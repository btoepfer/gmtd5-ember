import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      updateStatus(task, ops) {
        const status = ops.target.status;
        const currentStatus = task.get("status");
        if (status !== currentStatus) { 
          task.set("status",status);
          task.save();

          switch (parseInt(status)) {
          case 0:
            task.set("statusTodo", true);
            task.set("statusWorking", false);
            task.set("statusDone", false);
            task.set("statusIcon","square-o");
            break;
          case 1:
            task.set("statusTodo", false);
            task.set("statusWorking", true);
            task.set("statusDone", false);
            task.set("statusIcon","pencil-square-o");
            break;
          case 2:
            task.set("statusTodo", false);
            task.set("statusWorking", false);
            task.set("statusDone", true);
            task.set("statusIcon","check-square-o");
            break;
          }
        }
      },
      showTarget() {
        //$(".draggable-object-target").toggleClass("active");
        console.log("showTarget");
      },
      hideTarget() {
        //$(".draggable-object-target").toggleClass("active");
        console.log("hideTarget");
      }
    }
});
