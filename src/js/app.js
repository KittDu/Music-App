/**
 * WEB222 – Assignment 5
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <Kiet Dung Truong>
 *      Student ID: <122088230>
 *      Date:       <Aug 12th 2024>
 */

// All of our data is available on the global `window` object.
// Create local constiables to work with it in this file.
const { artists, songs } = window;
console.log("Artists:", artists);
console.log("Songs:", songs);

const menu = document.querySelector("#menu");
const selectedArtist = document.querySelector("#selected-artist");
const songsTableBody = document.querySelector("#songs");

document.addEventListener("DOMContentLoaded", () => {
  // Dynamically generate menu buttons for artists
  artists.forEach((artist) => {
    const button = document.createElement("button");
    button.textContent = artist.name;
    button.dataset.artistId = artist.artistId;
    menu.appendChild(button);
  });

  // Add event listener to the menu buttons
  menu.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const button = event.target;
      const artistId = button.dataset.artistId;

      // Find the artist data based on the button clicked
      const artist = artists.find((a) => a.artistId === artistId);

      if (artist) {
        // Update the selected artist title and links

        selectedArtist.innerHTML = `${artist.name} (${artist.links.map((link) => `<a href="${link.url}" target="_blank">${link.name}</a>`).join(", ")})`;

        createSongCard(songs);

        showArtist(artist.artistId);
      }
    }
  });
});

// Function to format duration
function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function showSong(artistId) {
  songsTableBody.innerHTML = "";

  const filteredSongs = songs.filter((song) => song.artistId === artistId && !song.isExplicit);

  filteredSongs.forEach((song) => {
    const songCard = createSongCard(song);
    songsTableBody.appendChild(songCard);
  });
}

// Create song card
function createSongCard(song) {
  // Add class name
  let artist = artists.find((artist) => artist.artistId === song.artistId);
  if (!artist) return;

  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.className = "song-img";
  img.id = "myImage";
  img.src = song.imageUrl;

  const songLink = document.createElement("a");
  songLink.href = song.url;
  songLink.appendChild(img);

  card.appendChild(songLink);

  const cardBody = document.createElement("div");
  cardBody.className = "cardBody";
  card.appendChild(cardBody);

  const duration = document.createElement("span");
  duration.className = "duration";
  // Align the timer to the right
  duration.style.float = "right";
  duration.style.alignItems = "center";
  duration.style.fontSize = "5%";
  duration.innerHTML = formatDuration(song.duration);
  cardBody.appendChild(duration);

  const cardTitle = document.createElement("h5");
  cardTitle.innerHTML = song.title;
  cardTitle.className = "cardTitle";
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement("p");
  cardText.innerHTML = artist.name;
  cardText.className = "cardText";
  cardBody.appendChild(cardText);

  return card;
}

function showArtist(artistId) {
  let artist = artists.find((artist) => artist.artistId === artistId);
  if (!artist) return;

  let artistName = artist.name;
  let artistLinks = artist.links;

  selectedArtist.innerHTML = "";
  let clicked = document.createElement("span");
  clicked.textContent = `${artistName} (`;
  selectedArtist.appendChild(clicked);

  artistLinks.forEach((link, index) => {
    let linkElem = document.createElement("a");
    linkElem.href = link.url;
    linkElem.target = "_blank";
    linkElem.textContent = link.name;
    selectedArtist.appendChild(linkElem);

    if (index !== artistLinks.length - 1) {
      let comma = document.createElement("span");
      comma.textContent = ", ";
      selectedArtist.appendChild(comma);
    }
  });
  let closeParenthesis = document.createElement("span");
  closeParenthesis.textContent = ")";
  selectedArtist.appendChild(closeParenthesis);
  showSong(artistId);
}

document.getElementById("request-artist").addEventListener("click", function () {
  window.location.href = "./requestArtist.html";
  document.getElementById;
  console.log("sht");
});
