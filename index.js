document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".foodTab");
  const tabContents = document.querySelectorAll(".tab-content");
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove 'active' class from all tabs and tab contents
      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((tc) => tc.classList.remove("active"));

      // Add 'active' class to the clicked tab
      tab.classList.add("active");
      console.log("tabs ", tabs);

      // Hide all menu items
      Array.from(tabContents).forEach((content) => {
        Array.from(content.getElementsByClassName("menu-item")).forEach(
          (item) => {
            item.style.display = "none";
          }
        );
      });

      // Show only the first 6 items for the clicked tab
      const tabIndex = Array.from(tabs).indexOf(tab);
      const currentTabContent = tabContents[tabIndex];

      currentTabContent.classList.add("active"); // Display the current tab content
      const itemsToShow = Array.from(
        currentTabContent.getElementsByClassName("menu-item")
      ).slice(0, 6);
      console.log(itemsToShow, "itemShow");
      itemsToShow.forEach((item) => {
        item.style.display = "flex"; // Assuming the original display property is 'flex'
      });
    });
  });
  tabs[0].click();
});
