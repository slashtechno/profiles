<script lang="ts">
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
</script>

<div class="mb-4">
<Dialog.Root>
  <div class="flex justify-center">
    <Dialog.Trigger class={`${buttonVariants({ variant: "outline" })}`}
      >What's this?</Dialog.Trigger
    >
  </div>
  <Dialog.Content class="sm:max-w-[425px]">
    <Dialog.Header>
      <Dialog.Title>What's this?</Dialog.Title>
    </Dialog.Header>
    <Dialog.Description>
      Social media platforms can be bloated. What about a rich text landing page that's yours to customize?
    </Dialog.Description>
    <!-- Center -->
    <div class="flex justify-center flex-col items-center">
      <p>
        <em>profiles</em> is a project that allows you to make a home for yourself
        on the internet with markdown. Each user gets their own profile page, which
        can be customized with markdown. Why markdown? It's simple, easy to learn,
        and can be used to create rich text. In addition, things like images or even iframes can be embedded.
      </p>
      <br>
      <p>If you haven't used markdown before, now's a perfect time to <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank">learn</a> about it! Before it's rendered, the markdown is sanitized.</p>
      <br>
      <p>Each profile has it's own unique URL, which can be shared with others. There are no ads and no magic algorithms. Just you and your home on the internet.</p>
      <br>
      <p>The code is open source and contributions are welcome!</p>
    </div>
    <Button href="https://github.com/slashtechno/profiles" target="_blank">
      View on GitHub (and maybe star it?)
    </Button>
    <Dialog.Footer>
      <!-- <Button type="submit">Save changes</Button> -->
      <p>- Angad Behl</p>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
</div>