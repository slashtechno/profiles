import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';
import { toast } from 'svelte-sonner'

// Connect to the PocketBase server
export const pb = new PocketBase('https://profiles-api.angad.me') 

// Create a variable for the current user
// Default value is pb.authStore.model which is null until the user logs in and is then the db record
export const currentUser = writable(pb.authStore.model);

// When the user signs in or out:
pb.authStore.onChange((auth) => {
    console.log('authStore changed', auth)

    // Update the Svelte store with the currently logged in user
    currentUser.set(pb.authStore.model)
})
