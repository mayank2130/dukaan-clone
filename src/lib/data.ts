import { Product } from "./models/product.model";
import { Store } from "./models/store.model";
import { connectToDb } from "./utils";

export const getProducts = async () => {
  try {
    connectToDb();
    const products = await Product.find();
    return products;
  } catch (err) {
    console.log(err);
    alert("")
  }
};
export const getStores = async () => {
  try {
    connectToDb();
    const stores = await Store.find();
    return stores;
  } catch (err) {
    console.log(err);
  }
};
