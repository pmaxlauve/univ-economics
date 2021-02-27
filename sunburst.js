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


console.log(_total);
console.log(_men);
console.log(_women);
console.log(_white);
console.log(_black);
console.log(_asian);
console.log(_hispanic);


const data = {
    name: '2019 US Employment',
    color: 'magenta',
    children: [{
      name: `Employed (${(100*_total[1].total/_total[0].total).toFixed(2)}%)`,
      color: 'yellow',
      size: _total[1].total,
      children: [{
        name: `Male (${(100*_men[1].total/_total[0].total).toFixed(2)}%)`,
        color: "blue",
        size: _men[1].total,
        children: [{
          name: `< HS Diploma (${(100*_men[1].less_hs/_total[0].total).toFixed(2)}%)`,
          color: "cyan",
          size: _men[1].less_hs
        }, {
          name: `HS Diploma (${(100*_men[1].hs_diploma/_total[0].total).toFixed(2)}%)`,
          color: "purple",
          size: _men[1].hs_diploma
        }, {
          name: `Some College (${(100*_men[1].some_college/_total[0].total).toFixed(2)}%)`,
          color: "#349055",
          size: _men[1].some_college
        }, {
          name: `Associates (${(100*_men[1].associate/_total[0].total).toFixed(2)}%)`,
          color: "#010567",
          size: _men[1].associate
        }, {
          name: `Bachelors (${(100*_men[1].bachelor/_total[0].total).toFixed(2)}%)`,
          color: "#905978",
          size: _men[1].bachelor
        }, {
          name: `Advanced Degree (${(100*_men[1].adv_degree/_total[0].total).toFixed(2)}%)`,
          color: "#777888",
          size: _men[1].adv_degree
        }]
      }, {
        name: `Female (${(100*_women[1].total/_total[0].total).toFixed(2)}%)`,
        color: "pink",
        size: _women[1].total,
        children: [{
          name: `< HS Diploma (${(100*_women[1].less_hs/_total[0].total).toFixed(2)}%)`,
          color: "cyan",
          size: _women[1].less_hs
        }, {
          name: `HS Diploma (${(100*_women[1].hs_diploma/_total[0].total).toFixed(2)}%)`,
          color: "purple",
          size: _women[1].hs_diploma
        }, {
          name: `Some College (${(100*_women[1].some_college/_total[0].total).toFixed(2)}%)`,
          color: "#349055",
          size: _women[1].some_college
        }, {
          name: `Associates (${(100*_women[1].associate/_total[0].total).toFixed(2)}%)`,
          color: "#010567",
          size: _women[1].associate
        }, {
          name: `Bachelors (${(100*_women[1].bachelor/_total[0].total).toFixed(2)}%)`,
          color: "#905978",
          size: _women[1].bachelor
        }, {
          name: `Advanced Degree (${(100*_women[1].adv_degree/_total[0].total).toFixed(2)}%)`,
          color: "#777888",
          size: _women[1].adv_degree
        }]


      }
    ]
    },
      {
        name: `Unemployed (${(100*_total[2].total/_total[0].total).toFixed(2)}%)`,
        color: 'red',
        size: _total[2].total,
        children: [
          {
            name: `Male (${(100*_men[2].total/_total[2].total).toFixed(2)}%)`,
            color: "blue",
            size: _men[2].total,
            children: [{
              name: `< HS Diploma (${(100*_men[2].less_hs/_total[0].total).toFixed(2)}%)`,
              color: "cyan",
              size: _men[2].less_hs
            }, {
              name: `HS Diploma (${(100*_men[2].hs_diploma/_total[0].total).toFixed(2)}%)`,
              color: "purple",
              size: _men[2].hs_diploma
            }, {
              name: `Some College (${(100*_men[2].some_college/_total[0].total).toFixed(2)}%)`,
              color: "#349055",
              size: _men[2].some_college
            }, {
              name: `Associates (${(100*_men[2].associate/_total[0].total).toFixed(2)}%)`,
              color: "#010567",
              size: _men[2].associate
            }, {
              name: `Bachelors (${(100*_men[2].bachelor/_total[0].total).toFixed(2)}%)`,
              color: "#905978",
              size: _men[2].bachelor
            }, {
              name: `Advanced Degree (${(100*_men[2].adv_degree/_total[0].total).toFixed(2)}%)`,
              color: "#777888",
              size: _men[2].adv_degree
            }]

          }, {
            name: `Female (${(100*_women[2].total/_total[2].total).toFixed(2)}%)`,
            color: "pink",
            size: _women[2].total,
            children: [{
              name: `< HS Diploma (${(100*_women[2].less_hs/_total[0].total).toFixed(2)}%)`,
              color: "cyan",
              size: _women[2].less_hs
            }, {
              name: `HS Diploma (${(100*_women[2].hs_diploma/_total[0].total).toFixed(2)}%)`,
              color: "purple",
              size: _women[2].hs_diploma
            }, {
              name: `Some College (${(100*_women[2].some_college/_total[0].total).toFixed(2)}%)`,
              color: "#349055",
              size: _women[2].some_college
            }, {
              name: `Associates (${(100*_women[2].associate/_total[0].total).toFixed(2)}%)`,
              color: "#010567",
              size: _women[2].associate
            }, {
              name: `Bachelors (${(100*_women[2].bachelor/_total[0].total).toFixed(2)}%)`,
              color: "#905978",
              size: _women[2].bachelor
            }, {
              name: `Advanced Degree (${(100*_women[2].adv_degree/_total[0].total).toFixed(2)}%)`,
              color: "#777888",
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
    .radiusScaleExponent(1)
    (document.getElementById('chart'));