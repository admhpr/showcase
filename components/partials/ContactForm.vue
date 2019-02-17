<template>
  <div>
    <form
      id="contact-form"
      class="col-md-8 offset-md-2 contact-form"
      v-on:submit.prevent="onSubmit"
    >
      <div class="form-group">
        <input
          :class="{'form-control': true, 'input-error': this.error}"
          v-model.trim="form.name"
          placeholder="Name"
        >
        <div class="help-block with-errors"></div>
      </div>

      <div class="form-group">
        <input
          :class="{'form-control': true, 'input-error': this.error}"
          v-model.trim="form.email"
          placeholder="Email"
        >
      </div>

      <div class="form-group">
        <textarea
          :class="{'form-control': true, 'input-error': this.error}"
          v-model.trim="form.message"
          placeholder="Message"
        ></textarea>
      </div>

      <div class="form-group text-center">
        <button type="submit" class="symp-btn">Send Message</button>
      </div>
      <div
        :class="{ 'text-center' : true, 'contact-message' : this.message.length > 0 && !hideMessage, 'contact-message-hidden': hideMessage}"
      >{{this.message}}</div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return this.initState();
  },
  methods: {
    initState: function() {
      return {
        error: false,
        hideMessage: true,
        message: "",
        form: {
          name: "",
          email: "",
          message: ""
        }
      };
    },
    resetForm: function() {
      this.error = false;
      Object.keys(this.form).forEach(key => {
        this.form[key] = "";
      });
    },
    onSubmit: function() {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.$data.form)
      })
        .then(res => res.json())
        .then(json => {
          if (json.status !== "success") {
            this.error = true;
            return;
          }
          this.resetForm();
          this.message = json.message;
          this.hideMessage = false;
          setTimeout(() => {
            this.hideMessage = true;
          }, 3000);
        });
    }
  }
};
</script>
