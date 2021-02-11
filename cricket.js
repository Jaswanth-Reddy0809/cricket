var game = /** @class */ (function () {
    function game() {
        this.Teams = [];
        for (var i = 1; i <= 2; i++) {
            this.Teams.push(new Team(i));
            this.team_name = "Team" + String(i);
        }
    }
    return game;
}());
var Team = /** @class */ (function () {
    function Team(id) {
        this.Players = [];
        this.Team_number = id;
        for (var i = 1; i <= 10; i++) {
            this.Players.push(new players(i));
        }
    }
    return Team;
}());
var players = /** @class */ (function () {
    function players(id) {
        this.ballscore = [];
        this.id = id;
        this.name = "player" + String(id);
        for (var i = 1; i <= 6; i++) {
            var run = Math.floor(Math.random() * 7);
            if (run == 0) {
                this.ballscore.push(run);
                break;
            }
            else {
                this.ballscore.push(run);
                this.score = this.score + run;
                this.balls = this.balls + 1;
            }
        }
    }
    return players;
}());
document.getElementById("myid").addEventListener("click", function () {
    console.log(new game());
});
