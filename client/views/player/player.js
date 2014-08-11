  Template.player.selected = function () {
    return Session.equals("selected_player", this._id) ? "selected" : '';
  };


  Template.player.events({
    'click': function () {
      Session.set("selected_player", this._id);
    }
  });