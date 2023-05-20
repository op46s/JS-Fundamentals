function towns(arr) {
  let collectTownData = [];

  for (let i = 0; i < arr.length; i++) {
    let [town, latitude, longitude] = arr[i].split(" | ");
    collectTownData.push({
      town: town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    });
  }
  for (let obj of collectTownData) {
    console.log(obj);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
//towns(['Plovdiv | 136.45 | 812.575']);
