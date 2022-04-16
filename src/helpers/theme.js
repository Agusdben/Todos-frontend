export const themes = {
  white: {
    bgColor: '#f1f1f1',
    primary_color: '#961f05',
    header_bgColor: '#f1f1f1',
    todo_bgColor: '#fff',
    font_mainColor: '#000',
    button_fontColor: '#fff',
    moda_bgColor: '#fff',
    todo_boxShadow: '#333'
  },
  dark: {
    bgColor: '#222',
    header_bgColor: '#222',
    primary_color: '#961f05',
    todo_bgColor: '#555',
    font_mainColor: '#fff',
    button_fontColor: '#fff',
    moda_bgColor: '#333',
    todo_boxShadow: '#111'
  }
}

export const setTheme = (theme) => {
  const root = document.querySelector(':root')
  Object.entries(theme).map(([key, value]) => root.style.setProperty(`--${key}`, value))
}
