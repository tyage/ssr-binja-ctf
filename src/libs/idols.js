class Idol {
  constructor(props) {
    this.props = Object.assign(props, {
      defaultAction: 'say'
    })
  }
  say() {}
}

class SRUzuki extends Idol {
  say() {
    return `Hello ${this.props.producerName}! This is uzuki! Ganbarimasu!`
  }
}

const idolFactories = {
  uzuki: {
    sr: (props) => new SRUzuki(props)
  },
  rin: {
    sr: (props) => new SRUzuki(props)
  },
  mio: {
    sr: (props) => new SRUzuki(props)
  }
}

const getRandomItem = (items) => {
  const index = parseInt(Math.random() * items.length)
  return items[index]
}

const generateIdol = (name, rarity, props) => {
  const idol = idolFactories[name][rarity](props)
  idol.name = name
  idol.rarity = rarity
  return idol
}

export const getRandomIdol = (props) => {
  const name = getRandomItem(Object.keys(idolFactories))
  const rarity = getRandomItem(Object.keys(idolFactories[name]))
  return generateIdol(name, rarity, props)
}
export const serializeIdols = (idols) => {
  if (!idols) {
    return []
  }

  return idols.map(idol => {
    return {name: idol.name, rarity: idol.rarity, props: idol.props }
  })
}
export const unserializeIdols = (idolsData) => {
  if (!idolsData) {
    return []
  }

  return idolsData.map(({name, rarity, props}) => {
    return generateIdol(name, rarity, props)
  })
}
