<template>
  <div class="timeline-block section-block">
    <div class="container">
      <ul :key="item.title" v-for="item in data" class="timeline">
        <li class="timeline-header">
          <h4>{{item.title}}</h4>
        </li>

        <li
          :key="info.title"
          v-for="(info,index) in item.data"
          :class="index % 2 !== 0  ?'inverse' : ''"
        >
          <div class="timeline-content">
            <h4>{{info.title}}</h4>
            <span v-if="info.location">@ {{info.location}}</span>
            <span>{{info.meta}}</span>
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