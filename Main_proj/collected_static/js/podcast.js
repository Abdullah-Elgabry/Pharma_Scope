let search = document.querySelector(".search");
search.addEventListener("input", () => {
  // window.removeEventListener("keydown", onKeyDown, false);
  let cases = document.querySelectorAll(".podcasts-cont>div");
  cases.forEach((c) => {
    c.style.display = "block";
  });
  let found = false;
  if (search.value) {
    cases.forEach((c) => {
      if (!c.innerText.toLowerCase().includes(search.value.toLowerCase())) {
        c.style.display = "none";
      } else {
        found = true;
      }
    });
  } else {
    found = true;
  }

  if (!found) {
    document.querySelector(".validTxt").classList.remove("d-none");
  } else {
    document.querySelector(".validTxt").classList.add("d-none");
  }
});



