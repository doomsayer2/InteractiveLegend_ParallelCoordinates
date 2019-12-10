import * as d3 from "d3";

const createHintOne = () => {
  const paths = d3.select(".vegaViz1 > svg").selectAll("path");
  const oneCell = d3.select(paths.nodes()[25]);
  const oneCellBox = oneCell.node().getBBox();

  const hint1Group = d3
    .select(".vegaViz1 > svg")
    .select(".layer_0_marks")
    .append("g")
    .classed("customD3Hints", true);

  hint1Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", oneCellBox.x + oneCellBox.width / 2)
    .attr("cy", oneCellBox.y + oneCellBox.height / 2)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");
  hint1Group
    .append("text")
    .attr("x", oneCellBox.x + oneCellBox.width / 2)
    .attr("y", oneCellBox.y + oneCellBox.height / 2 + 5)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("1");

  return 1;
};

const createHintTwo = () => {
  const legend = d3.select(".vegaViz1 > svg").select(".role-legend-title");
  const legendTextLen = legend
    .select("text")
    .node()
    .getComputedTextLength();

  legend
    .select("text")
    .style("fill", "#C51B7D")
    .attr("font-weight", "bolder");

  const hint3Group = legend.append("g").classed("customD3Hints", true);

  hint3Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", legendTextLen / 2)
    .attr("cy", -15)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");
  hint3Group
    .append("text")
    .attr("x", legendTextLen / 2)
    .attr("y", -10)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("2");

  return 2;
};

const createHintThree = () => {
  const xAxisText = d3.select(d3.selectAll(".role-axis-title").nodes()[0]);
  const yAxisText = d3.select(d3.selectAll(".role-axis-title").nodes()[1]);

  xAxisText.select("text").style("fill", "#C51B7D");
  yAxisText.select("text").style("fill", "#C51B7D");

  const paths = d3.select(".vegaViz1 > svg").selectAll("path");
  const oneCell = d3.select(paths.nodes()[3]);
  const oneCellBox = oneCell.node().getBBox();

  const hint2Group = d3
    .select(".vegaViz1 > svg")
    .select(".layer_0_marks")
    .append("g")
    .classed("customD3Hints", true);

  hint2Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", oneCellBox.x - oneCellBox.width / 2 + 5)
    .attr("cy", oneCellBox.y - oneCellBox.height / 2 + 5)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");
  hint2Group
    .append("text")
    .attr("x", oneCellBox.x - oneCellBox.width / 2 + 5)
    .attr("y", oneCellBox.y - oneCellBox.height / 2 + 10)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("3");

  return 3;
};

const createHintFour = () => {
  const munich = d3
    .select(".vegaViz1 > svg")
    .selectAll(".role-axis-label")
    .nodes()[1];
  const munichText = d3.select(munich).select("text");
  const feb = d3
    .select(".vegaViz1 > svg")
    .selectAll(".role-axis-label")
    .nodes()[0];
  const febText = d3.select(
    d3
      .select(feb)
      .selectAll("text")
      .nodes()[1]
  );

  munichText.style("fill", "#C51B7D").attr("font-weight", "bold");
  febText.style("fill", "#C51B7D").attr("font-weight", "bold");

  const paths = d3.select(".vegaViz1 > svg").selectAll("path");
  const oneCell = d3.select(paths.nodes()[4]);
  const oneCellBox = oneCell.node().getBBox();

  const hint4Group = d3
    .select(".vegaViz1 > svg")
    .select(".layer_0_marks")
    .append("g")
    .classed("customD3Hints", true);

  hint4Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", oneCellBox.x + oneCellBox.width / 2)
    .attr("cy", oneCellBox.y + oneCellBox.height / 2)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");
  hint4Group
    .append("text")
    .attr("x", oneCellBox.x + oneCellBox.width / 2)
    .attr("y", oneCellBox.y + oneCellBox.height / 2 + 5)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("4");

  return 4;
};

const createHintFive = () => {
  const tallinn = d3
    .select(".vegaViz1 > svg")
    .selectAll(".role-axis-label")
    .nodes()[1];
  const tallinnText = d3.select(tallinn).select("text:nth-child(3)");
  const xAxisLabel = d3
    .select(".vegaViz1 > svg")
    .selectAll(".role-axis-label")
    .nodes()[0];
  
  const oct = d3.select(xAxisLabel).select("text:nth-child(10)");
  const nov = d3.select(xAxisLabel).select("text:nth-child(11)");
  const dez = d3.select(xAxisLabel).select("text:nth-child(12)");
  const dezTransform = dez.attr("transform");
  let dezBox = dezTransform
    .substring(dezTransform.indexOf("(") + 1, dezTransform.indexOf(")"))
    .split(",");
  dezBox = dezBox.map(e => parseInt(e, 0));

  // febBox = febBox.map(e => parseInt(e, 0));
  tallinnText.style("fill", "#C51B7D").attr("font-weight", "bold");  
  oct.style("fill", "#C51B7D").attr("font-weight", "bold");
  nov.style("fill", "#C51B7D").attr("font-weight", "bold");
  dez.style("fill", "#C51B7D").attr("font-weight", "bold");

  // Get Boxes of Tallin for the 4 months
  const paths = d3.select(".vegaViz1 > svg").selectAll("path");
  const tallinnSept = d3.select(paths.nodes()[36]);
  const tallinnSeptBox = tallinnSept.node().getBBox();
  const tallinnDez = d3.select(paths.nodes()[38]);
  const tallinnDezBox = tallinnDez.node().getBBox();

  const hint5Group = d3
    .select(".vegaViz1 > svg")
    .select(".role-axis-label")
    .append("g")
    .classed("customD3Hints", true);

  hint5Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", dezBox[0] - 18)
    .attr("cy", dezBox[1] - 25)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");
  hint5Group
    .append("text")
    .attr("x", dezBox[0] - 18)
    .attr("y", dezBox[1] - 20)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("5");

  hint5Group
    .append("line")
    .attr("x1", tallinnSeptBox.x)
    .attr("y1", tallinnSeptBox.y)
    .attr("x2", tallinnDezBox.x + tallinnDezBox.width)
    .attr("y2", tallinnDezBox.y)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  hint5Group
    .append("line")
    .attr("x1", tallinnSeptBox.x)
    .attr("y1", tallinnSeptBox.y)
    .attr("x2", tallinnSeptBox.x)
    .attr("y2", tallinnSeptBox.y + tallinnDezBox.height)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  hint5Group
    .append("line")
    .attr("x1", tallinnDezBox.x + tallinnDezBox.width)
    .attr("y1", tallinnDezBox.y)
    .attr("x2", tallinnDezBox.x + tallinnDezBox.width)
    .attr("y2", tallinnDezBox.y + tallinnDezBox.height)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  hint5Group
    .append("line")
    .attr("x1", tallinnSeptBox.x)
    .attr("y1", tallinnSeptBox.y + tallinnSeptBox.height)
    .attr("x2", tallinnDezBox.x + tallinnDezBox.width)
    .attr("y2", tallinnDezBox.y + tallinnSeptBox.height)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  return 5;
};

const createHintSix = () => {
  const yGrid = d3.select(".vegaViz1 > svg").select(".role-axis-grid");

  const juneLine = yGrid.select("line:nth-child(7)");
  const juneLineTransfrom = juneLine.attr("transform");
  let juneLineBox = juneLineTransfrom
    .substring(
      juneLineTransfrom.indexOf("(") + 1,
      juneLineTransfrom.indexOf(")")
    )
    .split(",");
  juneLineBox = juneLineBox.map(e => parseInt(e, 0));
  let juneLineLength = parseInt(juneLine.attr("y2"), 0);

  const dezLine = d3
    .select(".role-axis")
    .node()
    .getBBox();
  const paths = d3.select(".vegaViz1 > svg").selectAll("path");
  const tallinnDez = d3.select(paths.nodes()[38]);
  const tallinnDezBox = tallinnDez.node().getBBox();

  // Increase svg size in order to add lines below chart also move the chart back up half of the increased value
  const heightOffset = 60;
  const oldHeight = d3.select("svg").attr("height");
  d3.select("svg").attr("height", parseInt(oldHeight, 0) + heightOffset);
  const oldTransform = d3
    .select("svg")
    .select("g")
    .attr("transform");
  const oldTransformValues = oldTransform
    .substring(oldTransform.indexOf("(") + 1, oldTransform.indexOf(")"))
    .split(",");
  d3.select("svg")
    .select("g")
    .attr(
      "transform",
      `translate(${oldTransformValues[0]}, ${oldTransformValues[1] -
        heightOffset / 2})`
    );

  const hint6Group = d3
    .select(".vegaViz1 > svg")
    .select(".layer_0_marks")
    .append("g")
    .classed("customD3Hints", true);

  // hint6Group
  //   .append("line")
  //   .attr("x1", juneLineBox[0])
  //   .attr("y1", juneLineBox[1])
  //   .attr("x2", juneLineBox[0])
  //   .attr("y2", juneLineLength)
  //   .attr("stroke", "#C51B7D")
  //   .attr("stroke-width", 2);

  hint6Group
    .append("line")
    .attr("x1", 0)
    .attr("y1", juneLineLength + 15)
    .attr("x2", juneLineBox[0])
    .attr("y2", juneLineLength + 15)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  /*left small line*/
  hint6Group
    .append("line")
    .attr("x1", 0)
    .attr("y1", juneLineLength + 15)
    .attr("x2", 0)
    .attr("y2", juneLineLength)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  /*middle small line*/
  hint6Group
    .append("line")
    .attr("x1", juneLineBox[0])
    .attr("y1", juneLineLength + 15)
    .attr("x2", juneLineBox[0])
    .attr("y2", juneLineLength)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  /*right small line*/
  hint6Group
    .append("line")
    .attr("x1", dezLine.width + tallinnDezBox.width)
    .attr("y1", juneLineLength + 15)
    .attr("x2", dezLine.width + tallinnDezBox.width)
    .attr("y2", juneLineLength)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  hint6Group
    .append("line")
    .attr("x1", juneLineBox[0])
    .attr("y1", juneLineLength + 15)
    .attr("x2", dezLine.width + tallinnDezBox.width)
    .attr("y2", juneLineLength + 15)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  hint6Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", juneLineBox[0] / 2)
    .attr("cy", juneLineLength + 30)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");
  hint6Group
    .append("text")
    .attr("x", juneLineBox[0] / 2)
    .attr("y", juneLineLength + 35)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("6");

  return 6;
};

const removeAllHints = () => {
  d3.selectAll(".customD3Hints").remove();

  // Custom Changes to the elements itself and not additions
  const xAxisText = d3.select(d3.selectAll(".role-axis-title").nodes()[0]);
  const yAxisText = d3.select(d3.selectAll(".role-axis-title").nodes()[1]);
  xAxisText.select("text").style("fill", "rgb(0,0,0)");
  yAxisText.select("text").style("fill", "rgb(0,0,0)");

  const legend = d3.select(".vegaViz1 > svg").select(".role-legend-title");
  legend
    .select("text")
    .style("fill", "rgb(0,0,0)")
    .attr("font-weight", "bold");

  const munich = d3
    .select(".vegaViz1 > svg")
    .selectAll(".role-axis-label")
    .nodes()[1];
  const munichText = d3.select(munich).select("text");
  const feb = d3
    .select(".vegaViz1 > svg")
    .selectAll(".role-axis-label")
    .nodes()[0];
  const febText = d3.select(
    d3
      .select(feb)
      .selectAll("text")
      .nodes()[1]
  );
  munichText.style("fill", "rgb(0,0,0)").attr("font-weight", "normal");
  febText.style("fill", "rgb(0,0,0)").attr("font-weight", "normal");

  const tallinn = d3
    .select(".vegaViz1 > svg")
    .selectAll(".role-axis-label")
    .nodes()[1];
  const tallinnText = d3.select(tallinn).select("text:nth-child(3)");
  tallinnText.style("fill", "rgb(0,0,0)").attr("font-weight", "normal");

  const xAxisLabel = d3
    .select(".vegaViz1 > svg")
    .selectAll(".role-axis-label")
    .nodes()[0];
 
  const oct = d3.select(xAxisLabel).select("text:nth-child(10)");
  const nov = d3.select(xAxisLabel).select("text:nth-child(11)");
  const dez = d3.select(xAxisLabel).select("text:nth-child(12)");
 
  oct.style("fill", "rgb(0,0,0)").attr("font-weight", "normal");
  nov.style("fill", "rgb(0,0,0)").attr("font-weight", "normal");
  dez.style("fill", "rgb(0,0,0)").attr("font-weight", "normal");
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
