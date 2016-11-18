(function() {
  'use strict';

  window.ns = window.ns || {};


  $('#search')
      .on('submit', function getAuthorization(event){
        console.log('it works');
        event.preventDefault();

        var myToken = $('.api').val();
        console.log(myToken);
        var query = $('.search').val();
        console.log(query);
        window.ns.searchRepos(myToken, query);
      });



}());
