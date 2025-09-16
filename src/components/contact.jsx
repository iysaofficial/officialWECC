import { useEffect } from "react";
function Contact() {
   useEffect(() => {
      const scriptURL =
      "https://script.google.com/macros/s/AKfycbzdgUOy_s6zjJQTgqXQ7GX3H1_w6TvWq1hsBZgH0mSREWt3qXCKA34-qo74-jfDVbHE/exec";

      const form = document.forms.namedItem("contact");

      if (form) {
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
          await fetch(scriptURL, {
              method: "POST",
              body: new FormData(form),
          });
          alert("Message sent successfully!");
          form.reset();
          } catch (error) {
          console.error("Error:", error);
          alert("Failed to send Message.");
          }
      };

      form.addEventListener("submit", handleSubmit);

      // cleanup listener
      return () => {
          form.removeEventListener("submit", handleSubmit);
      };
      }
  }, []);

    return (
      <>
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>Contact</h1>
        <a href="/">Home</a>
      </div>
    {/* PAGE HEADER END */}
      <section className="contact-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase mb-5">Contact Us</h2>
                </div>
                <form action="" name="contact" method="POST" id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <input type="hidden" name="Event" value="WECC" readOnly />
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            {/* Name input */}
                            <div class="form-group">
                                <input class="form-control" id="name" type="text" name="Name" placeholder="Your Name *" required />
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            {/* Email address input  */}
                            <div class="form-group">
                                <input class="form-control" id="email" type="email" name="Email" placeholder="Your Email *" required />
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                        </div>
                        {/* Message input */}
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
                                <textarea class="form-control" id="message" name="Message" placeholder="Your Message *" required></textarea>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                    </div>
                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                    {/* Submit Button */}
                    <div class="text-center"><button class="btn btn-xl text-uppercase" id="submitButton" type="submit">Send Message</button></div>
                </form>
            </div>
        </section>
      </>
    )
  }
  
  export default Contact