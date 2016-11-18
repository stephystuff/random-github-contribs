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
      .then(function handleSuccess(data){
        console.log(data, 'hey');

      var randomRepo = data.items[Math.ceil(Math.random()*29)];
      console.log(randomRepo);
      var url = randomRepo.commits_url;

      });
  }

  function getCommits(){
    $.ajax({
      url: 'https://api.github.com/repos/:username/:reponame/commits',
      method:'GET',
      dataType: 'json',
      headers: {}
    });
  }




}());
