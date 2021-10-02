import products from "./products.json"
var params = []
for (var p of products){
    params.push(p.param);
}
export default params;