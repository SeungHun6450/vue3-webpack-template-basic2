<template>
  <li>{{ name }}?!</li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<!--scoped를 사용하면 현재 컴포넌트에 있는 내용에만 영향을 미치게 유효범위가 잡혀진다-->
<style scoped lang="scss">
  h1 {
    color: red !important
  }
</style>