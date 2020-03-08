import * as p5 from 'p5'

let s = (sk) => {
	sk.swing = 0
	sk.swingDir = 1
	sk.setup = () => {
		sk.createCanvas(sk.windowWidth, sk.windowHeight);
		sk.stroke("#FFF")
		sk.slider = sk.createSlider(0, sk.TWO_PI, sk.PI/4, 0.01)
		console.log(sk.slider)
	}
	
	sk.draw = () => {
		sk.background(30, 20 ,30);	
		const len = sk.windowHeight / 3
		sk.translate(sk.width / 2, sk.height +100)
		sk.branch(len)
		
		sk.swing += 0.001 * sk.swingDir

		console.log(sk.swing)
		
		if (sk.swing > 0.02 || sk.swing < 0 ) {
			sk.swingDir = sk.swingDir * -1
		}
		 
	}

	sk.branch = len => {
			sk.strokeWeight(10 * (len / 100))
			sk.stroke(255, 50, 255 * (len / 100))
			sk.line(0, 0, 0, -len)
			sk.translate(0, -len)
			if(len > 4) {
				sk.push()
				sk.rotate(sk.slider.value()+sk.swing)
				sk.branch(len*0.70)
				sk.pop()
				sk.push()
				sk.rotate(-sk.slider.value()+sk.swing)
				sk.branch(len*0.70)
				sk.pop()				
			}
	}
}


const P5 = new p5(s)
