<template>
  <div>
    <form id="contact-form" class="col-md-8 offset-md-2 contact-form">
      <div class="form-group">
        <input class="form-control" v-model="name" placeholder="Name">
        <div class="help-block with-errors"></div>
      </div>

      <div class="form-group">
        <input class="form-control" v-model="email" placeholder="Email">
      </div>

      <div class="form-group">
        <textarea class="form-control" v-model="message" placeholder="Message"></textarea>
      </div>

      <div class="form-group text-center">
        <button class="symp-btn">Send Message</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: "",
      email: "",
      message: ""
    };
  }
};
</script>

<style scoped>
form {
  padding: 1em;
  border: 1px solid grey;
}
</style>