define([
'jquery',
'underscore',
'backbone',
/*'UserListView',*/
//'ViewsProjectList',
'views/users/list',
'views/projects/list',
'collections/project'
//'TestListView'
//], function($, _, Backbone, UserListView, TestListView ){
], function($, _, Backbone, UserListView, ProjectListView){
//console.log(typeof($) + ', ' + typeof(_) + ', ' + typeof(Backbone) + ' => ' + typeof(UserListView));

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      'users/:id': 'showUsers',

      // Default
      '*actions': 'defaultAction'
    },
    showProjects: function() {
      console.log('llegaaaag3');
    }
  });

  var initialize = function(){
    try{
    var app_router = new AppRouter;
      // As above, call render on our loaded module
      // 'views/users/list'

     app_router.on('route:showProjects', function(){

        // Call render on the module we loaded in via the dependency array
        // 'views/projects/list'
        var projectListView = new ProjectListView();
        projectListView.render();      
      });

      app_router.on('route:showUsers', function(){
        var userListView = new UserListView();
        userListView.render();
      });
      app_router.on('route:defaultAction', function(actions){
        // We have no matching route, lets just log what the URL was
        console.log('No route:', actions);
      });
      Backbone.history.start();

  }catch(e){alert(e);}
  };

  return {
    initialize: initialize
  };
  
});
