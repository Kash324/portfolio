<!-- Please remove this file from your project -->
<template>
  <div
    class="page homepage fade"
    :class="{
      'active-page': isActive,
      'animate__animated animate__zoomIn': isActive,
    }"
  >
    <div class="container-fluid">
      <div class="content-wrapper row">
        <div class="details col-12 col-lg-8">
          <div>
            <h1>
              Akash Patel.
              <span>Software Developer</span>
            </h1>
            <p>
              I'm a Javascript Developer that focuses on front-end frameworks
              such as React, Vue, NuxtJS and NextJS. I have a passion for Design
              Systems, Web Accessibility, Open Source Contribution, and System
              Integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: ["isActive", "setShowModal"],
};
</script>
