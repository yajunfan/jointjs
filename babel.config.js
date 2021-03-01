module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ["prismjs", {
      "languages": ["javascript", "css", "markup"],
      "plugins": ["line-numbers","line-highlight"],
      "theme": "coy",
      "css": true
    }],
    // [
    //   "component",
    //     {
    //       "libraryName": "element-ui",
    //       "styleLibraryName": "theme-chalk"
    //     }
    // ]
  ]
}
