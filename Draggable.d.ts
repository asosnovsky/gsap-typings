declare namespace gsap {

  export class Draggable {

    static version: string;
    static zIndex: number;

    allowEventDefault: boolean;
    autoScroll: number;
    endRotation: number;
    endX: number;
    endY: number;
    isDragging: boolean;
    isPressed: boolean;
    lockAxis: boolean;
    lockedAxis: string;
    maxRotation: number;
    maxX: number;
    maxY: number;
    minRotation: number;
    minX: number;
    minY: number;
    pointerEvent: PointerEvent;
    pointerX: number;
    pointerY: number;
    rotation: number;
    tween: TweenLite;
    vars: Draggable.Vars;
    x: number;
    y: number;

    constructor(target: Object, vars?: Draggable.Vars);

    static create(target: Object, vars?: Draggable.Vars): Draggable[];
    static get(target: Object): Draggable;
    static hitTest(testObject1: Draggable.TestObject, testObject2: Draggable.TestObject, threshold?: number | string): boolean;
    static timeSinceDrag(): number;

    addEventListener(type: string, callback: Function);
    applyBounds(newBounds?: Draggable.Bounds): this;
    disable(type?: string): this;
    drag(event: Event): void;
    enable(type?: string): this;
    enabled(): boolean;
    enabled(value: boolean, type?: string): this;
    endDrag(event: Event): void;
    getDirection(from: "start", diagonalThreshold?: number): string;
    getDirection(from: "velocity", diagonalThreshold?: number): string;
    getDirection(from: Draggable.DOMTarget, diagonalThreshold?: number): string;
    hitTest(testObject: Draggable.TestObject, threshold?: number | string): boolean;
    getDirection(from?: string, diagonalThreshold?: number): string;
    kill(): this;
    removeEventListener(type: string, callback: Function);
    startDrag(event: Event): this;
    timeSinceDrag(): number;
    update(applyBounds?: boolean): this;
  }

}
