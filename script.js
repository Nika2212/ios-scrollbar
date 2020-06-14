class VirtualScroller {
  constructor(id, scrollClassName) {
    this.id = id;
    this.scrollClassName = scrollClassName;
    this.scrollContainer = undefined;
    this.scrollElement = undefined;

    this.onInit();
  }

  onInit() {
    this.implementMembers();
    this.setupDefaults();
    this.setupEvents();
  }
  implementMembers() {
    this.scrollContainer = document.getElementById(this.id);
    this.scrollElement = document.createElement("div");
    this.scrollElement.classList.add(this.scrollClassName);

    this.scrollContainer.appendChild(this.scrollElement);
  }
  setupDefaults() {
    this.scrollContainer.style.position = "relative";
    this.scrollElement.style.position = "fixed";
    this.scrollElement.style.left = 5 + "px";
    this.scrollElement.style.width = this.scrollContainer.offsetWidth / (this.scrollContainer.scrollWidth / this.scrollContainer.offsetWidth) + "px";
  }
  setupEvents() {
    this.scrollContainer.addEventListener("scroll", () => {
      const scrollPosition = (this.scrollContainer.scrollLeft / (this.scrollContainer.scrollWidth / this.scrollContainer.offsetWidth));
      this.scrollElement.style.transform = `translateX(${scrollPosition}px)`;
    }, true);
  }
}

const virtualScroller = new VirtualScroller("wrapper", "custom-scrollbar");
