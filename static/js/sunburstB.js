//=========================================================================
//Credit https://github.com/vasturiano/sunburst-chart for sunburst js code
//=========================================================================

var total = sbData['total'];
var _total = [total[1], total[3], total[5]];

var men = sbData['men'];
var _men = [men[1], men[3], men[5]];

var women = sbData['women'];
var _women = [women[1], women[3], women[5]];

var white = sbData['white'];
var _white = [white[1], white[3], white[5]];

var black = sbData['black'];
var _black = [black[1], black[3], black[5]];

var asian = sbData['asian'];
var _asian = [asian[1], asian[3], asian[5]];

var hispanic = sbData['hispanic'];
var _hispanic = [hispanic[1], hispanic[3], hispanic[5]];


var colors = ["#4e5552", "#263a46", "#9f3b42",
              "#415a6b", "#8092a0", "#4c5d72", 
              "#5c6a7c", "#6c7786", "#7c8490", 
              "#957CA5", "#a096b7", "#abb0c9", 
              "#b6cbdb", "#c1e5ed", "#ccffff"];



const data = {
  name: '2019 US Employment by Ethnicity',
  color: colors[0],
  children: [{
    name: `Employed (${(100*_total[1].total/_total[0].total).toFixed(2)}%)`,
    color: colors[1],
    size: _total[1].total,
    children: [{
      name: `Caucasian (${(100*_white[1].total/_total[1].total).toFixed(2)}%)`,
      color: colors[5],
      size: _white[1].total,
      children: [{
        name: `< HS Diploma (${(100*_white[1].less_hs/_white[1].total).toFixed(2)}%)`,
        color: colors[9],
        size: _white[1].less_hs
      }, {
        name: `HS Diploma (${(100*_white[1].hs_diploma/_white[1].total).toFixed(2)}%)`,
        color: colors[10],
        size: _white[1].hs_diploma
      }, {
        name: `Some College (${(100*_white[1].some_college/_white[1].total).toFixed(2)}%)`,
        color: colors[11],
        size: _white[1].some_college
      }, {
        name: `Associates (${(100*_white[1].associate/_white[1].total).toFixed(2)}%)`,
        color: colors[12],
        size: _white[1].associate
      }, {
        name: `Bachelors (${(100*_white[1].bachelor/_white[1].total).toFixed(2)}%)`,
        color: colors[13],
        size: _white[1].bachelor
      }, {
        name: `Advanced Degree (${(100*_white[1].adv_degree/_white[1].total).toFixed(2)}%)`,
        color: colors[14],
        size: _white[1].adv_degree
      }]
    }, {
      name: `African American (${(100*_black[1].total/_total[1].total).toFixed(2)}%)`,
      color: colors[6],
      size: _black[1].total,
      children: [{
        name: `< HS Diploma (${(100*_black[1].less_hs/_black[1].total).toFixed(2)}%)`,
        color: colors[9],
        size: _black[1].less_hs
      }, {
        name: `HS Diploma (${(100*_black[1].hs_diploma/_black[1].total).toFixed(2)}%)`,
        color: colors[10],
        size: _black[1].hs_diploma
      }, {
        name: `Some College (${(100*_black[1].some_college/_black[1].total).toFixed(2)}%)`,
        color: colors[11],
        size: _black[1].some_college
      }, {
        name: `Associates (${(100*_black[1].associate/_black[1].total).toFixed(2)}%)`,
        color: colors[12],
        size: _black[1].associate
      }, {
        name: `Bachelors (${(100*_black[1].bachelor/_black[1].total).toFixed(2)}%)`,
        color: colors[13],
        size: _black[1].bachelor
      }, {
        name: `Advanced Degree (${(100*_black[1].adv_degree/_black[1].total).toFixed(2)}%)`,
        color: colors[14],
        size: _black[1].adv_degree
      }]
    }, {
      name: `Asian (${(100*_asian[1].total/_total[1].total).toFixed(2)}%)`,
      color: colors[7],
      size: _asian[1].total,
      children: [{
        name: `< HS Diploma (${(100*_asian[1].less_hs/_asian[1].total).toFixed(2)}%)`,
        color: colors[9],
        size: _asian[1].less_hs
      }, {
        name: `HS Diploma (${(100*_asian[1].hs_diploma/_asian[1].total).toFixed(2)}%)`,
        color: colors[10],
        size: _asian[1].hs_diploma
      }, {
        name: `Some College (${(100*_asian[1].some_college/_asian[1].total).toFixed(2)}%)`,
        color: colors[11],
        size: _asian[1].some_college
      }, {
        name: `Associates (${(100*_asian[1].associate/_asian[1].total).toFixed(2)}%)`,
        color: colors[12],
        size: _asian[1].associate
      }, {
        name: `Bachelors (${(100*_asian[1].bachelor/_asian[1].total).toFixed(2)}%)`,
        color: colors[13],
        size: _asian[1].bachelor
      }, {
        name: `Advanced Degree (${(100*_asian[1].adv_degree/_asian[1].total).toFixed(2)}%)`,
        color: colors[14],
        size: _asian[1].adv_degree
      }]
    }, {
      name: `Hispanic (${(100*_hispanic[1].total/_total[1].total).toFixed(2)}%)`,
      color: colors[8],
      size: _hispanic[1].total,
      children: [{
        name: `< HS Diploma (${(100*_hispanic[1].less_hs/_hispanic[1].total).toFixed(2)}%)`,
        color: colors[9],
        size: _hispanic[1].less_hs
      }, {
        name: `HS Diploma (${(100*_hispanic[1].hs_diploma/_hispanic[1].total).toFixed(2)}%)`,
        color: colors[10],
        size: _hispanic[1].hs_diploma
      }, {
        name: `Some College (${(100*_hispanic[1].some_college/_hispanic[1].total).toFixed(2)}%)`,
        color: colors[11],
        size: _hispanic[1].some_college
      }, {
        name: `Associates (${(100*_hispanic[1].associate/_hispanic[1].total).toFixed(2)}%)`,
        color: colors[12],
        size: _hispanic[1].associate
      }, {
        name: `Bachelors (${(100*_hispanic[1].bachelor/_hispanic[1].total).toFixed(2)}%)`,
        color: colors[13],
        size: _hispanic[1].bachelor
      }, {
        name: `Advanced Degree (${(100*_hispanic[1].adv_degree/_hispanic[1].total).toFixed(2)}%)`,
        color: colors[14],
        size: _hispanic[1].adv_degree
      }]
    }]
  }, {
    name: `Unemployed (${(100*_total[2].total/_total[0].total).toFixed(2)}%)`,
    color: colors[2],
    size: _total[2].total,
    children: [{
      name: `Caucasian (${(100*_white[2].total/_total[2].total).toFixed(2)}%)`,
      color: colors[5],
      size: _white[2].total,
      children: [{
        name: `< HS Diploma (${(100*_white[2].less_hs/_white[2].total).toFixed(2)}%)`,
        color: colors[9],
        size: _white[2].less_hs
      }, {
        name: `HS Diploma (${(100*_white[2].hs_diploma/_white[2].total).toFixed(2)}%)`,
        color: colors[10],
        size: _white[2].hs_diploma
      }, {
        name: `Some College (${(100*_white[2].some_college/_white[2].total).toFixed(2)}%)`,
        color: colors[11],
        size: _white[2].some_college
      }, {
        name: `Associates (${(100*_white[2].associate/_white[2].total).toFixed(2)}%)`,
        color: colors[12],
        size: _white[2].associate
      }, {
        name: `Bachelors (${(100*_white[2].bachelor/_white[2].total).toFixed(2)}%)`,
        color: colors[13],
        size: _white[2].bachelor
      }, {
        name: `Advanced Degree (${(100*_white[2].adv_degree/_white[2].total).toFixed(2)}%)`,
        color: colors[14],
        size: _white[2].adv_degree
      }]
    }, {
      name: `African American (${(100*_black[2].total/_total[2].total).toFixed(2)}%)`,
      color: colors[6],
      size: _black[2].total,
      children: [{
        name: `< HS Diploma (${(100*_black[2].less_hs/_black[2].total).toFixed(2)}%)`,
        color: colors[9],
        size: _black[2].less_hs
      }, {
        name: `HS Diploma (${(100*_black[2].hs_diploma/_black[2].total).toFixed(2)}%)`,
        color: colors[10],
        size: _black[2].hs_diploma
      }, {
        name: `Some College (${(100*_black[2].some_college/_black[2].total).toFixed(2)}%)`,
        color: colors[11],
        size: _black[2].some_college
      }, {
        name: `Associates (${(100*_black[2].associate/_black[2].total).toFixed(2)}%)`,
        color: colors[12],
        size: _black[2].associate
      }, {
        name: `Bachelors (${(100*_black[2].bachelor/_black[2].total).toFixed(2)}%)`,
        color: colors[13],
        size: _black[2].bachelor
      }, {
        name: `Advanced Degree (${(100*_black[2].adv_degree/_black[2].total).toFixed(2)}%)`,
        color: colors[14],
        size: _black[2].adv_degree
      }]
    }, {
      name: `Asian (${(100*_asian[2].total/_total[2].total).toFixed(2)}%)`,
      color: colors[7],
      size: _asian[2].total,
      children: [{
        name: `< HS Diploma (${(100*_asian[2].less_hs/_asian[2].total).toFixed(2)}%)`,
        color: colors[9],
        size: _asian[2].less_hs
      }, {
        name: `HS Diploma (${(100*_asian[2].hs_diploma/_asian[2].total).toFixed(2)}%)`,
        color: colors[10],
        size: _asian[2].hs_diploma
      }, {
        name: `Some College (${(100*_asian[2].some_college/_asian[2].total).toFixed(2)}%)`,
        color: colors[11],
        size: _asian[2].some_college
      }, {
        name: `Associates (${(100*_asian[2].associate/_asian[2].total).toFixed(2)}%)`,
        color: colors[12],
        size: _asian[2].associate
      }, {
        name: `Bachelors (${(100*_asian[2].bachelor/_asian[2].total).toFixed(2)}%)`,
        color: colors[13],
        size: _asian[2].bachelor
      }, {
        name: `Advanced Degree (${(100*_asian[2].adv_degree/_asian[2].total).toFixed(2)}%)`,
        color: colors[14],
        size: _asian[2].adv_degree
      }]
    }, {
      name: `Hispanic (${(100*_hispanic[2].total/_total[2].total).toFixed(2)}%)`,
      color: colors[8],
      size: _hispanic[2].total,
      children: [{
        name: `< HS Diploma (${(100*_hispanic[2].less_hs/_hispanic[2].total).toFixed(2)}%)`,
        color: colors[9],
        size: _hispanic[2].less_hs
      }, {
        name: `HS Diploma (${(100*_hispanic[2].hs_diploma/_hispanic[2].total).toFixed(2)}%)`,
        color: colors[10],
        size: _hispanic[2].hs_diploma
      }, {
        name: `Some College (${(100*_hispanic[2].some_college/_hispanic[2].total).toFixed(2)}%)`,
        color: colors[11],
        size: _hispanic[2].some_college
      }, {
        name: `Associates (${(100*_hispanic[2].associate/_hispanic[2].total).toFixed(2)}%)`,
        color: colors[12],
        size: _hispanic[2].associate
      }, {
        name: `Bachelors (${(100*_hispanic[2].bachelor/_hispanic[2].total).toFixed(2)}%)`,
        color: colors[13],
        size: _hispanic[2].bachelor
      }, {
        name: `Advanced Degree (${(100*_hispanic[2].adv_degree/_hispanic[2].total).toFixed(2)}%)`,
        color: colors[14],
        size: _hispanic[2].adv_degree
      }]
    }]
  }]
}



Sunburst()
    .data(data)
    .size('size')
    .color('color')
    .radiusScaleExponent(1.5)
    (document.getElementById('chart'));


    