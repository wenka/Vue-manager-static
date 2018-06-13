////////////////////////////工具//////////////////////////////////////
const getRandomColor = function () {
  let colors = [
    'rgb(21,174,103)',
    'rgb(245,163,59)',
    'rgb(255,230,135)',
    'rgb(194,217,78)',
    'rgb(195,123,177)',
    'rgb(125,205,244)'
  ]
  return colors[~~(Math.random() * colors.length)]
}

const getRandomSize = function () {
  let min = 10
  let max = 30
  let fontSizes = []
  for (let i = min; i <= max; i += 2) {
    fontSizes.push(i + 'px')
  }
  let index = ~~(Math.random() * fontSizes.length)
  return fontSizes[index]
}
export {
  getRandomColor,
  getRandomSize
}
