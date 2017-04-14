window.mentorme = function () {
    var profile = {
        'mentor': 'true'
    };

    Meteor.call("updateUser", Meteor.userId(), profile, function(err){
        if (err){
            console.error(err)
        } else {
            console.info('Successfully converted to mentor!')
        }
    });
};
