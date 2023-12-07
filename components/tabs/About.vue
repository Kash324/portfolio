<template>
  <div
    class="page aboutpage"
    :class="{
      'active-page': isActive,
      'animate__animated animate__zoomIn': isActive,
    }"
  >
    <div class="page-wrapper">
      <PageHeader :title="'About me'" :secondaryTitle="'resume'" />
      <section>
        <!-- personal info -->
        <div class="row">
          <div class="col-12 col-lg-6 pers-info">
            <div class="section-title">
              <h3>Personal Info</h3>
            </div>
            <img
              class="img-mobile"
              :src="require('@/assets/my-portrait.jpg')"
            />
            <div class="personal-info">
              <ul>
                <li>
                  <span class="label">First Name</span>
                  <span class="label-value">Akash</span>
                </li>
                <li>
                  <span class="label">last name</span>
                  <span class="label-value">Patel</span>
                </li>

                <li>
                  <span class="label">email</span>
                  <span class="">akashptl324@gmail.com</span>
                </li>

                <li>
                  <span class="label">phone</span>
                  <span class="label-value">+1 (416) 729-6674</span>
                </li>

                <li>
                  <span class="label">github</span>
                  <span class="label-value">
                    <a href="https://github.com/kathalysth" target="_blank">
                      <font-awesome-icon :icon="['fas', 'link']" /> View
                      GitHUB</a
                    >
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <a
                class="button"
                :href="require('@/assets/Akash Patel Resume.pdf')"
                download
              >
                <span class="btn-text">Download Resume</span>
                <font-awesome-icon
                  :icon="['fas', 'download']"
                  class="btn-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ExperienceCard from "../cards/Experience.vue";
import EducationCard from "../cards/Education.vue";
import SkillCard from "../cards/Skill.vue";
import PageHeader from "../PageHeader.vue";

export default {
  name: "AboutPage",
  props: ["isActive"],
  components: { ExperienceCard, SkillCard, EducationCard, PageHeader },
  data() {
    return {};
  },
};
</script>
