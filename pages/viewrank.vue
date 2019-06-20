<template>
    <div>
        <awardrank :details="this.details" :isDisabled="true">
        </awardrank>
    </div>
</template>

<script>

import awardrank from '../components/awardrank'
export default {
    components: {
        awardrank
    },
    data() {
        return {
            details: {
                m: ''
            }
        }
    }

}
</script>

<style>

</style>