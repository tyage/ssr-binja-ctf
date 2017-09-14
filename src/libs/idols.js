import idolDatabase from './idolDatabase'

const getRandomItem = (items) => {
  const index = parseInt(Math.random() * items.length)
  return items[index]
}

const generateIdol = (key, props) => {
  const idolClass = idolDatabase[key.rarity][key.idolNo]
  const idol = new idolClass(props)
  idol.key = key
  return idol
}

export const getRandomIdol = (props) => {
  // TODO: choose rarity with rate table
  const rarity = getRandomItem(Object.keys(idolDatabase))
  const idolNo = getRandomItem(Object.keys(idolDatabase[rarity]))
  const idolKey = { rarity, idolNo }
  return generateIdol(idolKey, props)
}
export const serializeIdols = (idols) => {
  if (!idols) {
    return []
  }

  return idols.map(idol => {
    return { key: idol.key, props: idol.props }
  })
}
export const unserializeIdols = (idolsData) => {
  if (!idolsData) {
    return []
  }

  return idolsData.map(({ key, props }) => {
    return generateIdol(key, props)
  })
}
