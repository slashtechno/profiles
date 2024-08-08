<script lang="js" async>
    import { pb, currentUser } from "$lib/pocketbase";
    import { toast, Toaster } from "svelte-sonner";
    import { CornerDownLeft } from "lucide-svelte/icons";
    import { Button } from "$lib/components/ui/button";
    import { Textarea } from "$lib/components/ui/textarea";
    import { Label } from "$lib/components/ui/label";
    import { onMount } from "svelte";
    import SvelteMarkdown from "svelte-markdown";

    let description, record, id

    onMount(async () => {
        try {
            record = await pb.collection("users").getFirstListItem(
                pb.filter("username={:username}", {
                    username: $currentUser.username,
                }),
            );
            console.log(record);
            description = record.description;
            id = record.id
        } catch (err) {
            console.error(err.data);
            toast(err.data);
        }
    });

    async function update() {
        console.log("Updating")
        try {
            const data = {
                description: description
            };
            const record = await pb
                .collection("users")
                .update(id, data);
        } catch (err) {
            console.error(err.data)
            toast(JSON.stringify(err.data));
        }
    }
</script>

<form
class="bg-background focus-within:ring-ring relative overflow-hidden rounded-lg border focus-within:ring-1" preventDefault={update}>
<p class="text-2xl">Bio</p>
    <Label for="bio" class="sr-only">Profile bio</Label>
    <Textarea
        id="bio"
        class="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
        bind:value={description}
    />
    <div class="flex items-center p-3 pt-0">
        <Button type="submit" size="sm" class="ml-auto gap-1.5" on:click={update}>
            Update bio
            <CornerDownLeft class="size-3.5" />
        </Button>
    </div>
</form>
<Toaster />