document.addEventListener('DOMContentLoaded', async function () {
  let mapData = await d3.json('./assets/data/pumageo.geojson');

  let mapFillData = await d3.csv('./assets/data/pumaData.csv');
  //reformat mapFillData to me a object with keys that can be looked up
  let mapFillObject = {};
  mapFillData.forEach((d) => {
    mapFillObject[d.pumaRegion] = d.fakePopulation;
  });

  //CREATE MAP NODE AND GEOMETRY
  let mapNode = d3
    .select('body')
    .append('svg')
    .attr('class', 'map')
    .style('width', '500px')
    .style('height', '500px')
    .append('g')
    .attr('transform', 'translate(0,0) scale(1)');
  var bbox = d3.select('.map').node().getBoundingClientRect();
  var mapw = bbox.width - 60;
  // d3.select('.map').style('height', mapw.toString() + 'px');
  bbox = d3.select('.map').node().getBoundingClientRect();
  var maph = bbox.height;

  //CREATE A COLOR SCALE
  let colorScale = d3
    .scaleLinear()
    .domain([0, d3.max(mapFillData, (d) => d.fakePopulation)])
    .range(['white', 'black']);

  //ASSOCIATE MAP NODE WITH MAP GEOMETRY DATA
  var projection = d3
    .geoIdentity()
    .reflectY(true)
    .angle(20)
    .fitSize([mapw, maph], mapData);
  var path = d3.geoPath().projection(projection);
  let map = mapNode
    .selectAll('path')
    .data(mapData.features)
    .join('path')
    .attr('d', path)
    .attr('class', (d) => d.properties.puma)
    .attr('fill', (d) => {
      let id = d.properties.puma;
      let population = mapFillObject[id];
      return colorScale(population);
    })
    .on('mouseover', function (d) {
      let data = d3.select(this).data()[0];
      let id = data.properties.puma;
      let population = mapFillObject[id];
      console.log('puma id: ', id, ' population: ', population);
    });

  //MAKE MAP ZOOMABLE/PANNABLE
  var zoom = d3
    .zoom()
    .translateExtent([
      [-mapw, -maph],
      [mapw, maph],
    ])
    .scaleExtent([1, 5])
    .on('zoom', zoomed);
  function zoomed({ transform }) {
    map.attr('transform', transform);
  }
  map.call(zoom);
});
