Template.masterItem.rendered = function () {
       var $this = $(this.firstNode);

    Meteor.defer(function() {
      // $this.find('.masterItem').addClass('a_visible');
       // console.log($this );
    });

}

Template.masterItem.helpers(
{
    'currentPost' : function(test) {
      
        /*
        Handle Active CSS Class
        */
        if( String(typeof(Session.get('currentPost'))) != 'undefined' ){
   
            if(typeof(Session.get('currentPost') )!= undefined){
                if(this._id == Session.get('currentPost').postId) {
                    return 'active';
                }else{
                }
            }
        }  
    },

    'itemUrl' : function() {
        var options = {
            '_postId': this._id,
            '_page': 1
        }
        return Meteor.Router.blogPath( options);
    }
});


Template.masterItem.events({
    
    'dblclick .masterItem #headline': function(e){
        e.preventDefault();
        if(Meteor.user()) {
            if( $(e.target).html() ==='headline' ) {
                $(e.target).html('');
            }
            $(e.target).attr('contentEditable','true').focus();
           // console.log( );
        }
     
    },

    /* SAVE NEW ITEM */
    'keypress' :function(e, tmpl){
        console.log(e.charCode);
         if(Meteor.user())
         {
            if(e.charCode === 13 || e.charCode === 0){ //13 == enter
                var item = {
                    headline  : $(e.target).parent().find('#headline').html(),
                }               
                Posts.update( this._id, {$set:item} );
                $(e.target).attr('contentEditable','false').blur();
                console.log('SAVE',  item);  
            }
        }

    }
});