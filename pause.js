// pause.js

// functions to implement pausing and unpausing the game

function gamePause() {
    if (pauseInput.isDown) {
        game.paused = true;
        menu = game.add.text(game.camera.x, game.camera.y, "Click to unpause",
            { font: "30 px Arial", fill: "#FFA500", align: "center"});
    }
}

function gameUnpause(event) {
    if(game.paused){
        menu.destroy();
        game.paused = false;
    }
}

