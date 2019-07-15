export interface Size {
    width: number;
    height: number;
}

export interface Coordinates {
    x: number;
    y: number;
}

export interface Speed {
    speedX: number;
    speedY: number;
}

export interface Rotation {
    rotation: number;
    pivotX: number;
    pivotY: number;
}

export interface RectangleProps extends Size, Coordinates, Speed, Rotation {
    weight: number;
}
