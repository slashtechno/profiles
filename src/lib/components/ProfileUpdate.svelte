<script lang="js" async>
    import { pb, currentUser } from "$lib/pocketbase";
    import { toast, Toaster } from "svelte-sonner";
    import { CornerDownLeft } from "lucide-svelte/icons";
    import { Button } from "$lib/components/ui/button";
    import { Textarea } from "$lib/components/ui/textarea";
    import { Label } from "$lib/components/ui/label";
    import { onMount } from "svelte";
    import SvelteMarkdown from "svelte-markdown";
    import insane from "insane";

    let description, record, id;

    onMount(async () => {
        try {
            record = await pb.collection("users").getFirstListItem(
                pb.filter("username={:username}", {
                    username: $currentUser.username,
                }),
            );
            console.log(record);
            description = record.description;
            id = record.id;
        } catch (err) {
            console.error(err.data);
            toast(err.data);
        }
    });

    async function update() {
        console.log("Updating");
        try {
            const data = {
                description: description,
            };
            const record = await pb.collection("users").update(id, data);
        } catch (err) {
            console.error(err.data);
            toast(JSON.stringify(err.data));
        }
    }
</script>

{#if $currentUser}
    <form
        class="bg-background focus-within:ring-ring relative overflow-hidden rounded-lg border focus-within:ring-1 mt-12"
        preventDefault={update}
    >
        <!-- <p class="text-2xl">Bio</p> -->
        <Label for="bio" class="text-lg md:text-2xl my-4 inline-block">Your bio:</Label>
            <Textarea
                id="bio"
                class="min-h-60 lg:min-h-32 resize-y border border-border p-3 focus-visible:ring-0"
                bind:value={description}
            />
        <div class="flex items-center p-3 pt-0">
            <Button
                type="submit"
                size="sm"
                class="ml-auto gap-1.5 mt-5"
                on:click={update}
            >
                Update bio
                <CornerDownLeft class="size-3.5" />
            </Button>
        </div>
    </form>
    <Toaster />
    <Label class="text-2xl mt-12 mb-4 inline-block">Markdown preview:</Label>
    <div
    class="border border-border rounded-lg p-4 shadow-md bg-card text-card-foreground"
    >
        <SvelteMarkdown source={insane(description)} />
    </div>
{/if}
