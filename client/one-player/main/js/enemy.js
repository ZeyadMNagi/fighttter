function getEnemyOffset(characterName, backgroundName) {
  // Define offsets for each character and background
  const offsets = {
    roof: {
      "Evil wizard": 270,
      Knight: 100,
      King: 90,
      Samurai: 150,
      Warrior: 130,
      Wizard: 90,
      Goblin: 90,
      Skeleton: 90,
      "Fire wizard": 90,
    },
    forest: {
      "Evil wizard": 310,
      Knight: 110,
      King: 110,
      Samurai: 170,
      Warrior: 150,
      Wizard: 110,
      Goblin: 110,
      Skeleton: 110,
      "Fire wizard": 110,
    },
    bulkhead: {
      "Evil wizard": 280,
      Knight: 110,
      King: 90,
      Samurai: 160,
      Warrior: 140,
      Wizard: 90,
      Goblin: 80,
      Skeleton: 80,
      "Fire wizard": 120,
    },
    lap: {
      "Evil wizard": 270,
      Knight: 85,
      King: 90,
      Samurai: 140,
      Warrior: 125,
      Wizard: 80,
      Goblin: 75,
      Skeleton: 75,
      "Fire wizard": 100,
    },
  };

  // Return the offset or 0 if no match is found
  return offsets[backgroundName]?.[characterName] || 0;
}

var t;
var difficulty = localStorage.getItem("difficulty");

if (difficulty === "dN") {
  t = 7000;
} else if (difficulty === "dH") {
  t = 3000;
} else {
  t = 10000;
}

function spawnEnemies() {
  setInterval(() => {
    if (!player.dead && time > 0) {
      let i = Math.floor(Math.random() * 8);
      let x = Math.random() * (1000 - -800) + -800;

      let currentEnemy = Characters[i]; 
      let offsetY = getEnemyOffset(currentEnemy.name, background_use.name); 

      enemies.push(
        new Fighter({
          position: {
            x: x,
            y: offsetY, 
          },
          velocity: { x: 0, y: 0 },
          imageSrc: currentEnemy.sprites.idle.imgSrc,
          framemax: currentEnemy.sprites.idle.framemax,
          scale: currentEnemy.scale,
          offset: {
            x: currentEnemy.offset.x,
            y: currentEnemy.offset.y,
          },
          enemy: true,
          health: 80,
          no: 80,
          damage: 5,
          sprites: {
            idle: {
              imageSrc: currentEnemy.sprites.idle.imgSrc,
              framemax: currentEnemy.sprites.idle.framemax,
            },
            run: {
              imageSrc: currentEnemy.sprites.run.imgSrc,
              framemax: currentEnemy.sprites.run.framemax,
            },
            jump: {
              imageSrc: currentEnemy.sprites.jump.imgSrc,
              framemax: currentEnemy.sprites.jump.framemax,
            },
            fall: {
              imageSrc: currentEnemy.sprites.fall.imgSrc,
              framemax: currentEnemy.sprites.fall.framemax,
            },
            attack2: {
              imageSrc: currentEnemy.sprites.attack2.imgSrc,
              framemax: currentEnemy.sprites.attack2.framemax,
            },
            attack1: {
              imageSrc: currentEnemy.sprites.attack1.imgSrc,
              framemax: currentEnemy.sprites.attack1.framemax,
            },
            takehit: {
              imageSrc: currentEnemy.sprites.hit.imgSrc,
              framemax: currentEnemy.sprites.hit.framemax,
            },
            death: {
              imageSrc: currentEnemy.sprites.death.imgSrc,
              framemax: currentEnemy.sprites.death.framemax,
            },
          },
          attackbox: {
            offset: {
              x: currentEnemy.attackbox.offset.x,
              y: 50,
            },
            width: 120,
            height: 50,
          },
        })
      );
    }
  }, t);
}
