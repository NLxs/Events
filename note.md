# 小结
1. target和currentTarget
  * 前者是用户点击的,后者是开发者监听的
2. 取消冒泡
  * e.stopPropagation()
3. 事件的特性
  * Bubbles 表示是否冒泡
  * Cancelable表示是否支持开发者取消冒泡
  * 如scroll不支持取消冒泡
4. 如何禁用滚动条
  * 取消特定元素的wheel和touchstart的默认事件(preventDefault();)