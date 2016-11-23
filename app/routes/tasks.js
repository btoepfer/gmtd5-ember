import Ember from 'ember';

let tasks = [{
  id: 7,
  status: 0,
  name: "Lorem ipsum dolor 1",
  content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
  id: 8,
  status: 0,
  name: "Lorem ipsum 2",
  content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
  id: 9,
  status: 1,
  name: "Lorem 3",
  content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

export default Ember.Route.extend({
  model() {
    return tasks;
  }
});
