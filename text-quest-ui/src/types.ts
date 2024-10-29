export type Adventure = {
    name: string,
    scenes: Scene[]
}

export type Scene = {
    name: string,
    text: string[],
    poi: Poi[],
    parents: Scene[],
    children: Scene[],
}

export type Poi = {
    name: string;
    parent: Scene
}
