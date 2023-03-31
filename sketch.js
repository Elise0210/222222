


//加入文字顯示
let points = [[3, 3], [5, -1], [6, -2],[8,0],[10,4],[12,8],[13,12],[13,16],[15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],[17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],[5,-16],[1,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],[-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],[-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],[-4,-6],[-1,-6],[-1,-3],[-2,1],[0,-1],[1,0],[2,0],[3,1],[3,3]];
let polygon = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < points.length; i++) {
    let p = createVector(points[i][0], points[i][1]);
    p.mult(20);
    polygon.push(p);
  }
}

function draw() {
  background(255);
  translate(width/3, height/2);

  let mouseXpos = mouseX - width/3; // 計算滑鼠位置相對於多邊形的x座標
  let mouseYpos = height/2 - mouseY; // 計算滑鼠位置相對於多邊形的y座標
	
	let scaleAmount = map(mouseXpos, -width/3, width/3, 0.5, 2); // 計算放大縮小倍率，依據滑鼠位置
  let flipY = mouseYpos < 0 ? -1 : 1; // 如果滑鼠位置在多邊形的上方，就將Y軸方向反轉
  
   for (let i = 1; i <= 5; i++) {
    push();
    scale(i/6);
    scale(1, -1);
		 
    translate(-200 + 100*i + mouseXpos, mouseYpos); // 設定位置
    strokeWeight(4);
		 
    for (let j = 0; j < polygon.length-1; j++) {
      let from = color(100,300,150);
      let to = color(100,200,250);
      stroke(lerpColor(from, to, j/polygon.length));
      line(polygon[j].x, polygon[j].y, polygon[j+1].x, polygon[j+1].y);
    }
    pop();
  }
	push
	scale(scaleAmount);  //上下翻轉
	textSize(10)  //文字大小
  fill(400, 100, 100);  //設定顏色
  text("Ｈarry Potter",10,10)  //顯示文字
	pop();
}


//![](https://i.imgur.com/Wca1X4d.gif)

