Nick Flores
Zach Zager
Yi Ding

README for COMP23 Project 1 - Shooter Blaster

Introduction:
	For this initial project we were given the HTML5 game framework Phaser to
	buid a game of our choice. Our game (Shooter Blaster) is a top down vehicle-
	shooter/dungeon crawler, where you play as a rogue hacker attempting take
	down enemies within the virtual realm of computers.
	
Playing the Game:
	Simply go to pages.github.com/ZachZager/ShooterBlaster to play! USE WASD to
	move and aim/click with the mouse to shoot. 
	
Files:
	game.js:
		This is the core file of the game. Preloads all the necessary imagery,
		creates an instance of everything needed to be in the game, and is
		constantly updating the game via the Phaser game loop. It also houses
		our global variables for the global scores, time complete and bitcoins.
	access.js:
		Access.js is more or less a misc file of functions, but does contain the
		functions that allow the player to interact with aspects of the game. A 
		lot of these functions are callback methods used in the Phaser overlap
		and collide functions.
	player.js:
		This is the object file that creates a player and gives it all the
		properties to play the game with. Along with movement and firing, this 
		file allows for the players interaction with enemies and weapon
		selection.
	enemy.js:
		Like the player file, this one creates an enemy object which similar
		properties. Enemy.js is a lot more dynamic since there are different
		types of enemies that can be created. It also allows for player-bullet 
		and enemy interaction.
	projectile.js:
		Projectile.js is probably the most intensive file. It is also a dynamic
		object prototype with the implementation for the different types of
		weapons. Along with intialization for the weapons, it also handles the
		different types of weapon firing and their collision callbacks. It also
		creates the animation for the projectiles upon impact.
	cache.js:
		Cache.js is a helper file that takes each weapon, and throws them into an
		array of barrels which can be later accessed to have appear in the game.
		It is also and object prototype file.
	bitcoin.js:
		Bitcoin.js is a simpler object prototype file that creates a sprite
		instance of the bitcoin, assigns it a value, and then handles player coin
		collision. Coins are dropped each time an enemy dies.
	index.html:
		This is the basic html markup to allow the game to be played via browser.
		The JS files and phaser library are included via <script> tags.
	lava.js:
		Lava.js is an object prototype converted into a tween to allow automatic
		motion path. It is a somewhat intensive file since it handles all the 
		coordinate movements of the ingame lava objects.
	pause.js:
		This is a very simple two function file that allows the player to pause
		with 'p' and click to unpause.
	wall.js:
		Wall.js contains the implementation for the physical boundaries in the
		game. It creates a wall with x, y, w, and h parameters that can be drawn
		into the game by passing in the desired properties. Same with the blocks.
	settings.json:
		This is simplest of the files but allows for the game's difficulty to be
		tuneable. 
	NOTE: Along with these files are 3 folders containing all imagery, sprites, 
		sounds that are included in the game. Everything was taken from free
		online resources. 
		
END