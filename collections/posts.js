Posts = new Meteor.Collection('posts');

Meteor.methods({

  deletePost: function (currentPost) {

  	  console.log('delete Post: ',currentPost.postId);   
  	  try {
 	 	Details.remove( { postId:currentPost.postId } );
      	Posts.remove( { _id:currentPost.postId} );
  	  }catch(e){
		throw new Meteor.Error(404, "Can't find my pants"+e);
  	  }   

      //this.removed(collection, id)
    //check(arg1, String);
    //check(arg2, [Number]);
    // .. do stuff ..
    /*if (you want to throw an error)
      
    return "some return value";*/
    return 'OK!';
  },


});