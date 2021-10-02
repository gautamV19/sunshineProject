const root = "https://power.larc.nasa.gov/api/temporal";
const daily = async(params, loc, duration)=>{
    const parameters = params.join(",");
    const url = `${root}/daily/point?parameters=${parameters}&community=RE&longitude=${loc.lng}&latitude=${loc.lat}&start=${duration.s}&end=${duration.e}&format=JSON`
    const response = await fetch(url);
    const data = await response.json();
    const resParameters = data["properties"]["parameter"];
    const res = {};
    for (var p in resParameters) {
      res[p] = new Array();
      for (var k in resParameters[p]) {
        if(resParameters[p][k]===-999){
          res[p].push(0);
        }else{
          res[p].push(resParameters[p][k]);
        }
      }
    }

    return res;
}
const monthly = async(params, loc, duration)=>{
  const parameters = params.join(",");
  const url = `${root}/monthly/point?parameters=${parameters}&community=RE&longitude=${loc.lng}&latitude=${loc.lat}&start=${duration.s}&end=${duration.e}&format=JSON`
  const response = await fetch(url);
  const data = await response.json();
  const resParameters = data["properties"]["parameter"];
  const res = {};
    for (var p in resParameters) {
      res[p] = new Array();
      for (var k in resParameters[p]) {
        res[p].push(resParameters[p][k]);
      }
    }

    return res;
}

export {daily, monthly};