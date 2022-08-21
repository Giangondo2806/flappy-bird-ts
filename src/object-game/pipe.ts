import { GAME_WIDTH, PIPE_DISTANCE } from "../config/config";
import { Game } from "../game/game";
import { GameObject } from "./game-object";

export class Pipe extends GameObject {

    constructor(game: Game, imagePath: string) {
        super(game, imagePath);
        this.position = {
            x: GAME_WIDTH,
            y: -150,
        }

    }
    update(): void {
       
        if (!this.game.isCollision) {
            this.position.x -= 2;
            
        }
        if (this.position.x === -52) {
            this.position.x = GAME_WIDTH
            this.position.y = -Math.floor(Math.random() * 320);
        }

        this.game.context.drawImage(this.image, this.position.x, this.position.y);
        this.game.context.drawImage(this.image, this.position.x, this.position.y + 320 + PIPE_DISTANCE);
    }


}