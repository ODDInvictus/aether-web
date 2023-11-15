<script lang="ts">
  import type { PageData } from './$types';
    
  export let data: PageData;
  
  const lf = new Intl.ListFormat('nl')

  $: state = data.currentlyPlaying
  $: artists = state.current ? lf.format(state.track.artist.map(a => a.name)) : ''

  function play() {
    fetch('', {
      method: 'POST'
    })
  }
</script>

<main>
  <h1>Aether</h1>
  {#if state.current}
    <h2>{state.track.name}</h2>
    <h3>{artists}</h3>
  {/if}

  <button on:click={play}>Speel</button>
</main>