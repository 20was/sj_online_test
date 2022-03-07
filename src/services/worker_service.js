import axios from "axios"

const PATH = '/worker'
const URL = 'https://test.swipejobs.com/api'

export default {
    async getWorkerProfile(workerId) {
        return await axios.get(URL + PATH + "/" + workerId + "/profile");
    },
    async getWorkerMatches(workerId) {
        return await axios.get(URL + PATH + "/" + workerId + "/matches");
    },
    async rejectjob(workerId,jobId) {
        return await axios.post(URL + PATH + "/" + workerId + "/job/" +jobId+"/reject");
    },
    async acceptJob(workerId,jobId) {
        return await axios.post(URL + PATH + "/" + workerId + "/job/" +jobId+"/accept");
    },
}