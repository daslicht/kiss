Meteor.Router.add(
{

    '/': {to: 'masterDetail', as: 'home'},


    '/submit': 'postSubmit',


    '/blog/:_postId/:_page': {

		to: 'masterDetail',
        as: 'blog',
		and: function(postId,page) 
		{ 
			Session.set('currentPost',
                {	'postId':postId,
                    'page':page
            }); 
		}
	},


    '/blog': { 
        to:'masterDetail',
        and: function(){
            if(postsSub.ready()){
                 var mostRecentPost = Posts.findOne({}, { sort: { date: -1 }});
                 var options ={
                    '_postId': mostRecentPost._id,
                    '_page': 1
                 };
                Meteor.Router.to(Meteor.Router.blogPath(options));
            }
        }
    }

    	
    	
    	
	

    /*,

    '/posts/:_id': {
        to: 'postPage',
        and: function(id) { Session.set('currentPostId', id); }
    }*/

});