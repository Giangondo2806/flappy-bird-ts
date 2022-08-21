import { Game } from "../game/game";

export interface Position {
    x: number;
    y: number;
}
export abstract class GameObject {
    position!: Position;
    game: Game;
    image: HTMLImageElement;
    constructor(game: Game, imagePath: string) {
        this.game = game;
        this.image = new Image();
        this.image.src = imagePath;
    }

    abstract update(): void;

}


