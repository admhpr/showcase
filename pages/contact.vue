<template>
  <section id="contact" class="contact-section section-show">
    <div class="contact-block section-block">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="section-header text-center">
              <h2 class="animate text-over-block">Contact Me</h2>
              <!--divider-->
              <div class="divider-draft center"></div>
              <!--/divider-->
              <p>
                I'm available for freelancing. If you want something to be built or just to say hi, feel free to shoot me a
                message.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <form
              id="contact-form"
              class="contact-form"
              action="mail.php"
              method="post"
              data-toggle="validator"
            >
              <div id="contact-form-result"></div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name" required>

                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email" required>

                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Phone" required>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Website" required>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <textarea rows="5" class="form-control" placeholder="Message" required></textarea>
                <div class="help-block with-errors"></div>
              </div>

              <div class="form-group text-center">
                <button type="submit" class="symp-btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="footer bg-lightgray section-block">
      <div class="container">
        <div class="row">
          <div class="col-xs-6 text-left">
            <h4>Adam Harpur</h4>
          </div>

          <div class="col-xs-6 text-right">
            <ul class="footer-social">
              <li>
                <a href="#">
                  <i class="ion-social-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ion-social-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ion-social-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
