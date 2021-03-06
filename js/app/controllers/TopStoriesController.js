var POSTS_PER_PAGE = 30;

function TopStoriesController(posts) {
  var ctrl = this;

  ctrl.page = 0;
  ctrl.totalPosts = posts.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / POSTS_PER_PAGE);

  ctrl.nextPage = function () {
    ctrl.page++;
    ctrl.posts = posts.data.slice(ctrl.page * POSTS_PER_PAGE, (ctrl.page + 1) * POSTS_PER_PAGE);
  };

  ctrl.previousPage = function () {
    ctrl.page--;
    ctrl.posts = posts.data.slice(ctrl.page * POSTS_PER_PAGE, (ctrl.page + 1) * POSTS_PER_PAGE);
  };

  ctrl.posts = posts.data.slice(ctrl.page * POSTS_PER_PAGE, (ctrl.page + 1) * POSTS_PER_PAGE);
}
 
angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);