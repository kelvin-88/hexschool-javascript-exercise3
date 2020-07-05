/* global Vue */
/* eslint-disable no-new */

new Vue({
  el: "#app",
  data: {
    products: [
      {
        id: 1586934917210,
        unit: "台",
        category: "掌上主機",
        title: "Switch",
        origin_price: 20000,
        price: 9980,
        description: "想玩就玩",
        content: "動森太好玩惹",
        is_enabled: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      },
      {
        id: 1196934917910,
        unit: "台",
        category: "主機",
        title: "PS5 Wifi",
        origin_price: 29999,
        description: "次世代超強規格",
        content: "我也想要換一台 PS5 Wifi",
        price: 9487,
        is_enabled: 0,
        imageUrl:
          "https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      },
    ],
    tempProduct: {
      imageUrl: [],
    },
    tempIndex: 0,
  },
  methods: {
    updateProduct() {
      // newly added
      console.log(this.tempProduct);
      switch (this.isNew) {
        case true: // add new product
          this.products.push(this.tempProduct);
          break;
        case false: // edit product
          /*
          for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id == this.tempProduct.id) {
              //console.log(i);
              this.products[i] = this.tempProduct;
              //this.products.$set(i, this.tempProduct);
              this.$set(this.products, i, this.tempProduct);
            }
          }
          */
          this.products[this.tempIndex] = this.tempProduct;
          this.$set(this.products, this.tempIndex, this.tempProduct);
          break;
      }
      $("#productModal").modal("hide");
      //console.log(this.products);
    },
    openModal(isNew, item, index) {
      this.tempIndex = index;
      console.log(this.tempIndex);
      switch (isNew) {
        case "new":
          this.tempProduct = {
            imageUrl: [],
          };
          this.isNew = true;
          $("#productModal").modal("show");
          break;
        case "edit":
          this.tempProduct = Object.assign({}, item);
          this.isNew = false;
          $("#productModal").modal("show");
          break;
        case "delete":
          $("#delProductModal").modal("show");
          this.tempProduct = Object.assign({}, item);
          break;
        default:
          break;
      }
    },
    delProduct() {
      // newly added
      /*
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id == this.tempProduct.id) {
          console.log(i);
          this.products.splice(i, 1);
        }
      }
      */
      this.products.splice(this.tempIndex, 1);
      //console.log(this.products);
      $("#delProductModal").modal("hide");
    },
  },
});
