var ctx = document.getElementById("myCanvas").getContext("2d");

function point(x, y){
  return {'x': x, 'y': y};
}

var p = point;

function line(p1, p2){
  ctx.moveTo(p1.x,p1.y);
  ctx.lineTo(p2.x,p2.y);
  ctx.stroke();
}

function rect(p1, p2){
  ctx.moveTo(p1.x,p1.y);
  ctx.lineTo(p1.x,p2.y);
  ctx.lineTo(p2.x,p2.y);
  ctx.lineTo(p2.x,p1.y);
  ctx.lineTo(p1.x,p1.y);
  ctx.stroke();
}

var len = 10;
var ori = p(300,300);

function drawFabRect(idx, ori, r) {
  switch(idx%4) {
    case 0:
        dra = p(ori.x+r*len, ori.y+r*len);
        break;
    case 1:
        dra = p(ori.x+r*len, ori.y-r*len);
        break;
    case 2:
        dra = p(ori.x-r*len, ori.y-r*len);
        break;
    case 3:
        dra = p(ori.x-r*len, ori.y+r*len);
        break;
    default:
  }
  rect(ori, dra);
  return dra;
}

var n1=0, n2=1;
for(var i=1; i<8; i++){
  
  dra = drawFabRect(i, ori, n1+n2);
  ori = dra;
  var t = n1;
  n1 = n2;
  n2 = n1+t
}

