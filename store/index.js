export const state = () => ({
  repos: [
    {
      name: "Portfolio Website",
      description:
        "Built a Vuejs web-app with NuxtJS that showcases my portfolio, skills, experiences and a quick and easy way to reach out to me.",
      image: "",
      client: "Self",
      tools: ["Vue", "NuxtJs", "Sass"],
      dateCompleted: "2022-05-01",
      website: "https://kathalysth.github.io/portfolio/",
    },
  ],
  projectData: [],
});

export const mutations = {
  updateProjectData: (state, data) => {
    state.projectData = data;
  },
  updateRepoData: (state, data) => {
    state.repos = data;
  },
};

export const actions = {
  async getRepos({ state, commit }) {
    if (state.repos.length) return;

    try {
      await fetch(process.env.GITHUB_API)
        .then((response) => response.json())
        .then((data) => {
          commit(
            "updateRepoData",
            data.filter((d) =>
              ["kathalysth", "portfolio-nuxtjs"]
                .map((d) => d.toLowerCase())
                .includes(d.name.toLowerCase())
            )
          );
        });
    } catch (err) {
      console.log(err);
    }
  },
};
