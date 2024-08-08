const containerEl = document.querySelector(".container");
window.addEventListener("mousemove", (event) => {
   // console.log(event);
   containerEl.innerHTML = `
   <div class="mouse-event">
            <span>${event.clientX}</span>
            <h4>Mouse X Position(px)</h4>
        </div>
        
        <div class="mouse-event">
            <span>${event.clientY}20</span>
            <h4>Mouse Y Position(px)</h4>
        </div>
   `;
})