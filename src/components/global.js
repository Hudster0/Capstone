export const fetchAPI = async (selectedDate) => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js",
      {
        method: "GET",
        // Add any necessary headers or body
      }
    );

    const data = await response.json(); // Assuming a JSON response

    // Extract available times from the response data
    const availableTimes = data.availableTimes; // Adjust based on data structure

    return availableTimes;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw to handle in calling component
  }
};
export const submitAPI = async (formData) => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    const isSubmitted = data.success; // Assuming a success flag in response

    return isSubmitted;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error; // Re-throw to handle in calling component
  }
};
