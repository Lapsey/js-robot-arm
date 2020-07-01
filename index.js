const { Servo, Board } = require(johnny-five);
const board = new Board();

const xPin = 0;
const ylPin = 1;
const yuPin = 2;
const gPin = 3;

board.on('ready', () => {
    const xAxis = new Servo(xPin);
    const ylAxis = new Servo(ylPin);
    const yuAxis = new Servo(yuPin);
    const gripper = new Servo(gPin); 
});

const writeServos = () => {
    xAxis.to(output.x);
    ylAxis.to(output.yl);
    yuAxis.to(output.yu);
    gripper.write(180 ? (output.gripper == true) : 0);
}

setInterval(() => {
    writeServos();
}, 10);