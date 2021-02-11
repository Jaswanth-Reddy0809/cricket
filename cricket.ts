class game{
    Teams:Array<Team>=[];
    team_name:String;
    constructor()
    {
        for(let i=1;i<=2;i++)
        {
            this.Teams.push(new Team(i))
            this.team_name="Team"+String(i)

        }

    }

}
class Team{
    Players:Array<players>=[];
    Team_number:number;
    constructor(id:number)
    {
        this.Team_number=id;
        for(let i=1;i<=10;i++)
        {
            this.Players.push(new players(i))
        }
    }
}
class players{
    name:String;
    score:number;
    id:number;
    balls:number;
    ballscore:Array<number>=[];
    constructor(id:number)
    {

    
        this.id=id;
        this.name="player"+String(id)
        for(let i=1;i<=6;i++)
        {
    let run=Math.floor(Math.random()*7);
    if (run==0)    
    { this.ballscore.push(run);
        break;
    }
    else
    {
    this.ballscore.push(run);
    this.score=this.score+run;
    this.balls=this.balls+1
    }
}

    


}
}

document.getElementById("myid").addEventListener("click",() => {
    console.log(new game())
})