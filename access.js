// access.js

function restart() {
	endScene.stop();
	game.state.restart();
	setupKey();
}

function updateCounter() {
	counter++;
}

function setupKey() {
	keys = game.add.group();
	keys.enableBody = true;
	var key = keys.create(2180, 356, 'key');
	key.scale.setTo(0.08,0.08);
}

function changeBackground() {
	startScene.stop();
	bossScene.play();
	background.kill();
}

function firstDoor() {
	firstDoors = game.add.group();
	firstDoors.enableBody = true;
	var firstDoor = firstDoors.create(1268, 870, 'firstDoor');
	firstDoor.body.immovable = true;
	firstDoor.scale.set(0.15, 0.15);
}

// player picks up key
function collectKey(player, key) {
    key.kill();
    hasKey += 1;
}

// player unlocks door/computer tower
function openDoor() {
	if (hasKey == 1) {
		firstDoors.destroy();
	}
}

