

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
    name: '2019 US Employment by Gender',
    color: colors[0],
    children: [{
      name: `Employed (${(100*_total[1].total/_total[0].total).toFixed(2)}%)`,
      color: colors[1],
      size: _total[1].total,
      children: [{
        name: `Male (${(100*_men[1].total/_total[0].total).toFixed(2)}%)`,
        color: colors[3],
        size: _men[1].total,
        children: [{
          name: `< HS Diploma (${(100*_men[1].less_hs/_total[0].total).toFixed(2)}%)`,
          color: colors[9],
          size: _men[1].less_hs
        }, {
          name: `HS Diploma (${(100*_men[1].hs_diploma/_total[0].total).toFixed(2)}%)`,
          color: colors[10],
          size: _men[1].hs_diploma
        }, {
          name: `Some College (${(100*_men[1].some_college/_total[0].total).toFixed(2)}%)`,
          color: colors[11],
          size: _men[1].some_college
        }, {
          name: `Associates (${(100*_men[1].associate/_total[0].total).toFixed(2)}%)`,
          color: colors[12],
          size: _men[1].associate
        }, {
          name: `Bachelors (${(100*_men[1].bachelor/_total[0].total).toFixed(2)}%)`,
          color: colors[13],
          size: _men[1].bachelor
        }, {
          name: `Advanced Degree (${(100*_men[1].adv_degree/_total[0].total).toFixed(2)}%)`,
          color: colors[14],
          size: _men[1].adv_degree
        }]
      }, {
        name: `Female (${(100*_women[1].total/_total[0].total).toFixed(2)}%)`,
        color: colors[4],
        size: _women[1].total,
        children: [{
          name: `< HS Diploma (${(100*_women[1].less_hs/_total[0].total).toFixed(2)}%)`,
          color: colors[9],
          size: _women[1].less_hs
        }, {
          name: `HS Diploma (${(100*_women[1].hs_diploma/_total[0].total).toFixed(2)}%)`,
          color: colors[10],
          size: _women[1].hs_diploma
        }, {
          name: `Some College (${(100*_women[1].some_college/_total[0].total).toFixed(2)}%)`,
          color: colors[11],
          size: _women[1].some_college
        }, {
          name: `Associates (${(100*_women[1].associate/_total[0].total).toFixed(2)}%)`,
          color: colors[12],
          size: _women[1].associate
        }, {
          name: `Bachelors (${(100*_women[1].bachelor/_total[0].total).toFixed(2)}%)`,
          color: colors[13],
          size: _women[1].bachelor
        }, {
          name: `Advanced Degree (${(100*_women[1].adv_degree/_total[0].total).toFixed(2)}%)`,
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
              name: `< HS Diploma (${(100*_men[2].less_hs/_total[0].total).toFixed(2)}%)`,
              color: colors[9],
              size: _men[2].less_hs
            }, {
              name: `HS Diploma (${(100*_men[2].hs_diploma/_total[0].total).toFixed(2)}%)`,
              color: colors[10],
              size: _men[2].hs_diploma
            }, {
              name: `Some College (${(100*_men[2].some_college/_total[0].total).toFixed(2)}%)`,
              color: colors[11],
              size: _men[2].some_college
            }, {
              name: `Associates (${(100*_men[2].associate/_total[0].total).toFixed(2)}%)`,
              color: colors[12],
              size: _men[2].associate
            }, {
              name: `Bachelors (${(100*_men[2].bachelor/_total[0].total).toFixed(2)}%)`,
              color: colors[13],
              size: _men[2].bachelor
            }, {
              name: `Advanced Degree (${(100*_men[2].adv_degree/_total[0].total).toFixed(2)}%)`,
              color: colors[14],
              size: _men[2].adv_degree
            }]

          }, {
            name: `Female (${(100*_women[2].total/_total[2].total).toFixed(2)}%)`,
            color: colors[4],
            size: _women[2].total,
            children: [{
              name: `< HS Diploma (${(100*_women[2].less_hs/_total[0].total).toFixed(2)}%)`,
              color: colors[9],
              size: _women[2].less_hs
            }, {
              name: `HS Diploma (${(100*_women[2].hs_diploma/_total[0].total).toFixed(2)}%)`,
              color: colors[10],
              size: _women[2].hs_diploma
            }, {
              name: `Some College (${(100*_women[2].some_college/_total[0].total).toFixed(2)}%)`,
              color: colors[11],
              size: _women[2].some_college
            }, {
              name: `Associates (${(100*_women[2].associate/_total[0].total).toFixed(2)}%)`,
              color: colors[12],
              size: _women[2].associate
            }, {
              name: `Bachelors (${(100*_women[2].bachelor/_total[0].total).toFixed(2)}%)`,
              color: colors[13],
              size: _women[2].bachelor
            }, {
              name: `Advanced Degree (${(100*_women[2].adv_degree/_total[0].total).toFixed(2)}%)`,
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


    