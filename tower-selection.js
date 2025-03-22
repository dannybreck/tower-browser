document.addEventListener("DOMContentLoaded", () => {
  const towers = document.querySelectorAll(".tower")

  // For mobile/touch, we can toggle the popover or go straight to a link
  towers.forEach((tower) => {
    tower.addEventListener("click", (e) => {
      const towerName = tower.getAttribute("data-tower")

      // If Tower I is sold out, do nothing or show a message
      if (towerName === "I") {
        // For demonstration, we’ll just log it:
        console.log("Tower I is SOLD OUT. No link action.")
      }
      // Tower II -> floors-tower-ii.html
      else if (towerName === "II") {
        window.location.href = "floors-tower-ii.html"
      }
      // Tower III -> floors-tower-iii.html
      else if (towerName === "III") {
        window.location.href = "floors-tower-iii.html"
      }
    })
  })

  document.querySelectorAll(".tower").forEach((tower) => {
    tower.addEventListener("mouseenter", function () {
      this.classList.add("active")
    })
    tower.addEventListener("mouseleave", function () {
      this.classList.remove("active")
    })
  })
})
