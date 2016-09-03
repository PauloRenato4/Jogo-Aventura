var Meugame = new Phaser.Game(1350, 668, Phaser.AUTO, "game-container");

Meugame.state.add('game', gameState);
Meugame.state.start('game');
