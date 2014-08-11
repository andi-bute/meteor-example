Meteor.methods({
  addPlayer: function (playerName) {
    var score = Math.round(Math.random()*10)*5;
    var player = {name: playerName, score: score, user_id: this.userId};
    Players.insert(player);
  },

  removePlayer: function (id) {
    Players.remove({_id:id, user_id:this.userId});
  }
});