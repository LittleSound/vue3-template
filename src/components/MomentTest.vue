<template>
  <h3>
    Moment Test
  </h3>
  <p>
    Time: {{ time }}
  </p>
  <p>
    Locale time: {{ localeTime }}
  </p>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import localeMoment from '@/util/moment'
import moment from 'moment'

const timeNow = ref(Date.now())
const fps = 10

export default defineComponent({
  name: 'MomentTest',
  setup () {
    const time = computed(() => moment(timeNow.value).format('dddd, MMMM Do YYYY, h:mm:ss a'))
    const localeTime = computed(() => localeMoment(timeNow.value).format('dddd, MMMM Do YYYY, h:mm:ss a'))
    goFrame(0)
    return {
      time,
      localeTime
    }
  }
})

function frame () {
  const now = Date.now()
  timeNow.value = now
  return Date.now() - now
}
function goFrame (frameRate: number) {
  let timeD = Math.round(1000 / fps) - frameRate
  if (timeD < 0) timeD = 0
  setTimeout(() => goFrame(frame()), timeD)
}
</script>
