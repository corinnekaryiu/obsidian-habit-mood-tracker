class Heatmaps {
  entryColor(color) {
    const theme = window.getComputedStyle(document.body)
    var themecolor = {
      green : theme.getPropertyValue("--interactive-success"),
      red : theme.getPropertyValue("--md-color-bold"),
      blue : theme.getPropertyValue("--md-color-italic"),
      yellow : theme.getPropertyValue("--custom-yellow"),
      orange : theme.getPropertyValue("--custom-orange"),
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
