export function isCrossable(type) {
  return type === 'cross' || type === 'surround'
}

export function isLongable(type) {
  return type === 'horizontal' || type === 'array';
}

export function isTallable(type) {
  return type === 'vertical' || type === 'column';
}
