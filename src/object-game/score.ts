import { GAME_WIDTH, PIPE_DISTANCE } from "../config/config";
import { Game } from "../game/game";
import { GameObject } from "./game-object";

export class Score extends GameObject {
    constructor(game: Game, imagePath: string) {
        super(game, imagePath);
        this.position = {
            x:140,
            y:20,
        }
    }

    update(totalScore?: number):void {
        const arrOfStr = Array.from(String(totalScore));

        for(let i=0; i<arrOfStr.length; i++) {
            // console.log(`${arrOfStr[i]}.png`);

            this.image = new Image();
            this.image.src = `./assets/img/${arrOfStr[i]}.png`;
            this.game.context.drawImage(this.image, this.position.x+i*20, this.position.y);
        }

        // this.game.context.drawImage(this.image, this.position.x, this.position.y);
        // this.game.context.drawImage(this.image, this.position.x+25, this.position.y);
    }
}