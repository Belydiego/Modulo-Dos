import * as funcionReverse from "lodash/reverse";

class Product {
  price: number;
  name: string;
  constructor(price: number, name: string) {
    this.price = price;
    this.name = name;
  }
  getPrice() {
    return this.price;
  }
}
class ProductoElectronico extends Product {
  // clase productoelectronico hereda las propiedades de la clase madre product
  apps: string[];
  constructor(price: number, name: string, userBatteries) {
    super(price, name);
    this.userBatteries = userBatteries;
  }
  userBatteries: boolean = false;
  setUserBatteries(usa: boolean) {
    this.userBatteries = usa;
  }
  setApps(apps: string[]) {
    this.apps = apps;
  }
  getAppsReverse() {
    return funcionReverse(this.apps);
  }
}
function main() {
  const iphone = new ProductoElectronico(70000, "iphone", true);
  iphone.setUserBatteries(true);
  iphone.setApps(["1 whatsapp", "2 instagram", " 3 chrome"]);
  console.log(iphone);
  console.log(iphone.getPrice());
  console.log(iphone.apps);
  console.log(iphone.getAppsReverse());
}
main();
