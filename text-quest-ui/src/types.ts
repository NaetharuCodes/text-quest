export type Adventure = {
  title: string;
  description: string;
  scenes: Scene[];
};

export type Scene = {
  title: string;
  text: string[];
  poi: Poi[];
  parents: Scene[];
  children: Scene[];
};

export type Poi = {
  name: string;
  parent: Scene;
};
