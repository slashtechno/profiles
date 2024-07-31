<script>
import "../app.css";
import { ModeToggle } from '$lib'
import { ModeWatcher } from "mode-watcher";
</script>
<ModeWatcher />
<slot></slot>
<!-- https://tailwindcss.com/docs/top-right-bottom-left -->
<!-- "4" means 16 px (1rem) from the bottom and right -->
<div class="fixed bottom-4 right-4">
    <ModeToggle />
  </div>