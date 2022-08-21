import { Game } from "./game/game";
import { BackGround } from "./object-game/background";
import { Base } from "./object-game/base";
import { Bird } from "./object-game/bird";
import { Pipe } from "./object-game/pipe";
import { Score } from "./object-game/score";
import { Gameover } from "./object-game/gameover";


function main(): void {
    // const tittle = document.getElementById('title');
    const game = new Game('game');
    const bird = new Bird(game,
        './assets/img/redbird-upflap.png',
        './assets/img/redbird-midflap.png',
        './assets/img/redbird-downflap.png');
    const bg = new BackGround(game, './assets/img/background-night.png');
    const base = new Base(game, './assets/img/base.png');
    const pipe = new Pipe(game, './assets/img/pipe-green.png')
    const score = new Score(game, './assets/img/0.png');
    const gameover = new Gameover(game, './assets/img/gameover.png');

    game.setBird(bird);
    game.setBackground(bg);
    game.setBase(base);
    game.setPipe(pipe);
    game.setScore(score);
    game.setGameover(gameover);

    game.start();

   
}

main();