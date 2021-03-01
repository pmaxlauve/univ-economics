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
              "#415a6b", "#8092a0", "#544e70", 
              "#68516f", "#7c546e", "#90576d", 
              "#957CA5", "#a096b7", "#abb0c9", 
              "#b6cbdb", "#c1e5ed", "#ccffff"];




const data = {
    name: '2019 US Employment by Gender', //level 1
    color: colors[0],
    children: [{
      name: `Employed (${(100*_total[1].total/_total[0].total).toFixed(2)}%)`, //level 2
      color: colors[1],
      size: _total[1].total,
      children: [{
        name: `Male (${(100*_men[1].total/_total[1].total).toFixed(2)}%)`, //level 3
        color: colors[3],
        size: _men[1].total,
        children: [{
          name: `< HS Diploma (${(100*_men[1].less_hs/_men[1].total).toFixed(2)}%)`, //level 4
          color: colors[9],
          size: _men[1].less_hs
        }, {
          name: `HS Diploma (${(100*_men[1].hs_diploma/_men[1].total).toFixed(2)}%)`, //level 4
          color: colors[10],
          size: _men[1].hs_diploma
        }, {
          name: `Some College (${(100*_men[1].some_college/_men[1].total).toFixed(2)}%)`, //level 4
          color: colors[11],
          size: _men[1].some_college
        }, {
          name: `Associates (${(100*_men[1].associate/_men[1].total).toFixed(2)}%)`, //level 4
          color: colors[12],
          size: _men[1].associate
        }, {
          name: `Bachelors (${(100*_men[1].bachelor/_men[1].total).toFixed(2)}%)`, //level 4
          color: colors[13],
          size: _men[1].bachelor
        }, {
          name: `Advanced Degree (${(100*_men[1].adv_degree/_men[1].total).toFixed(2)}%)`, //level 4
          color: colors[14],
          size: _men[1].adv_degree
        }]
      }, {
        name: `Female (${(100*_women[1].total/_total[1].total).toFixed(2)}%)`,
        color: colors[4],
        size: _women[1].total,
        children: [{
          name: `< HS Diploma (${(100*_women[1].less_hs/_women[1].total).toFixed(2)}%)`,
          color: colors[9],
          size: _women[1].less_hs
        }, {
          name: `HS Diploma (${(100*_women[1].hs_diploma/_women[1].total).toFixed(2)}%)`,
          color: colors[10],
          size: _women[1].hs_diploma
        }, {
          name: `Some College (${(100*_women[1].some_college/_women[1].total).toFixed(2)}%)`,
          color: colors[11],
          size: _women[1].some_college
        }, {
          name: `Associates (${(100*_women[1].associate/_women[1].total).toFixed(2)}%)`,
          color: colors[12],
          size: _women[1].associate
        }, {
          name: `Bachelors (${(100*_women[1].bachelor/_women[1].total).toFixed(2)}%)`,
          color: colors[13],
          size: _women[1].bachelor
        }, {
          name: `Advanced Degree (${(100*_women[1].adv_degree/_women[1].total).toFixed(2)}%)`,
          color: colors[14],
          size: _women[1].adv_degree
        }]


      }
    ]
    },
      {
        name: `Unemployed (${(100*_total[2].total/_total[0].total).toFixed(2)}%)`,
        color: colors[2],
        size: _total[2].total,
        children: [
          {
            name: `Male (${(100*_men[2].total/_total[2].total).toFixed(2)}%)`,
            color: colors[3],
            size: _men[2].total,
            children: [{
              name: `< HS Diploma (${(100*_men[2].less_hs/_men[2].total).toFixed(2)}%)`,
              color: colors[9],
              size: _men[2].less_hs
            }, {
              name: `HS Diploma (${(100*_men[2].hs_diploma/_men[2].total).toFixed(2)}%)`,
              color: colors[10],
              size: _men[2].hs_diploma
            }, {
              name: `Some College (${(100*_men[2].some_college/_men[2].total).toFixed(2)}%)`,
              color: colors[11],
              size: _men[2].some_college
            }, {
              name: `Associates (${(100*_men[2].associate/_men[2].total).toFixed(2)}%)`,
              color: colors[12],
              size: _men[2].associate
            }, {
              name: `Bachelors (${(100*_men[2].bachelor/_men[2].total).toFixed(2)}%)`,
              color: colors[13],
              size: _men[2].bachelor
            }, {
              name: `Advanced Degree (${(100*_men[2].adv_degree/_men[2].total).toFixed(2)}%)`,
              color: colors[14],
              size: _men[2].adv_degree
            }]

          }, {
            name: `Female (${(100*_women[2].total/_total[2].total).toFixed(2)}%)`,
            color: colors[4],
            size: _women[2].total,
            children: [{
              name: `< HS Diploma (${(100*_women[2].less_hs/_women[2].total).toFixed(2)}%)`,
              color: colors[9],
              size: _women[2].less_hs
            }, {
              name: `HS Diploma (${(100*_women[2].hs_diploma/_women[2].total).toFixed(2)}%)`,
              color: colors[10],
              size: _women[2].hs_diploma
            }, {
              name: `Some College (${(100*_women[2].some_college/_women[2].total).toFixed(2)}%)`,
              color: colors[11],
              size: _women[2].some_college
            }, {
              name: `Associates (${(100*_women[2].associate/_women[2].total).toFixed(2)}%)`,
              color: colors[12],
              size: _women[2].associate
            }, {
              name: `Bachelors (${(100*_women[2].bachelor/_women[2].total).toFixed(2)}%)`,
              color: colors[13],
              size: _women[2].bachelor
            }, {
              name: `Advanced Degree (${(100*_women[2].adv_degree/_women[2].total).toFixed(2)}%)`,
              color: colors[14],
              size: _women[2].adv_degree
            }]

    
    
          }
        
        ]
    }]
    
  };






Sunburst()
    .data(data)
    .size('size')
    .color('color')
    .radiusScaleExponent(1.5)
    (document.getElementById('chart'));


    