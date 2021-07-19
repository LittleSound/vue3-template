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
import { computed, defineComponent } from 'vue'
import localeMoment from '@/util/moment'
import moment from 'moment'

export default defineComponent({
  name: 'MomentTest',
  setup () {
    const time = computed(() => moment(Date.now()).format('dddd, MMMM Do YYYY, h:mm:ss a'))
    const localeTime = computed(() => localeMoment(Date.now()).format('dddd, MMMM Do YYYY, h:mm:ss a'))
    return {
      time,
      localeTime
    }
  }
})
</script>
