<script lang="ts">
  import type { PageData } from '../$types';
    
  export let data: PageData;
  
  const lf = new Intl.ListFormat('nl')

  $: state = data.currentlyPlaying
  $: artists = state.current ? lf.format(state.track.artist.map(a => a.name)) : ''
</script>

<div class="main">
  {#if state.current}
    <h1>{state.track.name}</h1>
    <h2>{artists}</h2>
  {/if}
</div>

<style lang="sass">
  .main
    height: 100%
    width: 100%
    margin-left: 2rem

    display: flex
    justify-content: center
    align-items: flex-start
    flex-direction: column

    overflow: hidden

  h1
    font-size: 10rem
    margin-bottom: -0.8rem

  h2
    font-size: 5rem

</style>