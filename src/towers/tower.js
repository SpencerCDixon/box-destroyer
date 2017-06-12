export class Tower {
  atack(board) {
    throw new Error('must implement');
  }

  render() {
    throw new Error('must implement a render');
  }

  range() {
    throw new Error('must implement a range it can hit');
  }
}
