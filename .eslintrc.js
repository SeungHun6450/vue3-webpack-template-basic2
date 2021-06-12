module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends : [
    // vue
    // 'plugin:vue/vue3-essential',  // Lv1
    'plugin:vue/vue3-strongly-recommended',  // Lv2
    // 'plugin:vue/vue3-recommended',  // Lv3
    // js
    'eslint:recommended'
  ],
  parserOptions: {
    // 코드 분석기 지정
    parser: 'babel-eslent'
  },
  rules: {
    // https://eslint.vuejs.org/rules/html-closing-bracket-newline.html#vue-html-closing-bracket-newline 의 옵션, 멀티라인 입맛에 맞춰 수정
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multilinse": "never"
    }],
    // https://eslint.vuejs.org/rules/html-self-closing.html#vue-html-self-closing 의 옵션, 입맛에 맞게 수정
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always", // /> 작성 가능
        "normal": "never", // selfclosing 해도 된다
        "component": "always"  // App.vue에 <HelloWorld /> 가능하게
      },
      "svg": "always",
      "math": "always"
    }]
  }
}