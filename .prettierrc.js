module.exports = {
    printWidth: 120, // 超过最大值换行
    eslintIntegration: true, // 不让prettier使用eslint的代码格式进行校验
    tabWidth: 2, // 缩进字节数
    useTabs: false, // 缩进不使用tab，使用空格
    singleQuote: true, // 使用单引号代替双引号
    jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
    semi: false, // 句尾添加分号
    quoteProps: 'consistent',
    TrailingComma: 'es5', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
    bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    endOfLine: "auto",
}