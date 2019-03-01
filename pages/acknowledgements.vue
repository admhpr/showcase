
<template>
  <section-container title="Acknowledgements">
    <template v-slot:content>
      <div class="row">
        <div class="col-md-10">
          <p>These are some people that have helped make me a better programmer (whether they realise it or not):</p>
          <div class="links">
            <ul>
              <a :key="item.title" v-for="item in acknowledgements" :href="item.location">
                <li>{{item.title}}</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </section-container>
</template>

<script>
import SectionContainer from "~/components/containers/Section";

import acknowledgements from "~/data/acknowledgements";

export default {
  data: function() {
    return {
      acknowledgements
    };
  },
  components: {
    SectionContainer
  }
};
</script>
