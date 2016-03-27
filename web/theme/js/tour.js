// Instance the tour
var tour = new Tour({
  steps: [
  {
    element: "#server_1",
    title: "Title of my step",
    content: "Content of my step",
    placement: 'bottom'
  },
  {
    element: "#server-data_1",
    title: "Title of my step",
    content: "Content of my step",
    placement: 'bottom'
  }
],
backdrop: true
});

// Initialize the tour
tour.init();

// Start the tour
tour.start();
