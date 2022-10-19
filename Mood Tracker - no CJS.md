This example *does not* require installing the [CustomJS](https://github.com/samlewis0602/obsidian-custom-js) plugin.

A version that makes use of CustomJS can be found here: [[Mood Tracker]]]

---

## Heatmap

```dataviewjs

const calendarData = {
	year: moment().year(),
	colors: {
		1: ["#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000"],
		2: ["#FF8C00", "#FF8C00", "#FF8C00", "#FF8C00", "#FF8C00"],
		3: ["#DAA520", "#DAA520", "#DAA520", "#DAA520", "#DAA520"],
		4: ["#228B22", "#228B22", "#228B22", "#228B22", "#228B22"],
		5: ["#4682B4", "#4682B4", "#4682B4", "#4682B4", "#4682B4"],
	},
	intensityScaleStart: 1,
	intensityScaleEnd: 5,
	entries: []
}

for(let page of dv.pages('"Daily Notes"').file.tasks.where(p=>p.checked).where(p=>p.text.includes("Mood")).sort(p=>p.path)){
    calendarData.entries.push({
        date: page.path.split("/").pop().replace(".md", ""),
		color: page.status,
		intensity: 5,
		content: await dv.span(`[[${page.path}|]]`)
    })
}
	
renderHeatmapCalendar(this.container, calendarData)

```

## Chart

```dataviewjs

const pages = dv.pages('"Daily Notes"').file.tasks.where(p=>p.checked).where(b=>b.text.includes("Mood")).sort(p=>p.path)
const labels = pages.map(b=>b.path.split("/").pop().replace(".md", ""))
const mood = pages.map(b=>b.status)

const chartData = {
    type: 'line',
    data: {
        labels: labels.values,
        datasets: [{
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
				ticks: {
					display: false
				},
				min: 1,
				max: 5
			},
			x: {
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
