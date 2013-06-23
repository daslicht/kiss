//var d = new Date().getTime();
if (Posts.find().count() === 0) {
    var id;
    id=Posts.insert({
        headline: 'New Headline',
        date: 3,
        author: 'AnSolas',
        detailsId: ''
    });
    Posts.update(id,{$set:{detailsId:id}});

    id=Posts.insert({
        date: 2,
        headline: 'Meteor',
        author: 'AnSolas',
        detailsId: '2'
    });
    Posts.update(id,{$set:{detailsId:id}});

    id=Posts.insert({
        date: 1,
        headline: 'The Meteor Book',
        author: 'AnSolas',
        detailsId: '3'
    });
    Posts.update(id,{$set:{detailsId:id}});
}

if (Details.find().count() === 0) {
   /* Details.insert({
        postId: '1',
        page:   '1',
        content:'This the the content for the post with the ID#1'
    });
    Details.insert({
        postId: '1',
        page:   '2',
        content:'This the the content for the post with the ID#1'
    });

    Details.insert({
        postId: '2',
        content:'This the the content for the post with the ID#2'
    });

    Details.insert({
        postId: '3',
        content:'This the the content for the post with the ID#3'
    });*/
}

/*
* // add today's date into a record in mongo
 var row.date =  moment().format("YYYY-MM-DD");
 Schedule.insert(row);
*
* */