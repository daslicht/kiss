
Template.masterDetail.helpers(
{
    posts: function() {
        try{ 
            return Posts.find({}, { sort: { date: -1 }});
        }catch(e){

        }
    },

    details: function() {
        try{
            return Details.find( {postId:Session.get('currentPost').postId} ); 
        }catch(e){

        }
       
    },

    userIsAdmin: function() {
       if( Session.get('editMode') &&  Meteor.user() ){
            console.log('helper: true');
            return true;
        }else {
             console.log('helper: false');
            return false;
        }
    }
});


Template.masterDetail.events(
{
    /* CREATE */
	'click #createMasterItem': function(e){
		e.preventDefault();
        var date = new Date().getTime();
        var newPostId = Posts.insert({ date:date, headline:'headline' });
        Details.insert({ postId:newPostId, page:1, message:'content' }) ;

	},

    /* DELETE */
    'click #deleteMasterItem': function(e){
        e.preventDefault(); 
        Meteor.call('deletePost', 
            Session.get('currentPost'),function(error, result)
            {
                console.log('result?: ',result);
                Meteor.Router.to('/blog');
        })
       /* console.log('delete');
        
        Details.remove( { postId:postToDelete } );
       // Posts.remove( { _id:postToDelete } );
        Meteor.Router.to('/blog');*/
    },

    /* SAVE */
    'click #saveDetailsItem' :function(e){
      //  Details.update({ postId:newPostId, page:1, message:'content' }) ;
        var item = {
            message  : $('.detailsItem').html(),
        }               
        Details.update( Session.get('currentDetailsPage'), {$set:item} )
    },

    // 'click #editSwitch' :function(e){
    //  //   console.log( );
    //     if($(e.srcElement).attr('checked') == 'checked'){
    //         Session.set('editMode',true);
    //     }else{
    //         Session.set('editMode',false);
    //     }  
    // },
    

});