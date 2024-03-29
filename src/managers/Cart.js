import fs from "fs";
import managerProducts from "./Product.js";
class Cart {
  constructor(path) {
    this.carts = [];
    this.path = path;
    this.init(path);
  }
  init(path) {
    let file = fs.existsSync(path);
    if (!file) {
      fs.writeFileSync(path, "[]");
      console.log("file created at path: " + this.path);
      return 201;
    } else {
      this.carts = JSON.parse(fs.readFileSync(path, "UTF-8"));
      console.log("data recovered");
      return 200;
    }
  }
  async add_cart() {
    try {
      let data = { products: [] };
      //por ahora vacío y luego contendrá objetos con pid y quantity
      if (this.carts.length > 0) {
        let next_id = this.carts[this.carts.length - 1].id + 1;
        data.id = next_id;
      } else {
        data.id = 1;
      }
      this.carts.push(data);
      let data_json = JSON.stringify(this.carts, null, 2);
      await fs.promises.writeFile(this.path, data_json);
      console.log("id´s created cart: " + data.id);
      return 201;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  read_carts() {
    return this.carts;
  }
  read_cart(id) {
    return this.carts.find((each) => each.id === id);
  }
  async update_cart(cid, pid, x) {
    try {
      let auxCart = this.read_cart(cid);
      let auxProducts = managerProducts.read_products();
      console.log(auxProducts);
      let auxProduct = managerProducts.read_product(pid);
      if (auxProduct.stock > x || auxProduct.stock !== 0) {
        auxCart.products.push(...auxCart.products, {
          id: auxProduct.id,
          units: x,
        });
      }

      for (let index = 0; index < auxProducts.length; index++) {
        let element = auxProducts[index];
        if (pid === element.id) {
          auxProducts[index].stock = element.stock - x;
          managerProducts.update_product(pid, element);
        }
      }
      this.carts.push(auxCart);
      let data_json = JSON.stringify(this.carts, null, 2);
      await fs.promises.writeFile(this.path, data_json);
      return 200;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async destroy_cart(id) {
    try {
      let one = this.carts.find((each) => each.id === id);
      if (one) {
        this.carts = this.carts.filter((each) => each.id !== id);
        let data_json = JSON.stringify(this.carts, null, 2);
        await fs.promises.writeFile(this.path, data_json);
        console.log("delete cart: " + id);
        return 200;
      }
      console.log("not found");
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

let managerCart = new Cart("./src/data/carts.json");

export default managerCart;
