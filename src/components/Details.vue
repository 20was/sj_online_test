<template>
  <div class="details-container">
    <div class="icon-wrapper">
      <i :class="icon"></i>
    </div>
    <div class="job-details">
      <h3>{{ heading }}</h3>
      <ul v-if="shift">
        <li v-for="(shift,i) in shift" :key="i">{{ sDate(shift.startDate) }} - {{ eDate(shift.endDate) }}</li>
      </ul>
      <div class="address-wrapper">
        <div>
          <div v-if="address">
            {{ address.formattedAddress }}
          </div>
          <div v-if="distance" style="color: #706d6d">{{ distance }} miles from your job search location</div>
        </div>
        <span v-if="rightArrow">
            <i class="fa-solid fa-chevron-right"></i>
         </span>
      </div>
      <div v-if="requirements">
        <ul>
          <li v-for="(requirement,i) in requirements" :key="i">- {{ requirement }}</li>
        </ul>
      </div>
      <div v-if="report">
        <span>{{ report.name }} {{report.phone}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import 'moment-timezone';
export default {
  name: "DetailsBox",
  components: {},
  props: {
    icon: {
      type: String,
      required:true,
      default:'fa-solid fa-circle-dot'
    },
    heading:String,
    shift: Array,
    address: Object,
    requirements: Array,
    report: Object,
    distance: {
      type: [String,Number],
    },
    rightArrow: Boolean,
    zone:  String,
  },
  data() {
    return {
      timeFormat: {
        start: 'MMM D, ddd h:mm A',
        end: 'h:mmA z',
      }
    }
  },
  methods: {
    sDate (date) {
      return moment(new Date(date)).tz(this.zone).format(this.timeFormat.start)
    },
    eDate (date) {
      return moment(new Date(date)).tz(this.zone).format(this.timeFormat.end)
    }
  }
}
</script>

<style scoped>
.details-container {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
}

.details-container:last-child {
  border-bottom: none;
}

.icon-wrapper {
  box-sizing: border-box;
  width: 24px;
}

.job-details {
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  flex: 1;
}

.job-details h4 {
  margin: 0 0 5px;
  font-size: 16px;
  font-weight: bold;
}

.job-details div {
  font-size: 16px;
  font-weight: normal;
  margin: 0 0 5px;
}

.job-details p {
  font-size: 12px;
  font-weight: normal;
  color: #666;
  margin: 0;
}

.address-wrapper {
  display: flex;
  justify-content: space-between;
}

.job-details h3 {
  margin: 0;
}

ul {
  padding-left: 0;
  margin: 0;
}

li {
  list-style-type: none;
}

.icon-wrapper {
  font-size: 1.8rem;
}
</style>