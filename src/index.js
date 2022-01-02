import getProductList from "./mock(server)/data.js";
import renderGoodsList from "./showcase.js";

const productList = getProductList(20);

renderGoodsList(productList);