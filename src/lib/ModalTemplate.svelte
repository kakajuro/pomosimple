<script>
  import {
    modalOpen
  } from "../stores/mainStores"

  import Icon from "svelte-icons-pack/Icon.svelte";
  import CgCloseO from "svelte-icons-pack/cg/CgCloseO"; 

  const show = () => $modalOpen = true;
  const hide = () => $modalOpen = false;

  let hoveringOnModal = false;

  export const checkWhereClicked = () => (hoveringOnModal ? "" : hide());

</script>

{#if $modalOpen}
  <div class="bg-black bg-opacity-60 fixed w-full h-full t-0 l-0 right-0 bottom-0 text-black flex justify-center"
    on:click={() => checkWhereClicked()}
    on:keydown={(e) => {
      if (e.key === 'Escape') {
        hide();
      }
    }}
  >
    <div class="bg-white min-w-[350px] md:w-[420px] p-[1rem] my-16 rounded-md"
      on:mouseenter={() => hoveringOnModal = true}
      on:mouseleave={() => hoveringOnModal = false}
    >
      <button class="float-right hover:cursor-pointer hover:scale-105 transition-all" 
        on:click={() => hide()}
        on:keydown={(e) => {
          if (e.key == 'Enter') {
            hide();
          }
        }}
      >
        <Icon src={CgCloseO}/>
      </button>
      <slot />
    </div>
  </div>
{/if}