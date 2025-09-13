import { podcasts } from "./data.js";
import { createModal } from "./components/createModal.js";
import "./components/PodcastPreview.js";

// Get the grid container
const container = document.getElementById("podcastGrid");

// Clear the grid
container.innerHTML = "";

// Render podcast previews using Web Components 
podcasts.forEach(podcast => {
  const preview = document.createElement('podcast-preview');
  
  // Set attributes 
  preview.setAttribute('title', podcast.title);
  preview.setAttribute('image', podcast.image);
  preview.setAttribute('genres', JSON.stringify(podcast.genres));
  preview.setAttribute('seasons', podcast.seasons.toString());
  preview.setAttribute('updated', podcast.updated);
  
  // Add event listener for custom event - pass the full podcast object
  preview.addEventListener('podcast-selected', (e) => {
    // Find the full podcast object from our data (since Web Component only has basic data)
    const fullPodcast = podcasts.find(p => p.id === podcast.id);
    if (fullPodcast) {
      createModal.open(fullPodcast);
    }
  });
  
  container.appendChild(preview);
});

// Close modal handler
document.getElementById('closeModal').addEventListener('click', () => {
  createModal.close();
});