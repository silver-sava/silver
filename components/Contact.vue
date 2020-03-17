<template>
  <section id="contact" class="contact section-padding" data-scroll-index="6">
    <div class="container">
      <div class="row">

        <div class="col-lg-12 section-head text-center">
          <h4>Contact Us</h4>
          <h6>Get In Touch</h6>
        </div>

        <div class="col-lg-5">
          <div class="info">
            <div class="item">
              <span class="icon"><i class="icofont icofont-phone"></i></span>
              <div class="cont">
                <h6>Phone : </h6>
                <p>+20 010 2517 8918 , +20 010 2517 8918</p>
              </div>
            </div>
            <div class="item">
              <span class="icon"><i class="icofont icofont-map"></i></span>
              <div class="cont">
                <h6>Address : </h6>
                <p>75 New York - Bourbon Street 10/555</p>
                <p>3rd Avenue, Upper East Side, San Francisco</p>
              </div>
            </div>
            <div class="item">
              <span class="icon"><i class="icofont icofont-email"></i></span>
              <div class="cont">
                <h6>Email : </h6>
                <p>email@youradress.com</p>
                <p>email_support@youradress.com</p>
              </div>
            </div>

            <div class="social">
              <a href="#0"><i class="icofont icofont-social-facebook"></i></a>
              <a href="#0"><i class="icofont icofont-social-twitter"></i></a>
              <a href="#0"><i class="icofont icofont-social-instagram"></i></a>
              <a href="#0"><i class="icofont icofont-brand-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-7">

          <form class="form" id="contact-form" method="post" action="https://gimax.netlify.com/contact.php">

            <div class="messages"></div>

            <div class="controls">

              <div class="row">

                <div class="col-md-6">
                  <div class="form-group">
                    <input id="form_name" type="text" name="name" placeholder="Name"
                           required="required">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input id="form_email" type="email" name="email" placeholder="Email"
                           required="required">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input id="form_subject" type="text" name="subject" placeholder="Subject">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                                        <textarea id="form_message" name="message" placeholder="Message" rows="4"
                                                  required="required"></textarea>
                  </div>
                </div>

                <div class="col-md-12 text-center">
                  <button type="submit" class="butn butn-bg"><span>Send Message</span></button>
                </div>

              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Contact",
        mounted() {
          $('#contact-form').validator();

          $('#contact-form').on('submit', function (e) {
            if (!e.isDefaultPrevented()) {
              var url = "contact.php";

              $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                  var messageAlert = 'alert-' + data.type;
                  var messageText = data.message;

                  var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                  if (messageAlert && messageText) {
                    $('#contact-form').find('.messages').html(alertBox);
                    $('#contact-form')[0].reset();
                  }
                }
              });
              return false;
            }
          });
        }
    }
</script>

<style scoped>

</style>
