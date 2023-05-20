var MOVE_DISTANCE = 20;
var MOVE_DIRECTION = "X";
var TIME_DELAY = 305;
var TIME_GAIN = 5;
var GAME_SCREEN_DIMENSION = 400 < parseFloat(screen.width) ? 400 : parseFloat(screen.width);// this is for when mobile is used the screen is small so we adjust the game screen to it
var SNAKE_BOUNDARY = GAME_SCREEN_DIMENSION - 30;
var BITE_DISTANCE = 20;
var MAX_FRUITS_AT_ONCE = 5;
var To_PAUSE = true;

const body = document.getElementsByTagName("body")[0];
var body_style = window.getComputedStyle(body);
var BODY_MARGIN = body_style.getPropertyValue('margin-top');

// this will ensure that game screen has at least some margin to end of the screen
if (GAME_SCREEN_DIMENSION < 400) {
    GAME_SCREEN_DIMENSION -= 2 * BODY_MARGIN;
}


var game_time = 300;
var color_range = ["silver", "chocolate", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "blue", "teal", "aqua"];
var colors = [];
var score = 0;
var high_score = localStorage.getItem("highscore") ? localStorage.getItem("highscore") : 0;
