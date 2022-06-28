This example requires the [CustomJS](https://github.com/samlewis0602/obsidian-custom-js) plugin to dynamically pull theme colours from your stylesheet.

A version that doesn't use CustomJS can be found here: [[Habit Tracker - no CJS]]

---

# Habits
#### Exercise

```dataviewjs

const {Heatmaps} = customJS

const calendarData = {
	year: moment().year(),
	colors: {
		"x": Heatmaps.entryColor('green'),
		"-": Heatmaps.entryColor('red'),
		">": Heatmaps.entryColor('faint')
	},
	intensityScaleStart: 1,
	intensityScaleEnd: 5,
	entries: []
}

for(let page of dv.pages('"Daily Notes"').file.tasks.where(p=>p.checked).where(p=>String(p.section).includes("Habits")).where(p=>p.text.includes("Exercise"))){
    calendarData.entries.push({
        date: Heatmaps.fileDate(page.path),
		color: page.status,
		intensity: 5
    })
}

renderHeatmapCalendar(this.container, calendarData)

```

#### Read

```dataviewjs

const {Heatmaps} = customJS

const calendarData = {
	year: moment().year(),
	colors: {
		"x": Heatmaps.entryColor('green'),
		"-": Heatmaps.entryColor('red'),
		">": Heatmaps.entryColor('faint')
	},
	intensityScaleStart: 1,
	intensityScaleEnd: 5,
	entries: []
}

for(let page of dv.pages('"Daily Notes"').file.tasks.where(p=>p.checked).where(p=>String(p.section).includes("Habits")).where(p=>p.text.includes("Read"))){
    calendarData.entries.push({
        date: Heatmaps.fileDate(page.path),
		color: page.status,
		intensity: 5
    })
}

renderHeatmapCalendar(this.container, calendarData)

```

#### Study

```dataviewjs

const {Heatmaps} = customJS

const calendarData = {
	year: moment().year(),
	colors: {
		"x": Heatmaps.entryColor('green'),
		"-": Heatmaps.entryColor('red'),
		">": Heatmaps.entryColor('faint')
	},
	intensityScaleStart: 1,
	intensityScaleEnd: 5,
	entries: []
}

for(let page of dv.pages('"Daily Notes"').file.tasks.where(p=>p.checked).where(p=>String(p.section).includes("Habits")).where(p=>p.text.includes("Study"))){
    calendarData.entries.push({
        date: Heatmaps.fileDate(page.path),
		color: page.status,
		intensity: 5
    })
}

renderHeatmapCalendar(this.container, calendarData)

```

# Vices
> For bad habits and vices, you can reverse the colours.

#### Alcohol

```dataviewjs

const {Heatmaps} = customJS

const calendarData = {
	year: moment().year(),
	colors: {
		"x": Heatmaps.entryColor('red'),
		"-": Heatmaps.entryColor('green'),
		">": Heatmaps.entryColor('faint')
	},
	intensityScaleStart: 1,
	intensityScaleEnd: 5,
	entries: []
}

for(let page of dv.pages('"Daily Notes"').file.tasks.where(p=>p.checked).where(p=>String(p.section).includes("Vices")).where(p=>p.text.includes("Alcohol"))){
    calendarData.entries.push({
        date: Heatmaps.fileDate(page.path),
		color: page.status,
		intensity: 5
    })
}

renderHeatmapCalendar(this.container, calendarData)

```