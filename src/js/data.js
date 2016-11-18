(function() {
  'use strict';
  window.ns = window.ns || {};
  window.ns.searchRepos = searchRepos;
  console.log('this works');

  function searchRepos(myToken, query){
    // var myToken = $('.api').val();
    console.log('in here');
    return $.ajax({
        url: 'https://api.github.com/search/repositories?q=' + query,
        method: 'GET',
        dataType: 'json',
        headers: {
            Authorization: 'token ' + myToken
        }

      })
      .done(function handleSuccess(data){
        console.log(data, 'hey');
      })
      .fail(function handleFail(data, xhr){
        console.log(xhr, 'nope');
      });
  }

  function getCommits(){
    $.ajax({
      url: 'https://api.github.com/repos/imee12/Yorkiepoos/commits',
      method:'GET',
      dataType: 'json',
      headers:
    })
  }




}());
