

$(document).ready(function(){
var movies = [
    { title: "The Godfather", year: 1972, length: 175,
      budget: 6000000, rating: 9.1 },
    { title: "The Shawshank Redemption", year: 1994,
      length: 142, budget: 25000000, rating: 9.1 },
    { title: "The Lord of the Rings 3", year: 2003,
      length: 251, budget: 94000000, rating: 9 }
];
var columns = [
    { head: 'Gender', cl: 'title',
      html: function(row) { return row.title; } },
    { head: 'Year', cl: 'center',
      html: function(row) { return row.year; } },
    { head: 'Length', cl: 'center',
      html: function(row) { return row.length; } },
    { head: 'Budget', cl: 'num',
      html: function(row) { return row.budget; } },
    { head: 'Rating', cl: 'num',
      html: function(row) { return row.rating; } }
];
var table = d3.select('#chart').append('table');
//table column headers
table.append('thead').append('tr')
  .selectAll('th')
  .data(columns).enter()
  .append('th')
  .attr('class', function(row){return row.cl})
  .text(function(row){return row.head});

var tr = table.append('tbody')
    .selectAll('tr')
    .data(movies).enter()
    .append('tr')
    .selectAll('td')
    .data(function(row, i){
      //evaluate column objects against the row
      return columns.map(function(c){
        var cell = {};
        d3.keys(c).forEach(function(k){
          cell[k] = typeof c[k] == 'function' ? c[k](row, i) : c[k];
        });
        return cell;
      });
    }).enter()
    .append('td')
    .html(function(row) {return row.html})
    .attr('class', function(row) {return row.cl});


    var aspect = 600 / 120,
    chart = d3.select('#chart');
    d3.select(window)
      .on("resize", function() {
        var targetWidth = chart.node().getBoundingClientRect().width;
        chart.attr("width", targetWidth);
        chart.attr("height", targetWidth / aspect);
      });


});
