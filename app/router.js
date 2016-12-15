import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tasks');
  this.route('about');
  this.route('terms');
  this.route('projects');
  this.route('notes');

  this.route('task', function() {
    this.route('new');
  });

  this.route('project', function() {
    this.route('new');
    this.route('show', { path: '/:id' });
    this.route('edit', { path: '/:project_id' });
  });
  
});

export default Router;
