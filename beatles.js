function theBeatlesPlay(players, instruments) {
    var allPlayers = [0];
    for (var i=0; i < players.length; i++) {
        allPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}
