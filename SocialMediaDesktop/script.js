// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
  // Fetch data from 'data.json' file
  fetch('data.json')
    .then(response => response.json()) // Parse the JSON data from the response
    .then(data => {
      // Get the 2D context of the canvas elements for the charts
      const followerGrowthCtx = document.getElementById('followerGrowthChart').getContext('2d');
      const engagementRateCtx = document.getElementById('engagementRateChart').getContext('2d');
      const activityTimelineCtx = document.getElementById('activityTimelineChart').getContext('2d');

      // Create a new Chart instance for Follower Growth
      new Chart(followerGrowthCtx, {
        type: 'line', // Specify the type of chart
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // X-axis labels
          datasets: [{
            label: 'Follower Growth', // Chart label
            data: data.followerGrowth, // Data from the JSON file
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            borderWidth: 1 // Line width
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true // Start the Y-axis at zero
            }
          }
        }
      });

      // Create a new Chart instance for Engagement Rate
      new Chart(engagementRateCtx, {
        type: 'bar', // Specify the type of chart
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // X-axis labels
          datasets: [{
            label: 'Engagement Rate (%)', // Chart label
            data: data.engagementRates, // Data from the JSON file
            backgroundColor: 'rgba(153, 102, 255, 0.2)', // Bar color (background)
            borderColor: 'rgba(153, 102, 255, 1)', // Bar border color
            borderWidth: 1 // Bar border width
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true // Start the Y-axis at zero
            }
          }
        }
      });

      // Create a new Chart instance for Activity Timeline
      new Chart(activityTimelineCtx, {
        type: 'line', // Specify the type of chart
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // X-axis labels
          datasets: [{
            label: 'Activity Timeline', // Chart label
            data: data.activityTimeline, // Data from the JSON file
            borderColor: 'rgba(255, 159, 64, 1)', // Line color
            borderWidth: 1 // Line width
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true // Start the Y-axis at zero
            }
          }
        }
      });
    })
    .catch(error => console.error('Error fetching data:', error)); // Handle errors in data fetching
});
