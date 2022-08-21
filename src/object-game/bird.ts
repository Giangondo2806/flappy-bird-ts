import { FLAP_VELOCITY, GAME_GRAVITY, GAME_SPEED } from "../config/config";
import { Game } from "../game/game";
import { GameObject } from "./game-object";

export class Bird extends GameObject {
    velocity: number = 1;
    images: HTMLImageElement[] = [];
    flapIndexImage: number = 0;
    constructor(game: Game, imageUp: string, imageMid: string, imageDown: string) {
        super(game, imageUp);
        const imageMidElement = new Image();
        imageMidElement.src = imageMid;
        const imageDownElement = new Image();
        imageDownElement.src = imageDown;
        this.images = [this.image, imageMidElement, imageDownElement];
        this.position = {
            x: 100,
            y: 100,
        }

    }

    update(): void {
        this.velocity += GAME_GRAVITY;
        this.position.y += this.velocity;
        if (this.position.y >= 456) {
            this.position.y = 456;
        }
        /**
         * 
         */
        if (this.game.countFrame % 10 === 0) {
            this.flapIndexImage++;
            if (this.flapIndexImage === 3) {
                this.flapIndexImage = 0;
            }
        }


        let drawImage = this.images[this.flapIndexImage];
        if (this.game.isCollision) {
            drawImage = this.images[1];
        }

        this.game.context.drawImage(drawImage, this.position.x, this.position.y);
    }

    flap(): void {
        this.velocity -= FLAP_VELOCITY;
    }

}