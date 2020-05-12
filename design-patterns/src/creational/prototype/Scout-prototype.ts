import Shopper from './Shopper'


class Scouter extends Shopper {

  constructor(name: string) {
    super(name);
    this.addItemToList('camping knife');
    this.addItemToList('tent');
    this.addItemToList('backpack');
    this.addItemToList('map');
  }
}

export default Scouter;