<template>
  <div>
    <form
      id="contact-form"
      class="col-md-8 offset-md-2 contact-form"
      v-on:submit.prevent="onSubmit"
    >
      <div class="form-group">
        <input class="form-control" v-model.trim="name" placeholder="Name">
        <div class="help-block with-errors"></div>
      </div>

      <div class="form-group">
        <input class="form-control" v-model.trim="email" placeholder="Email">
      </div>

      <div class="form-group">
        <textarea class="form-control" v-model.trim="message" placeholder="Message"></textarea>
      </div>

      <div class="form-group text-center">
        <button type="submit" class="symp-btn">Send Message</button>
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
  },
  methods: {
    onSubmit: function() {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.$data)
      })
        .then(res => res.json())
        .then(res => console.log(res));
    }
  }
};
</script>
