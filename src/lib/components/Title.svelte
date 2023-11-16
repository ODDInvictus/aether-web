<script lang="ts">
  export let title: string
</script>

<div>
  <h1>
    {title}
  </h1>
  
  <hr />
</div>

<style lang="sass">
  div
    width: 100%

    display: flex
    flex-direction: column

    justify-content: center
    align-items: center

  h1
    font-size: 3rem
</style>