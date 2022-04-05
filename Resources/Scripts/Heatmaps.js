class Heatmaps {
  entryColor(color) {
    const theme = window.getComputedStyle(document.body)
    var themecolor = {
      green : theme.getPropertyValue("--green"),
      red : theme.getPropertyValue("--red"),
      blue : theme.getPropertyValue("--blue"),
      yellow : theme.getPropertyValue("--yellow"),
      orange : theme.getPropertyValue("--orange"),
      default : theme.getPropertyValue("--text-muted"),
      faint : theme.getPropertyValue("--text-faint")
    }
    return new Array(
      themecolor[color],
      themecolor[color],
      themecolor[color],
      themecolor[color],
      themecolor[color]
    )
  }
  fileDate(file) {
    const date = file.split("/").pop().replace(".md", "");
    return date
  }
}
