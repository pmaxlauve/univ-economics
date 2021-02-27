

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


var colors = ["#B4D8C9", "#3f3650", "#d65858",
              "#74959c", "#7851a9", "#5f6393", 
              "#255955", "#313236", "#201a34", 
              "#957CA5", "#91ACBA", "#F6DEB9", 
              "#ACAEB0", "#4B7A86", "#3c5068"];



const data = {
  name: '2019 US Employment by Ethnicity',
  color: colors[0],
  children: [{
    name: `Employed (${(100*_total[1].total/_total[0].total).toFixed(2)}%)`,
    color: colors[1],
    size: _total[1].total,
    children: [{
      name: `Caucasian (${(100*_white[1].total/_total[0].total).toFixed(2)}%)`,
      color: colors[5],
      size: _white[1].total,
      children: [{
        name: `< HS Diploma (${(100*_white[1].less_hs/_total[0].total).toFixed(2)}%)`,
        color: colors[9],
        size: _white[1].less_hs
      }, {
        name: `< HS Diploma (${(100*_white[1].hs_diploma/_total[0].total).toFixed(2)}%)`,
        color: colors[10],
        size: _white[1].hs_diploma
      }, {
        name: `< HS Diploma (${(100*_white[1].some_college/_total[0].total).toFixed(2)}%)`,
        color: colors[11],
        size: _white[1].some_college
      }, {
        name: `< HS Diploma (${(100*_white[1].associate/_total[0].total).toFixed(2)}%)`,
        color: colors[12],
        size: _white[1].associate
      }, {
        name: `< HS Diploma (${(100*_white[1].bachelor/_total[0].total).toFixed(2)}%)`,
        color: colors[13],
        size: _white[1].bachelor
      }, {
        name: `< HS Diploma (${(100*_white[1].adv_degree/_total[0].total).toFixed(2)}%)`,
        color: colors[14],
        size: _white[1].adv_degree
      }]
    }, {
      name: `African American (${(100*_black[1].total/_total[0].total).toFixed(2)}%)`,
      color: colors[6],
      size: _black[1].total,
      children: [{
        name: `< HS Diploma (${(100*_black[1].less_hs/_total[0].total).toFixed(2)}%)`,
        color: colors[9],
        size: _black[1].less_hs
      }, {
        name: `< HS Diploma (${(100*_black[1].hs_diploma/_total[0].total).toFixed(2)}%)`,
        color: colors[10],
        size: _black[1].hs_diploma
      }, {
        name: `< HS Diploma (${(100*_black[1].some_college/_total[0].total).toFixed(2)}%)`,
        color: colors[11],
        size: _black[1].some_college
      }, {
        name: `< HS Diploma (${(100*_black[1].associate/_total[0].total).toFixed(2)}%)`,
        color: colors[12],
        size: _black[1].associate
      }, {
        name: `< HS Diploma (${(100*_black[1].bachelor/_total[0].total).toFixed(2)}%)`,
        color: colors[13],
        size: _black[1].bachelor
      }, {
        name: `< HS Diploma (${(100*_black[1].adv_degree/_total[0].total).toFixed(2)}%)`,
        color: colors[14],
        size: _black[1].adv_degree
      }]
    }, {
      name: `Asian (${(100*_asian[1].total/_total[0].total).toFixed(2)}%)`,
      color: colors[7],
      size: _asian[1].total,
      children: [{
        name: `< HS Diploma (${(100*_asian[1].less_hs/_total[0].total).toFixed(2)}%)`,
        color: colors[9],
        size: _asian[1].less_hs
      }, {
        name: `< HS Diploma (${(100*_asian[1].hs_diploma/_total[0].total).toFixed(2)}%)`,
        color: colors[10],
        size: _asian[1].hs_diploma
      }, {
        name: `< HS Diploma (${(100*_asian[1].some_college/_total[0].total).toFixed(2)}%)`,
        color: colors[11],
        size: _asian[1].some_college
      }, {
        name: `< HS Diploma (${(100*_asian[1].associate/_total[0].total).toFixed(2)}%)`,
        color: colors[12],
        size: _asian[1].associate
      }, {
        name: `< HS Diploma (${(100*_asian[1].bachelor/_total[0].total).toFixed(2)}%)`,
        color: colors[13],
        size: _asian[1].bachelor
      }, {
        name: `< HS Diploma (${(100*_asian[1].adv_degree/_total[0].total).toFixed(2)}%)`,
        color: colors[14],
        size: _asian[1].adv_degree
      }]
    }, {
      name: `Hispanic (${(100*_hispanic[1].total/_total[0].total).toFixed(2)}%)`,
      color: colors[8],
      size: _hispanic[1].total,
      children: [{
        name: `< HS Diploma (${(100*_hispanic[1].less_hs/_total[0].total).toFixed(2)}%)`,
        color: colors[9],
        size: _hispanic[1].less_hs
      }, {
        name: `< HS Diploma (${(100*_hispanic[1].hs_diploma/_total[0].total).toFixed(2)}%)`,
        color: colors[10],
        size: _hispanic[1].hs_diploma
      }, {
        name: `< HS Diploma (${(100*_hispanic[1].some_college/_total[0].total).toFixed(2)}%)`,
        color: colors[11],
        size: _hispanic[1].some_college
      }, {
        name: `< HS Diploma (${(100*_hispanic[1].associate/_total[0].total).toFixed(2)}%)`,
        color: colors[12],
        size: _hispanic[1].associate
      }, {
        name: `< HS Diploma (${(100*_hispanic[1].bachelor/_total[0].total).toFixed(2)}%)`,
        color: colors[13],
        size: _hispanic[1].bachelor
      }, {
        name: `< HS Diploma (${(100*_hispanic[1].adv_degree/_total[0].total).toFixed(2)}%)`,
        color: colors[14],
        size: _hispanic[1].adv_degree
      }]
    }]
  }, {
    name: `Unemployed (${(100*_total[2].total/_total[0].total).toFixed(2)}%)`,
    color: colors[2],
    size: _total[2].total,
    children: [{
      name: `Caucasian (${(100*_white[2].total/_total[0].total).toFixed(2)}%)`,
      color: colors[5],
      size: _white[2].total,
      children: [{
        name: `< HS Diploma (${(100*_white[2].less_hs/_total[0].total).toFixed(2)}%)`,
        color: colors[9],
        size: _white[2].less_hs
      }, {
        name: `< HS Diploma (${(100*_white[2].hs_diploma/_total[0].total).toFixed(2)}%)`,
        color: colors[10],
        size: _white[2].hs_diploma
      }, {
        name: `< HS Diploma (${(100*_white[2].some_college/_total[0].total).toFixed(2)}%)`,
        color: colors[11],
        size: _white[2].some_college
      }, {
        name: `< HS Diploma (${(100*_white[2].associate/_total[0].total).toFixed(2)}%)`,
        color: colors[12],
        size: _white[2].associate
      }, {
        name: `< HS Diploma (${(100*_white[2].bachelor/_total[0].total).toFixed(2)}%)`,
        color: colors[13],
        size: _white[2].bachelor
      }, {
        name: `< HS Diploma (${(100*_white[2].adv_degree/_total[0].total).toFixed(2)}%)`,
        color: colors[14],
        size: _white[2].adv_degree
      }]
    }, {
      name: `African American (${(100*_black[2].total/_total[0].total).toFixed(2)}%)`,
      color: colors[6],
      size: _black[2].total,
      children: [{
        name: `< HS Diploma (${(100*_black[2].less_hs/_total[0].total).toFixed(2)}%)`,
        color: colors[9],
        size: _black[2].less_hs
      }, {
        name: `< HS Diploma (${(100*_black[2].hs_diploma/_total[0].total).toFixed(2)}%)`,
        color: colors[10],
        size: _black[2].hs_diploma
      }, {
        name: `< HS Diploma (${(100*_black[2].some_college/_total[0].total).toFixed(2)}%)`,
        color: colors[11],
        size: _black[2].some_college
      }, {
        name: `< HS Diploma (${(100*_black[2].associate/_total[0].total).toFixed(2)}%)`,
        color: colors[12],
        size: _black[2].associate
      }, {
        name: `< HS Diploma (${(100*_black[2].bachelor/_total[0].total).toFixed(2)}%)`,
        color: colors[13],
        size: _black[2].bachelor
      }, {
        name: `< HS Diploma (${(100*_black[2].adv_degree/_total[0].total).toFixed(2)}%)`,
        color: colors[14],
        size: _black[2].adv_degree
      }]
    }, {
      name: `Asian (${(100*_asian[2].total/_total[0].total).toFixed(2)}%)`,
      color: colors[7],
      size: _asian[2].total,
      children: [{
        name: `< HS Diploma (${(100*_asian[2].less_hs/_total[0].total).toFixed(2)}%)`,
        color: colors[9],
        size: _asian[2].less_hs
      }, {
        name: `< HS Diploma (${(100*_asian[2].hs_diploma/_total[0].total).toFixed(2)}%)`,
        color: colors[10],
        size: _asian[2].hs_diploma
      }, {
        name: `< HS Diploma (${(100*_asian[2].some_college/_total[0].total).toFixed(2)}%)`,
        color: colors[11],
        size: _asian[2].some_college
      }, {
        name: `< HS Diploma (${(100*_asian[2].associate/_total[0].total).toFixed(2)}%)`,
        color: colors[12],
        size: _asian[2].associate
      }, {
        name: `< HS Diploma (${(100*_asian[2].bachelor/_total[0].total).toFixed(2)}%)`,
        color: colors[13],
        size: _asian[2].bachelor
      }, {
        name: `< HS Diploma (${(100*_asian[2].adv_degree/_total[0].total).toFixed(2)}%)`,
        color: colors[14],
        size: _asian[2].adv_degree
      }]
    }, {
      name: `Hispanic (${(100*_hispanic[2].total/_total[0].total).toFixed(2)}%)`,
      color: colors[8],
      size: _hispanic[2].total,
      children: [{
        name: `< HS Diploma (${(100*_hispanic[2].less_hs/_total[0].total).toFixed(2)}%)`,
        color: colors[9],
        size: _hispanic[2].less_hs
      }, {
        name: `< HS Diploma (${(100*_hispanic[2].hs_diploma/_total[0].total).toFixed(2)}%)`,
        color: colors[10],
        size: _hispanic[2].hs_diploma
      }, {
        name: `< HS Diploma (${(100*_hispanic[2].some_college/_total[0].total).toFixed(2)}%)`,
        color: colors[11],
        size: _hispanic[2].some_college
      }, {
        name: `< HS Diploma (${(100*_hispanic[2].associate/_total[0].total).toFixed(2)}%)`,
        color: colors[12],
        size: _hispanic[2].associate
      }, {
        name: `< HS Diploma (${(100*_hispanic[2].bachelor/_total[0].total).toFixed(2)}%)`,
        color: colors[13],
        size: _hispanic[2].bachelor
      }, {
        name: `< HS Diploma (${(100*_hispanic[2].adv_degree/_total[0].total).toFixed(2)}%)`,
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


    