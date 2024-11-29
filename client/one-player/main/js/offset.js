// Define the offsets in a structured object
const offsets = {
  roof: {
    "Evil wizard": 270,
    Knight: 100,
    king: 90,
    samurai: 150,
    warrior: 130,
    wizard: 90,
    goblin: 90,
    skeleton: 90,
    "fire wizard": 90,
    idk: 70,
  },
  forest: {
    "Evil wizard": 310,
    Knight: 110,
    king: 110,
    samurai: 170,
    warrior: 150,
    wizard: 110,
    goblin: 110,
    skeleton: 110,
    "fire wizard": 110,
    idk: 95,
  },
  bulkhead: {
    "Evil wizard": 280,
    Knight: 110,
    king: 90,
    samurai: 160,
    warrior: 140,
    wizard: 90,
    goblin: 80,
    skeleton: 80,
    "fire wizard": 120,
    idk: 70,
  },
  lap: {
    "Evil wizard": 270,
    Knight: 85,
    king: 90,
    samurai: 140,
    warrior: 125,
    wizard: 80,
    goblin: 75,
    skeleton: 75,
    idk: 60,
    "fire wizard": 100,
  },
};

function offset() {
  const defaultOffset = 0;

  const backgroundOffsets = offsets[background_use.name] || {};
  const playerOffset = backgroundOffsets[player_use.name] || defaultOffset;

  player_use.offset.y = playerOffset;
}
