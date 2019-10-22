`use strict`

var car = {
  model: 'Benz',
  color: 'black',
  year: 1886,
  doors: 0,
  historical: true,
};

//before ES6
var model = car.model;
var color = car.color;
var year = car.year;
var doors = car.doors;
var historical = car.historical;

//from ES6
const {model, color, year, doors, historical} = car;

var computer = {
  type: 'PC',
  monitor: {
    color: 'black',
    size: '16\"',
    HDMI: true,
    VGA: true,
  },
  tower: {
    color: 'grey',
    CPU: 4.7,
    memory: 16,
    SSD: 128,
  },
};

//before ES6
var type = computer.type;
var monitorColor = computer.monitor.color;
var monitorSize = computer.monitor.size;
var monitorHdmi = computer.monitor.HDMI;
var monitorVga = computer.monitor.VGA;
var towerColor = computer.tower.color;
var towerCpu = computer.tower.CPU;
var towerMemory = computer.tower.memory;
var towerSsd = computer.tower.SSD;

//from ES6
const {type, monitor: {color: monitorColor, size:monitorSize, HDMI:monitorHdmi, VGA:monitorVga}, tower: {color: towerColor, CPU: towerCpu, memory: towerCpu, SSD: towerSsd}} = computer;