const Contact = () => {
  return (
    <section id="contact" className="divider bg-silver-light">
      <div className="container pt-60 pb-60">
        <div className="section-title text-center">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h2 className="text-uppercase line-bottom-center mt-0">
                Contact Us
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                autem
                <br /> voluptatem obcaecati!
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-10">
          <div className="col-md-10 col-md-offset-1">
            {/* <!-- Contact Form --> */}
            <form
              id="contact_form"
              name="contact_form"
              className=""
              action="includes/sendmail.php"
              method="post"
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group mb-30">
                    <input
                      name="form_name"
                      className="form-control"
                      type="text"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group mb-30">
                    <input
                      name="form_email"
                      className="form-control required email"
                      type="email"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group mb-30">
                    <input
                      name="form_subject"
                      className="form-control required"
                      type="text"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group mb-30">
                    <input
                      name="form_phone"
                      className="form-control"
                      type="text"
                      placeholder="Enter Phone"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="form_message"
                  className="form-control required"
                  rows={5}
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  name="form_botcheck"
                  className="form-control"
                  type="hidden"
                  value=""
                />
                <button
                  type="submit"
                  className="btn btn-flat btn-theme-colored text-uppercase mt-10 mb-sm-30 border-left-theme-color-2-4px"
                  data-loading-text="Please wait..."
                >
                  Send your message
                </button>
                <button
                  type="reset"
                  className="btn btn-flat btn-theme-colored text-uppercase mt-10 mb-sm-30 border-left-theme-color-2-4px"
                >
                  Reset
                </button>
              </div>
            </form>

            {/* <!-- Contact Form Validation--> */}
            {/* <script type="text/javascript">
  $("#contact_form").validate({
    submitHandler: function(form) {
      var form_btn = $(form).find('button[type="submit"]');
      var form_result_div = '#form-result';
      $(form_result_div).remove();
      form_btn.before('<div id="form-result" className="alert alert-success" role="alert" style="display: none;"></div>');
      var form_btn_old_msg = form_btn.html();
      form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
      $(form).ajaxSubmit({
        dataType:  'json',
        success: function(data) {
          if( data.status == 'true' ) {
            $(form).find('.form-control').val('');
          }
          form_btn.prop('disabled', false).html(form_btn_old_msg);
          $(form_result_div).html(data.message).fadeIn('slow');
          setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
        }
      });
    }
  });
                </script> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
