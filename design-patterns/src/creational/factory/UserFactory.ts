import Employee from "./Employee";
import Shopper from "./Shopper";

const userFactory = (
  name: string,
  money: number = 0,
  type?: string,
  employer?: string
) => {
  return type === "employee"
    ? new Employee(name, money, employer)
    : new Shopper(name, money);
};

export default userFactory;
