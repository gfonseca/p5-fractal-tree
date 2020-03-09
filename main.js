import * as p5 from 'p5'

const s = (sk) => {
  sk.swing = 0
  sk.swingDir = 1
  sk.swingSpeed = 0.002
  sk.recursionDepth = 8
  sk.divisionRate = 0.70
  sk.angle = 45
  sk.swingSpeedSlider = null

  sk.drawRect = () => {
    sk.fill(sk.rectColor)
    sk.noStroke()
    sk.rect(0, 0, sk.width, sk.height)
  }

  sk.sliderValue = () => {
    sk.swingSpeed = sk.swingSpeedSlider.value() / 100000
    sk.recursionDepth = sk.depthSlider.value()
    sk.divisionRate = sk.divisionSlider.value() / 100
    sk.angle = sk.angleSlider.value() + sk.swing
  }

  sk.setup = () => {
    sk.createCanvas(sk.windowWidth, sk.windowHeight)
    sk.stroke('#FFF')
    sk.angleSlider = sk.createSlider(0, sk.TWO_PI, sk.PI / 4, 0.01)
    sk.swingSpeedSlider = sk.createSlider(1, 500)
    sk.depthSlider = sk.createSlider(4, 16)
    sk.divisionSlider = sk.createSlider(1, 95)
    sk.rectColor = sk.color(30, 20, 30)
    sk.rectColor.setAlpha(40)
  }

  sk.draw = () => {
    sk.sliderValue()
    sk.drawRect()
    const len = sk.windowHeight / 3.5
    sk.translate(sk.width / 2, sk.height + 100)
    sk.branch(len)

    sk.swing += sk.swingSpeed * sk.swingDir
    if (sk.swing > 0.02 || sk.swing < -0.02) {
      sk.swingDir = sk.swingDir * -1
    }
  }

  sk.branch = len => {
    sk.strokeWeight(10 * (len / 100))
    sk.stroke(255, 50, 255 * (len / 100))
    sk.line(0, 0, 0, -len)
    sk.translate(0, -len)
    if (len > sk.recursionDepth) {
      sk.push()
      sk.rotate(sk.angle)
      sk.branch(len * sk.divisionRate)
      sk.pop()

      //   sk.push()
      //   sk.rotate(sk.angle * 1.6)
      //   sk.branch(len * (sk.divisionRate * 0.4))
      //   sk.pop()

      //   sk.push()
      //   sk.rotate(-sk.angle * 1.6)
      //   sk.branch(len * (sk.divisionRate * 0.4))
      //   sk.pop()

      sk.push()
      sk.rotate(-sk.angle)
      sk.branch(len * sk.divisionRate)
      sk.pop()
    }
  }
}

const P5 = new p5(s)
