class Charts {
  fontFamily() {
    const theme = window.getComputedStyle(document.body)
    return theme.getPropertyValue("--font-preview")
  }
  textColor() {
    const theme = window.getComputedStyle(document.body)
    return theme.getPropertyValue("--text-muted")
  }
  gridColor() {
    const theme = window.getComputedStyle(document.body)
    return theme.getPropertyValue("--background-modifier-border")
  }
  fillColor(color) {
    const theme = window.getComputedStyle(document.body)
    var themecolor = {
      blue : theme.getPropertyValue("--chart-blue-fill"),
      red : theme.getPropertyValue("--chart-red-fill"),
      green : theme.getPropertyValue("--chart-green-fill"),
      yellow : theme.getPropertyValue("--chart-yellow-fill")
    };
    return themecolor[color] || theme.getPropertyValue("--chart-blue-fill");
  }
  borderColor(color) {
    const theme = window.getComputedStyle(document.body)
    var themecolor = {
      blue : theme.getPropertyValue("--chart-blue"),
      red : theme.getPropertyValue("--chart-red"),
      green : theme.getPropertyValue("--chart-green"),
      yellow : theme.getPropertyValue("--chart-yellow")
    };
    return themecolor[color] || theme.getPropertyValue("--chart-blue");
  }
  fileDate(file) {
    const date = file.split("/").pop().replace(".md", "");
    return date
  }
}
