<template>
  <div>
    <NavigationBar :profile="profile"/>
    <div class="jobs-wrapper" v-for="match in matches" :key="match.id">
      <Jobs v-if="match" :match="match" :workerId="workerId"/>
      <NotFound v-else/>
    </div>
  </div>
</template>
<script>
import Jobs from '@/components/Jobs.vue'
import worker_service from "@/services/worker_service";
import NavigationBar from "@/components/Navigation";
import NotFound from "@/components/NotFound";

export default {
  name: 'App',
  components: {
    NotFound,
    NavigationBar,
    Jobs
  },
  data() {
    return {
      profile: '',
      matches: '',
      workerId: '7f90df6e-b832-44e2-b624-3143d428001f'
    }
  },
  methods: {
    getProfile() {
      worker_service.getWorkerProfile(this.workerId)
          .then(body => {
            this.profile = body.data
          })
          .catch((error) => console.log(error));
    },
    getMatches() {
      worker_service.getWorkerMatches(this.workerId)
          .then(body => {
            this.matches = body.data
          })
          .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getProfile();
    this.getMatches()
  }
}
</script>

<style scoped>
.jobs-wrapper {
  height: 100%;
  box-sizing: border-box;
  background: #eee;
  margin: 0 auto;
  padding: 0.9375rem;
}
</style>
