<script lang="ts">
    import {
      Button,
      buttonVariants
    } from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
  </script>
   
  <Dialog.Root>
    <Dialog.Trigger class={buttonVariants({ variant: "outline" })}
      >What's this?</Dialog.Trigger
    >
    <Dialog.Content class="sm:max-w-[425px]">
      <Dialog.Header>
        <Dialog.Title>What's this?</Dialog.Title>
    </Dialog.Header>
        <Dialog.Description>
          Social media platforms can be bloated. What about a rich text landing page?
        </Dialog.Description>
        <!-- Center -->
        <div class="flex justify-center">
            <!-- TODO: Improve margin/padding -->
        <p>
          profiles is a project that allows you to make a home for yourself on the internet with markdown. Each user gets their own profile page, which they can customize with markdown. Why markdown? It's simple, easy to learn, and can be used to create rich text.
        <Button href="https://github.com/slashtechno/profiles" target="_blank">
            View on GitHub (and maybe star it?)
            </Button>
      </div>
      <Dialog.Footer>
        <Button type="submit">Save changes</Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Root>