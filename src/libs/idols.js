class Idol {
  constructor(props) {
    this.props = Object.assign(props, {
      defaultAction: 'say'
    })
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
  say1() {
    return `Hello ${this.props.producerName}! This is uzuki! Nice to meet you.`
  }
}
class SRRin extends Idol {
  say1() {
    return `This is rin. You are my producer, I see.`
  }
}
class SRMio extends Idol {
  say1() {
    return `Hi ${this.props.producerName}! Call me mio!`
  }
}

const idolFactories = {
  uzuki: {
    sr: (props) => new SRUzuki(props)
  },
  rin: {
    sr: (props) => new SRRin(props)
  },
  mio: {
    sr: (props) => new SRMio(props)
  }
}

const getRandomItem = (items) => {
  const index = parseInt(Math.random() * items.length)
  return items[index]
}

const generateIdol = (idolName, rarity, props) => {
  const idol = idolFactories[idolName][rarity](props)
  idol.idolName = idolName
  idol.rarity = rarity
  return idol
}

export const getRandomIdol = (props) => {
  const idolName = getRandomItem(Object.keys(idolFactories))
  const rarity = getRandomItem(Object.keys(idolFactories[idolName]))
  return generateIdol(idolName, rarity, props)
}
export const serializeIdols = (idols) => {
  if (!idols) {
    return []
  }

  return idols.map(idol => {
    return {idolName: idol.idolName, rarity: idol.rarity, props: idol.props }
  })
}
export const unserializeIdols = (idolsData) => {
  if (!idolsData) {
    return []
  }

  return idolsData.map(({idolName, rarity, props}) => {
    return generateIdol(idolName, rarity, props)
  })
}
