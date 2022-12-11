const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colors = ["red", "blue", "green", "yellow", "white", "black", "pink","orange"]

const cWidth = canvas.clientWidth;
const cHeight = canvas.clientHeight;

const xWidth = 50;
const yHeight = 50;

ctx.beginPath();
ctx.strokeStyle = "#fff"
function drawSet() {
	for(let i = 50; i < cWidth; i += yHeight) {
		// ctx.fillText("1", i / 2, i / 2)
		ctx.moveTo(i, 0)
		ctx.lineTo(i, cHeight)
		ctx.stroke()
	}

	for(let i = 50; i < cWidth; i += xWidth) {
		ctx.moveTo(0, i)
		ctx.lineTo(cWidth, i)
		ctx.stroke()
	}

	for(let i = 0; i <= cWidth; i += xWidth) {
		ctx.fillStyle = "#fff"
		// ctx.font = "600 sans-serif"
		ctx.fillText("a",i + 50 / 2 , 50 / 2)
	}
	for(let i = 0; i <= cWidth; i += xWidth) {
		ctx.fillStyle = "#fff"
		// ctx.font = "600 sans-serif"
		ctx.fillText("a",i + 50 / 2 , 150 / 2)
	}
}
drawSet()


	let counter1 = 0;
	let counter2 = 0;
function draw() {
			ctx.clearRect(0,0, cWidth, cHeight)
			drawSet()
		if(counter2 <= 50000) {
			counter1 += 5
			counter2 += 3
			ctx.beginPath();
			ctx.arc(cWidth - counter1, cHeight - counter2, 50, 0, Math.PI * 2);
			ctx.fill();
			requestAnimationFrame(draw)
			ctx.closePath();

		}
}


	let counter3 = 0;
	let counter4 = 0;

function draw2() {
		if(counter4 <= 50000) {
			counter3 += 5
			counter4 += 3
			requestAnimationFrame(draw2)
			ctx.beginPath();
			ctx.arc(0 + counter3, cHeight - counter4, 50, 0, Math.PI * 2);
			ctx.fill();
		}
}
// function draw2() {
// 		if(counter <= 50000) {
// 			counter += .5
// 			requestAnimationFrame(draw2)
// 			ctx.fillStyle = colors[Math.floor(Math.random() * 8)]
// 			ctx.beginPath();
// 			ctx.arc(cWidth / 2 - 25, cHeight - counter, 50, 0, Math.PI * 2);
// 			ctx.fill();
// 		}
// }
draw()
draw2()







