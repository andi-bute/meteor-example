Template.addPlayer.events({
    "submit #addPlayer": function(ev){
        ev.preventDefault();
        var playerName = $("#playerName")
        Meteor.call("addPlayer", playerName.val());
        playerName.val('');
    }
});