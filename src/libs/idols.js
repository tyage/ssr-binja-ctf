import idolDatabase from './idolDatabase'

const getRandomItem = (items) => {
  const index = parseInt(Math.random() * items.length)
  return items[index]
}

const generateIdol = (key) => {
  const [ rarity, idolNo ] = key
  const idolClass = idolDatabase[rarity][idolNo]
  return new idolClass(key)
}

export const getRandomIdol = () => {
  // TODO: choose rarity with rate table
  const rarity = getRandomItem(Object.keys(idolDatabase))
  const idolNo = getRandomItem(Object.keys(idolDatabase[rarity]))
  const idolKey = [ rarity, idolNo ]
  return generateIdol(idolKey)
}
export const serializeIdols = (idols) => {
  if (!idols) {
    return []
  }

  return idols.map(idol => {
    return { key: idol.key }
  })
}
export const unserializeIdols = (idolsData) => {
  if (!idolsData) {
    return []
  }

  return idolsData.map(({ key }) => {
    return generateIdol(key)
  })
}
