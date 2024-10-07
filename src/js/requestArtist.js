// script to show more place to add song
document.getElementById("btn-add-song").addEventListener("click", function () {
  let addSong = document.createElement("input");
  addSong.type = "url";
  addSong.name = "url[]";
  addSong.placeholder = "Add Song/Video URLs";
  addSong.className = "form-control";
  addSong.id = "basic-url";

  // Append the new input to the container
  document.getElementById("url-input-container").appendChild(addSong);
});
