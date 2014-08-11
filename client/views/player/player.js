  Template.player.selected = function () {
    return Session.equals("selected_player", this._id) ? "selected" : '';
  };

  Template.player.owned = function() {
    return (this.user_id === Meteor.userId());
  }


  Template.player.events({
    'click': function () {
      Session.set("selected_player", this._id);
    },
    'click #delete': function() {
        //console.log(this);
        Meteor.call("removePlayer", this._id);
    }
  });