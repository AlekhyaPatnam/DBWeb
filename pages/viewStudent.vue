<template>
    <div>
        <student :details="this.details" :isDisabled="true">
        </student>
    </div>
</template>

<script>

import student from '../components/student'
export default {
    components: {
        student
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
