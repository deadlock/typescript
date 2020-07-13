export default interface ObserverInterface {
  notify: (storeName: string, discount: number) => void;
}
