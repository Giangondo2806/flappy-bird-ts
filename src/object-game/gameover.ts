import { Game } from "../game/game";
import { GameObject } from "./game-object";

export class Gameover extends GameObject {
    constructor(game: Game, imagePath: string) {
        super(game, imagePath);
        this.position = {
            x: 60,
            y: 210,
        }

    }

    update(): void {
        console.log('gameover');
        this.game.context.drawImage(this.image, this.position.x, this.position.y);
    }

}