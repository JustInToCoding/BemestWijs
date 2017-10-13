import Component from '@ember/component';

export default Component.extend({
  // Enter a speed between 0 and 180

  base_chart: {
    "values": [40, 10, 10, 10, 10, 10, 10],
    "labels": ["-", "0", "20", "40", "60", "80", "100"],
    "domain": {"x": [0, .48]},
    "marker": {
        "colors": [
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)'
        ],
        "line": {
            "width": 0
        }
    },
    "name": "Gauge",
    "hole": .4,
    "type": "pie",
    "direction": "clockwise",
    "rotation": 108,
    "showlegend": false,
    "hoverinfo": "none",
    "textinfo": "label",
    "textposition": "outside"
  },

  meter_chart: {
    "values": [50, 10, 10, 10, 10, 10],
    "labels": ["Log Level", "Debug", "Info", "Warn", "Error", "Fatal"],
    "marker": {
        'colors': [
            'rgb(255, 255, 255)',
            'rgb(232,226,202)',
            'rgb(226,210,172)',
            'rgb(223,189,139)',
            'rgb(223,162,103)',
            'rgb(226,126,64)'
        ]
    },
    "domain": {"x": [0, 0.48]},
    "name": "Gauge",
    "hole": .3,
    "type": "pie",
    "direction": "clockwise",
    "rotation": 90,
    "showlegend": false,
    "textinfo": "label",
    "textposition": "inside",
    "hoverinfo": "none"
  },

  layout: {
    'xaxis': {
        'showticklabels': false,
        'autotick': false,
        'showgrid': false,
        'zeroline': false,
    },
    'yaxis': {
        'showticklabels': false,
        'autotick': false,
        'showgrid': false,
        'zeroline': false,
    },
    'shapes': [
        {
            'type': 'path',
            'path': 'M 0.235 0.5 L 0.24 0.65 L 0.245 0.5 Z',
            'fillcolor': 'rgba(44, 160, 101, 0.5)',
            'line': {
                'width': 0.5
            },
            'xref': 'paper',
            'yref': 'paper'
        }
    ],
    'annotations': [
        {
            'xref': 'paper',
            'yref': 'paper',
            'x': 0.23,
            'y': 0.45,
            'text': '50',
            'showarrow': false
        }
    ]
  },

  didInsertElement() {
    Plotly.plot( this.$('#plotlyContainer')[0], [this.base_chart, this.meter_chart], this.layout);
  }
});
