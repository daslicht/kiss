postsSub = Meteor.subscribe('posts');
detailsSubs = Meteor.subscribe('details');


Deps.autorun(function() {


    //console.log('There are ' + Posts.find().count() + ' posts');
});

