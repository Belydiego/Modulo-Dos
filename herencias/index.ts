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
  getAppsReverse() {}
}
function main() {
  const iphone = new ProductoElectronico(70000, "iphone", true);
  iphone.setUserBatteries(true);
  console.log(iphone);
  console.log(iphone.getPrice());
}
main();
