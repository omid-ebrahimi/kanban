function getRandomHex(): string {
  return Math.floor(Math.random() * 150 + 106).toString(16).padStart(2, '0')
}

export function getRandomLightColor(): string {
  return '#' + getRandomHex() + getRandomHex() + getRandomHex()
}
