Meteor.publish('posts', function() {
    return Posts.find();

});

Meteor.publish('details', function() {
    return Details.find();
});