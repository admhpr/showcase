<template>
  <div class="timeline-block section-block">
    <div class="container">
      <ul :key="item.title" v-for="item in data" class="timeline">
        <li class="timeline-header">
          <h4>{{item.title}}</h4>
        </li>

        <li :key="info.title" v-for="info in item.data">
          <div class="timeline-desc">
            <h4>{{info.meta}}</h4>
          </div>

          <div class="timeline-content">
            <h4>{{info.title}}</h4>
            <span>@CSS College Larkana</span>

            <p>{{info.info}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }
};
</script>

<style scoped>
</style>