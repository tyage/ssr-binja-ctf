const idols = {
  uzuki: {
    sr: (name) => `Hello ${name}! This is uzuki! Ganbarimasu!`
  },
  rin: {
    sr: (name) => `Hello ${name}! This is rin! Ganbarimasu!`
  },
  mio: {
    sr: (name) => `Hello ${name}! This is mio! Ganbarimasu!`
  }
}

const getRandomItem = (items) => {
  const index = parseInt(Math.random() * items.length)
  return items[index]
}

export const getNewIdol = () => {
  const idolName = getRandomItem(Object.keys(idols))
  const idolRarity = getRandomItem(Object.keys(idols[idolName]))
  return [idolName, idolRarity]
}
