# hqzh-vue-ui  请在vue-cli4以上基础创建的工程中使用

### 组件安装

```bash
npm i hqzh-vue-ui --save
# 或
yarn add hqzh-vue-ui
```

### 组件 props 以下两个属性值请参考element组件Tooltip同名属性

| 名称            |  类型  | 默认值                       | 说明                     |
| --------------- | :----: | ---------------------------- | ------------------------ |
| effect          | String | light                         | tooltip默认提供的主题 |
| placement       | String | top                           | Tooltip 的出现位置   |

### 使用示例

```vue
<template>
    <show-overflow-tooltip>我是仿element文本溢出组件</show-overflow-tooltip>
</template>

<script>

import {ShowOverflowTooltip} from "hqzh-vue-ui";

export default {
    components: {
        ShowOverflowTooltip
    },
}
</script>
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
