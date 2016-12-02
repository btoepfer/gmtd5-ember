import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  status: DS.attr("number"),
  dueDate: DS.attr("date")
});
