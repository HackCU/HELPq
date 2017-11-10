window.mentorme = function () {

    Meteor.call("makeMeMentor", function(err){
        if (err){
            debugger;
            console.error(err);
        } else {
            console.info('Successfully converted to mentor!')
        }
    });
};
