var board = document.getElementById('board')
var context = board.getContext('2d')

var board_width = parseInt(board.getAttribute('width'))
var board_height = parseInt(board.getAttribute('height'))

var bar_width = 120, bar_height = 26
var bar_x = board_width / 2 - bar_width / 2
var bar_y = board_height - 5 * bar_height

var ball_x = 10
var ball_y = 10

var dir = 'bottom_right'

var move_step = 35

start()

function start() {
    setInterval(function() {
        clear()

        draw_bar()
        
        move_ball()
    }, 50)


    document.onkeydown = function(e) {
        switch(e.which) {
            case 37: {
                if (bar_x - move_step >= 0) {
                    bar_x -= move_step
                }
                break
            }
            case 39: {
                if (bar_x + bar_width + move_step <= board_width) {
                    bar_x += move_step
                }
                break
            }
        }
    }
}


function draw_bar() {
    context.fillStyle = '#000000'
    context.fillRect(bar_x, bar_y, bar_width, bar_height)
}


function clear() {
    context.fillStyle = '#ffffff'
    context.fillRect(0, 0, board_width, board_height)
}


function move_ball() {
    if (dir == 'bottom_right') {
        ball_x += 10
        ball_y += 10
    }
}


function draw_ball() {

}