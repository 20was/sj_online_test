<template>
  <div class="container" v-if="match">
    <HeroContainer :imgUrl='match.jobTitle.imageUrl'/>
    <TitleContainer :title="match.jobTitle.name" :subTitle="match.company.name"/>
    <RateContainer :distance='distance' :rate='rate'/>
    <div class="details-wrapper">
      <DetailsBox icon="fa-solid fa-calendar-days"
                  heading="Shift Dates"
                  :shift="match.shifts"
                  :zone="match.company.address.zoneId"/>
      <DetailsBox icon="fa-solid fa-location-dot"
                  heading="Location"
                  :address="match.company.address"
                  :distance="miles"
                  rightArrow="true"
      />
      <DetailsBox icon="fa-solid fa-screwdriver-wrench" heading="Requirements" :requirements="match.requirements"/>
      <DetailsBox icon="fa-solid fa-circle-user" heading="Report To" :report="match.company.reportTo"/>
    </div>
    <div class="button-wrapper">
      <button type="submit" class="reject-button" @click="rejectJob(match.jobId)">No Thanks</button>
      <button type="submit" class="accept-button" @click="acceptJob(match.jobId)">I'll Take It</button>
    </div>
  </div>
</template>

<script>
import DetailsBox from "@/components/Details";
import HeroContainer from "@/components/HeroContainer";
import TitleContainer from "@/components/TitleContainer";
import RateContainer from "@/components/RateContainer";
import worker_service from "@/services/worker_service";
export default {
  name: 'JobsCard',
  props: {
    match: Object,
    workerId: {
      type: String,
      required: true
    },
  },
  components: {RateContainer, TitleContainer, HeroContainer, DetailsBox},
  data() {
    return {}
  },
  computed: {
    distance: function () {
      return this.match.milesToTravel.toFixed(1);
    },
    rate: function () {
      return (this.match.wagePerHourInCents / 100).toFixed(2);
    },
    miles: function () {
      return this.match.milesToTravel.toFixed(2);
    }
  },
  methods: {
    rejectJob(jobId) {
      worker_service.rejectJob(this.workerId, jobId)
          .then(body => {
            this.displayAlert('success','Success !!','Job Rejected')
            console.log(body)
          })
          .catch((error) => {
            console.log(error)
            this.displayAlert('error','OOPS !!', error)
          });
    },
    acceptJob(jobId) {
      worker_service.acceptJob(this.workerId, jobId)
          .then(body => {
            this.displayAlert('success','Success !!','Job Accepted')
            console.log(body)
          })
          .catch((error) => {
            console.log(error)
            this.displayAlert('error','OOPS !!', error)
          });
    },
    displayAlert(icon,title,text){
      this.$swal.fire({
        icon: icon,
        title:title,
        text: text,
      })
    }
  }
}
</script>

<style scoped>
.container {
  box-sizing: border-box;
  background: #fff;
  border-radius: 5px;
}

.details-wrapper {
  box-sizing: border-box;
  padding: 15px;
}

img {
  width: 100%;
  max-height: 300px;
  height: 100%;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.button-wrapper {
  display: flex;
  box-sizing: border-box;
  padding: 5px 15px 15px;
}

.button-wrapper button {
  flex-grow: 1;
  margin: 5px;
  font-size: 18px;
  height: 50px;
  border-radius: 3px;
  cursor: pointer;
  box-sizing: border-box;
  padding: 8px;
}

.reject-button {
  border: 1px solid #bdbdbd;
  background: #fff;
  color: #bdbdbd;
}

.accept-button {
  border: 1px solid #000;
  background: black;
  color: white;
}
</style>
