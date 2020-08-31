$(document).ready(() => {
  $("#admin-menu").on("click", event => {
    event.preventDefault();
    const operation = event.target.getAttribute("data-admin-item");
    if (operation === "create-bike") {
      $("#admin-menu").remove();
    } else if (operation === "update-bike") {
      $("#admin-menu").remove();
    } else if (operation === "delete-bike") {
      $("#admin-menu").remove();
    }
  });
});
