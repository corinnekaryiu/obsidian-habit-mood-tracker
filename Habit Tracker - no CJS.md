This example *does not* require installing the [CustomJS](https://github.com/samlewis0602/obsidian-custom-js) plugin.

A version that makes use of CustomJS can be found here: [[Habit Tracker]]

---

# Habits
#### Exercise

```dataviewjs

const calendarData = {
	year: moment().year(),
	colors: {
		"x": ["#228B22", "#228B22", "#228B22", "#228B22", "#228B22"],
		"-": ["#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000"],
		">": ["#696969", "#696969", "#696969", "#696969", "#696969"]
	},
	intensityScaleStart: 1,
	intensityScaleEnd: 5,
	entries: []
}

for(let page of dv.pages('"Daily Notes"').file.tasks.where(p=>p.checked).where(p=>String(p.section).includes("Habits")).where(p=>p.text.includes("Exercise"))){
    calendarData.entries.push({
        date: page.path.split("/").pop().replace(".md", ""),
		color: page.status,
		intensity: 5
    })
}

renderHeatmapCalendar(this.container, calendarData)

```

#### Read

```dataviewjs

const calendarData = {
	year: moment().year(),
	colors: {
		"x": ["#228B22", "#228B22", "#228B22", "#228B22", "#228B22"],
		"-": ["#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000"],
		">": ["#696969", "#696969", "#696969", "#696969", "#696969"]
	},
	intensityScaleStart: 1,
	intensityScaleEnd: 5,
	entries: []
}

for(let page of dv.pages('"Daily Notes"').file.tasks.where(p=>p.checked).where(p=>String(p.section).includes("Habits")).where(p=>p.text.includes("Read"))){
    calendarData.entries.push({
        date: page.path.split("/").pop().replace(".md", ""),
		color: page.status,
		intensity: 5
    })
}

renderHeatmapCalendar(this.container, calendarData)

```

#### Study

```dataviewjs

const calendarData = {
	year: moment().year(),
	colors: {
		"x": ["#228B22", "#228B22", "#228B22", "#228B22", "#228B22"],
		"-": ["#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000"],
		">": ["#696969", "#696969", "#696969", "#696969", "#696969"]
	},
	intensityScaleStart: 1,
	intensityScaleEnd: 5,
	entries: []
}

for(let page of dv.pages('"Daily Notes"').file.tasks.where(p=>p.checked).where(p=>String(p.section).includes("Habits")).where(p=>p.text.includes("Study"))){
    calendarData.entries.push({
        date: page.path.split("/").pop().replace(".md", ""),
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

const calendarData = {
	year: moment().year(),
	colors: {
		"x": ["#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000"],
		"-": ["#228B22", "#228B22", "#228B22", "#228B22", "#228B22"],
		">": ["#696969", "#696969", "#696969", "#696969", "#696969"]
	},
	intensityScaleStart: 1,
	intensityScaleEnd: 5,
	entries: []
}

for(let page of dv.pages('"Daily Notes"').file.tasks.where(p=>p.checked).where(p=>String(p.section).includes("Vices")).where(p=>p.text.includes("Alcohol"))){
    calendarData.entries.push({
        date: page.path.split("/").pop().replace(".md", ""),
		color: page.status,
		intensity: 5
    })
}

renderHeatmapCalendar(this.container, calendarData)

```