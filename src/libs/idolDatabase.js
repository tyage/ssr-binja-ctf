class Idol {
  image = '/public/images/idol1.png'
  constructor(key) {
    this.key = key
  }
  say1() {}
  say2() {
    return `What are you doing???`
  }
  say3() {
    return `Sorry, this voice is not implemented yet.`
  }
}

class SSRUzuki extends Idol {
  image = '/public/images/idol1.png'
  name = '[SSR] Uzuki'
  say1() {
    return `Hello, This is uzuki! Nice to meet you.`
  }
}
class SRUzuki extends Idol {
  image = '/public/images/idol2.png'
  name = '[SR] Uzuki'
  say1() {
    return `Hello, This is uzuki! Nice to meet you.`
  }
}
class SRRin extends Idol {
  image = '/public/images/idol2.png'
  name = '[SR] Rin'
  say1() {
    return `This is rin. You are my producer, I see.`
  }
}
class SRMio extends Idol {
  image = '/public/images/idol2.png'
  name = '[SR] Mio'
  say1() {
    return `Hi, Call me mio!`
  }
}
class RUzuki extends Idol {
  image = '/public/images/idol3.png'
  name = '[R] Mio'
  say1() {
    return `Hi, Call me mio!`
  }
}

const idolDatabase = {
  ssr: [
    SSRUzuki
  ],
  sr: [
    SRUzuki,
    SRRin,
    SRMio
  ],
  r: [
    RUzuki
  ]
}

export default idolDatabase
