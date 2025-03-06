document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.getElementById("about");
  aboutSection.style.display = "none"; 

  const button = document.createElement("button");
  button.textContent = "自己紹介を表示";
  document.body.insertBefore(button, aboutSection);

  button.addEventListener("click", function () {
      if (aboutSection.style.display === "none") {
          aboutSection.style.display = "block";
          button.textContent = "自己紹介を隠す";
      } else {
          aboutSection.style.display = "none";
          button.textContent = "自己紹介を表示";
      }
  });
});
