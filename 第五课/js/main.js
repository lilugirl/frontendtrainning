require.config({
  paths: {
    "jquery": "lib/jquery",
    "underscore": "lib/underscore",
    "backbone": "lib/backbone",
    "math": "lib/math"

  },
  shim: {

    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
　　});

require(['jquery', 'underscore', 'backbone', 'math'], function ($, _, Backbone, math) {
  // some code here
  console.log($);
  console.log(_);
  console.log(Backbone);
  console.log("加载成功！");
  $('.mydiv').html('被修改了');
  alert(math.add(1, 2));
  math.foo();
});




