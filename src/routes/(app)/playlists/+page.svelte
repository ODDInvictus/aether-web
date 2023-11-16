<script lang="ts">
	import { Backend } from '$lib/backend';
  import Title from '$lib/components/Title.svelte';
  import type { PageData } from './$types';
    
  export let data: PageData;

  async function play(id: string) {
    await Backend.play(id)
  }
</script>

<div class="root">
  <Title title="afspeellijsten" />

  <table>
    <thead>
      <tr>
        <th>naam</th>
        <th>speel</th>
      </tr>
    </thead>
    <tbody>
      {#each data.playlists as p}
        <tr>
          <td>{p.name}</td>
          <td><button on:click={() => play(p.id)} class="no-styles">▶️&nbsp;</button></td>
        </tr>
      {/each}
    </tbody>
  </table>

</div>

<style lang="sass">
  .root
    height: 100%

    margin: 1rem

    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: flex-start

  table
    width: 100%

  tr
    font-size: 1.5rem
    line-height: 2rem
    font-weight: 300

  td:nth-child(2)
    text-align: end
    padding-right: 6%
</style>