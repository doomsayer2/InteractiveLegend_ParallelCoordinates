import * as d3 from "d3";

const createHintOne = () => {
  console.log("Hint 1");

  const acceleration = d3.select(
    d3
      .select("svg")
      .selectAll(".dimension")
      .nodes()[5]
  );

  const axisPath = acceleration.select(".axis").select("path");
  const axisText = acceleration.select(".axis").select("text");

  axisPath.style("stroke", "#c51b7d");
  axisText.style("fill", "#c51b7d");

  const textBox = axisText.node().getBBox();
  const hint1Group = acceleration.append("g").classed("customD3Hints", true);

  hint1Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", textBox.x + 48)
    .attr("cy", textBox.y - 22)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");

  hint1Group
    .append("text")
    .attr("x", textBox.x + 48)
    .attr("y", textBox.y - 18)
    .style("font-size", "14px")
    .style("font-weight", "bold")
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("1");

  return 1;
};

const createHintTwo = () => {
  console.log("Hint 2");

  const carType = d3.select(
    d3
      .select("svg")
      .selectAll(".dimension")
      .nodes()[0]
  );
  const car = carType
    .select(".axis")
    .selectAll(".tick")
    .nodes()[19];

  const carText = d3.select(car).select("text");

  const textBox = carText.node().getBBox();
  const hint2Group = carType.append("g").classed("customD3Hints", true);
  
  carText.style("fill", "#c51b7d").style("font-weight", "bold");

  hint2Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", textBox.x - 15)
    .attr("cy", textBox.y + 300)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");

  hint2Group
    .append("text")
    .attr("x", textBox.x - 15)
    .attr("y", textBox.y + 305)
    .style("font-size", "14px")
    .style("font-weight", "bold")
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("2");

  return 2;
};

const createHintThree = () => {
  console.log("Hint 3");

  return 3;
};

const createHintFour = () => {
  console.log("Hint 4");

  return 4;
};

const createHintFive = () => {
  console.log("Hint 5");

  return 5;
};

const createHintSix = () => {
  console.log("Hint 6");

  return 6;
};

const removeAllHints = () => {
  d3.selectAll(".customD3Hints").remove();
  console.log("Remove Hints");

  const acceleration = d3.select(
    d3
      .select("svg")
      .selectAll(".dimension")
      .nodes()[5]
  );
  const axisPath = acceleration.select(".axis").select("path");
  const axisText = acceleration.select(".axis").select("text");

  axisPath.style("stroke", "rgb(34, 34, 34)");
  axisText.style("fill", "black");

  const carType = d3.select(
    d3
      .select("svg")
      .selectAll(".dimension")
      .nodes()[0]
  );

  const car = carType
    .select(".axis")
    .selectAll(".tick")
    .nodes()[19];

  const carText = d3.select(car).select("text");
  carText.style("fill", "black").style("font-weight", "normal");
};

export {
  createHintOne,
  createHintTwo,
  createHintThree,
  createHintFour,
  createHintFive,
  createHintSix,
  removeAllHints
};
