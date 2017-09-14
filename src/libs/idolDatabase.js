class Idol {
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

class SRUzuki extends Idol {
  name = '[SR] Uzuki'
  say1() {
    return `Hello, This is uzuki! Nice to meet you.`
  }
}
class SRRin extends Idol {
  name = '[SR] Rin'
  say1() {
    return `This is rin. You are my producer, I see.`
  }
}
class SRMio extends Idol {
  name = '[SR] Mio'
  say1() {
    return `Hi, Call me mio!`
  }
}

const idolDatabase = {
  ssr: [
    SRUzuki
  ],
  sr: [
    SRUzuki,
    SRRin,
    SRMio
  ],
  r: [
    SRMio
  ]
}

export default idolDatabase
