import { test } from 'qunit';
import moduleForAcceptance from 'gmtd5-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | tasks');

test('visiting /tasks', function(assert) {
  visit('/tasks');

  andThen(function() {
    assert.equal(currentURL(), '/tasks');
  });
});

test('should redirect to tasks', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/tasks', 'should redirect automatically');
  });
});

test('should link to information about the me.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should list all tasks', function (assert) {
  visit('/');
   andThen(function () {
     assert.equal(find('.task').length, 3, 'should see 3 tasks');
   });
});

test('should tasks grouped by status (0)', function (assert) {
  visit('/');
   andThen(function () {
     assert.equal(find('#status-0 > .task').length, 2, 'should see 2 open tasks');
   });
});

test('should tasks grouped by status (1)', function (assert) {
  visit('/');
   andThen(function () {
     assert.equal(find('#status-1 > .task').length, 1, 'should see 1 current tasks');
   });
});