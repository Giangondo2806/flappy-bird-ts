import { BIRD_HEIGHT, GAME_FPS, GAME_HEIGHT, GAME_WIDTH, PIPE_DISTANCE, PIPE_WIDTH } from "../config/config";
import { BackGround } from "../object-game/background";
import { Base } from "../object-game/base";
import { Bird } from "../object-game/bird";
import { Pipe } from "../object-game/pipe";
import { Score } from "../object-game/score";
import { Gameover } from "../object-game/gameover";

export class Game {
    context!: CanvasRenderingContext2D;
    bird!: Bird;
    bg!: BackGround;
    base!: Base;
    pipe!: Pipe;
    score!: Score;
    gameover!: Gameover;

    totalScore: number = 0;
    isPassedThroughPipe: boolean = false;
    isCollision: boolean = false;
    countFrame: number = 0;
    isEndGame: boolean = false;
    constructor(id: string) {
        const canvas = document.getElementById(id) as HTMLCanvasElement;
        this.context = canvas.getContext('2d') as CanvasRenderingContext2D;
        canvas.width = GAME_WIDTH;
        canvas.height = GAME_HEIGHT;

        canvas.addEventListener('click', () => {
            if (!this.isCollision) {
                this.bird.flap();
            }

        })
    }

    #checkCollision(): void {
        // if(this.isCollision === true) {;}

        if ((this.bird.position.x + 34) < (this.pipe.position.x + 52) && (this.bird.position.x) > (this.pipe.position.x - 34)) {
            if (!(this.bird.position.y > this.pipe.position.y + 320 && this.bird.position.y < this.pipe.position.y + 320 + PIPE_DISTANCE)) {
                this.isCollision = true;
            }

        }

        if (this.bird.position.y >= 456 || this.bird.position.y <= 0) {
            this.isCollision = true;
        }
        if (this.bird.position.y >= this.base.position.y - BIRD_HEIGHT) {
            this.isEndGame = true;
        }

        if (this.bird.position.x < (this.pipe.position.x + 54)) {
            this.isPassedThroughPipe = false;
        } else if (this.isPassedThroughPipe === false) {
            this.isPassedThroughPipe = true;
            this.totalScore += 5;
        }


    }

    #updateFrame(): void {

        if (!this.isEndGame) {
            // console.count('update frame')
            this.#checkCollision();
            this.countFrame++;
            this.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
            this.bg.update();
            this.pipe.update();
            this.base.update();
            this.bird.update();
            this.score.update(this.totalScore);

            setTimeout(() => this.#updateFrame(), 1000 / GAME_FPS)
        } else {
            this.gameover.update()
        }


    }

    setBird(bird: Bird): void {
        this.bird = bird;
    }

    setBackground(bg: BackGround): void {
        this.bg = bg;
    }
    setBase(base: Base): void {
        this.base = base;
    }

    setPipe(pipe: Pipe): void {
        this.pipe = pipe;
    }

    setScore(score: Score): void {
        this.score = score;
        console.log('Init');
    }

    setGameover(gameover: Gameover): void {
        this.gameover = gameover;
    }

    start(): void {
        this.#updateFrame();
    }


}