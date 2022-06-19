export default class Sound {
  playBoom() {
    let Boom = new Audio('./src/sounds/boom.ogg')
    Boom.play()
  }

  playLaser() {
    let Laser = new Audio('./src/sounds/laser.ogg')
    Laser.play()
  }

  playPling() {
    let Pling = new Audio('./src/sounds/pling.ogg')
    Pling.play()
  }
}
