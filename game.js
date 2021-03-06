import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// load the default sprite "bean"
loadBean();

// add a game obj to screen, from a list of components
const froggy = add([
    sprite("bean", 32),
    pos(120, 80),
    area(),
    body(),
]);

// add a platform
add([
	pos(0, 480),
	rect(width(), 48),
	outline(4),
	solid(),
	area(),
	color(127, 200, 255),
])

// jump when user presses "space"
keyPress("space", () => {
    froggy.jump();
});

// move input focus to the game
focus();