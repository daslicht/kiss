Template.detailsItem.events({

	
	'dblclick .detailsItem': function(e){
        e.preventDefault();
        console.log($(e.target).html());
        if(Meteor.user())
        {
            if( $(e.target).html() === 'content' ) {
                $(e.target).html('');
            }
            console.log(this._id);
            Session.set('currentDetailsPage',this._id);

            $('.detailsItem').attr('contentEditable','true').focus();
           // console.log( );
        }
     
    },



});
