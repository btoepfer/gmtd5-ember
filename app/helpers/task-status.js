import Ember from 'ember';

export function taskStatus() {
  console.log(this.status);
  if (this.status === 0) {
    return true;
  }
  else {
    return false;
  }
}

export default Ember.Helper.helper(taskStatus);
