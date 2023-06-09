import products from "../models/products.js";

const getproduct = (req, res) => {
  var query = { _id: req.params.id };
  products
    .findOne(query)
    .then((result) => {
      res.render("product-page", {
        prod: result,
        Email:
          req.session && req.session.Email !== undefined
            ? req.session.Email
            : "",
        Type:
          req.session && req.session.Type !== undefined ? req.session.Type : "",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getproduct };
