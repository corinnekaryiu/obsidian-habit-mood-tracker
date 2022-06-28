This example requires the [CustomJS](https://github.com/samlewis0602/obsidian-custom-js) plugin to dynamically pull theme colours from your stylesheet.

A version that doesn't use CustomJS can be found here: [[Mood Tracker - no CJS]]

---

## Heatmap

```dataviewjs

const {Heatmaps} = customJS

const calendarData = {
	year: moment().year(),
	colors: {
		1: Heatmaps.entryColor('red'),
		2: Heatmaps.entryColor('orange'),
		3: Heatmaps.entryColor('yellow'),
		4: Heatmaps.entryColor('green'),
		5: Heatmaps.entryColor('blue'),
	},
	intensityScaleStart: 1,
	intensityScaleEnd: 5,
  entries: []
}

for(let page of dv.pages('"Daily Notes"').file.tasks.where(p=>p.checked).where(p=>p.text.includes("Mood")).sort(p=>p.path)){
    calendarData.entries.push({
        date: Heatmaps.fileDate(page.path),
		color: page.status,
		intensity: 5
    })
}
	
renderHeatmapCalendar(this.container, calendarData)

```

## Chart

```dataviewjs
const {Charts} = customJS

const pages = dv.pages('"Daily Notes"').file.tasks.where(p=>p.checked).where(b=>b.text.includes("Mood")).sort(p=>p.path)
const labels = pages.map(b=>Charts.fileDate(b.path))
const mood = pages.map(b=>b.status)

const chartData = {
    type: 'line',
    data: {
        labels: labels.values,
        datasets: [{
            backgroundColor: Charts.fillColor('green'),
            borderColor: Charts.borderColor('green'),
            borderWidth: 1,
            label: 'Mood',
            data: mood.values,
            spanGaps: true,
            tension: 0.25,
            fill: '1'
        }]
    },
    options:{
		scales: {
			y: {
				grid: {
					borderColor: Charts.textColor(),
					tickColor: Charts.textColor(),
					color: Charts.gridColor()
				},
				ticks: {
					display: false
				},
				min: 1,
				max: 5
			},
			x: {
				grid: {
					borderColor: Charts.textColor(),
					tickColor: Charts.textColor(),
					color: Charts.gridColor(),
				},
				ticks: {
					color: Charts.textColor(),
					font: {
					    family: Charts.fontFamily()
				    }
				},
				type: 'time',
				time: {
					unit: 'day',
					tooltipFormat: 'MMM D, YYYY'
				}
			}
		},
		interaction: {
            mode: 'index'
        },
        plugins: {
	        legend: {
		        display: false
	        }
        }
	}
}

window.renderChart(chartData, this.container)
```