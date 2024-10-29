# Text Quest

Text Quest allows you to create, share, and play text-based RPG adventure games in the styles of those found on classic home computers of the 1980s.

- Each adventure is made from a tree of scenes

- Each scene has a main description and (n) points of interest that the player can interact with.

- Characters have dialogue trees that the player can navigate to talk to the characters.

- Adavnced adventures have AI (Claude API) integration allowing a more natural interaction with the scenes.

## Interaction Types

Text Quest supports a range of player interaction types

### Investigation

- Investigate
- Search
- Read
- Listen

### Physical

- Take
- Use
- Push/Pull
- Open/Close
- Climb
- Break
- Combine
- Sneak
- Attack [weapon]

### Social

- Spreak
- Trade
- Give
- Threaten
- Steal

### Magic

- Cast [spell]

## Scene Tree

An adventure is composed of scenes, which are linked together as nodes in a tree. Each scene has at least one parent (save for the first) and at least one child (save for the endings). When arriving in a scene players are given a text readout about it. They are then able to use the text input to interact with the scene by investigating points of interest, and engaging with characters and items found therein.

## Dialogue Tree

Character dialogues are modelled on a tree, with each character response a node, and player interactions used to navigate between nodes to one of the outcome points.
