let player2 175 let player 1175
let posx 200
let pasy 300
let falx 0
let faly
let point 0
let poinz D
let servicel-0 let service2
Let rando

const layar = document.getElementById('canvas');
const canvas = layar getcontext('2d');
canvas fillStyle = 'white':
canvas.fillRect(0, 0, 400, 600);
function con2() {
  window.requestAnimationFrame(con2) 
  player2 = document.getElementById('player2').value;
  canvas.clearRect(player2 + 400, 0, 400, 5); 
  canvas.clearRect(player2 - 400, 0, 800, 53; 
  canvas.fillStyle = 'red';
  canvas.fillRect(player2 25, 0, 50, 5),
}
con2()
function cont() {
  window.requestAnimationFrame(cont):
  player1 = document.getElementById('playert').value:
  canvas.clearRect(player1 + 400, 595, 400, 5): 
  canvas.clearRect(player1 - 400, 595, 500, 5); 
  canvas.fillsStyle = 'red';
  canvas.fillRect(player1 - 25, 595, 50, 5);
}
cont1()
function ball() {
  window.requestAnimationFrame(ball): 
  canvas.clearRect(posx - 10, posy - 10, 30, 30);
  canvas.fillstyle = 'lime'; 
  canvas.fillRect(posx, posy, 10, 10);
  canvas.fill(); 
  if (posx >= 400) {
    falx = -2;
}
if (posx <= 0) { 
  falx = 2;
}
posx += falx
if (posx > Number(playert) - 25 && posx < Number(player1) + 25 8& posy == 590) {
  faly = -5;
}
else{
  if (posy 590) (
    poin2++; 
    document.getElementById('papan') innerHTML = poin2 + " : " + point1;
    canvas.clearRect(0, 580, 400, 20);
    faly = 0;
    falx = 0;
    posx = 200; 
    posy = 300;
    service2 = document.getElementById('service2");
    servicez.style.display "block";
  }
}
if (posx Number(player2) - 25 && posx < Number(player2) + 25 && posy == 0) { 
  faly = 5:
}
else {
  if (posy 0) { 
    point++;
    document.getElementById('papan') innerHTML poin2 + " + point1;
    canvas.clearRect(0, 0, 400, 20);
    faly = 0;
    falx = 0;
    posx = 200;
    posy = 300;
    servicel = document.getElementById('service');
    servicel.style.display = "block";
   }
 }
 posy += faly;
}
ball()
function kanant(){
  faly = -5;
  falx = 21;
  servicel style.display="none";
}
function kanan2(){
  faly = 5; 
  falx = -2;
  service2.style.display="none";
}
function kiril() {
  faly = -5;
  falx = -2;
  servicet.style.display "none";
}
function kiri2() {
  faly = 5;
  falx = 2;
  service2.style.display "none":
}
function random(){
  rand Math.floor(Math.random() * 2) + 1;
  if (rand == 1){
    servicel = document.getElementById('service1');
    servicel style.display "block";
  }
  if (rand 2) {
    service2 = document.getElementById('service2');
    service2.style.display = "block";
  }
}
random()