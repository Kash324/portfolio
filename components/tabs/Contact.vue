<template>
  <div
    class="page contactpage"
    :class="{
      'active-page': isActive,
      'animate__animated animate__zoomIn': isActive,
    }"
  >
    <div class="page-wrapper">
      <PageHeader :title="'Get in touch'" :secondaryTitle="'contact'" />
      <div class="row space-between">
        <div class="contact col-12 col-lg-5 addr">
          <h3>REACH OUT!</h3>
          <p>
            You can get in touch with me. I am open to discussing new projects
            or improving on existing ones, creative collaborations or
            opportunities to explore the boundless possibilities of software
            design.
          </p>
          <address>
            <font-awesome-icon :icon="['fas', 'map']" />
            <h5>Address Point</h5>
            <p>35 Topbank Dr. Toronto, Ontario</p>
          </address>
          <address>
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <h5>Send a mail</h5>
            <p>akashptl324@gmail.com</p>
          </address>
          <address>
            <font-awesome-icon :icon="['fas', 'square-phone']" />
            <h5>Call</h5>
            <p>+1 (416) 729-6674</p>
          </address>
          <ul>
            <li>
              <a href="https://github.com/kathalysth" target="_blank"
                ><img :src="gitHubLogo"
              /></a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-6">
          <h1>Certifications</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "../PageHeader.vue";

export default {
  name: "ContactPage",
  props: ["isActive"],
  components: { PageHeader },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      isLoading: false,
      gitHubLogo: require("@/assets/img/svg/github.svg"),
    };
  },
  methods: {
    handleFormSubmit() {
      this.isLoading = true;
      fetch("https://formsubmit.co/ajax/akashptl324@gmail.com.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.$swal(
            "Thank You!",
            "I appreciate you taking the time to reach out!",
            "success"
          );
          this.name = "";
          this.subject = "";
          this.message = "";
          this.email = "";
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.$swal("Something went wrong!", "Please try again!", "error");
        });
    },
  },
};
</script>
