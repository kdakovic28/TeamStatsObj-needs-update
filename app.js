const team = {
  _players:{
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
},
 addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
     this._players.push(player);
team.addPlayer('Steph', 'Curry', 28);
    
  _games: [
    {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
}
  ],
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts ,
      opponentPoints: OppPts
    };
     this._games.push(player);
     team.addGame('Titans', 100, 98);
  get _players() {
    return this._players;
  }
  get _games() {
    return this._games;
  }
};