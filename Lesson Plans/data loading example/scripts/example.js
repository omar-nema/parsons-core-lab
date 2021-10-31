document.addEventListener('DOMContentLoaded', async function () {
  let data = await d3.csv('../assets/data/iris_dataset.csv', d3.autoType);
  console.log(data);
});
