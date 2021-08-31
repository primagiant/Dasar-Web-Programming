const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const cols = canvas.width / scale;

let snake;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();

    fruit.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        fruit.draw();
        snake.draw();
        snake.update();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }
    }, 250)
}());

window.addEventListener('keydown', ((e) => {
    const direction = e.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))
