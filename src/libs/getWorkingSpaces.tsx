async function getWorkingSpaces() {
  const response = await fetch("https://coworkingspaceapi.onrender.com/workingSpaces");

  if (!response.ok) {
    throw new Error("Failed to fetch working spaces");
  }
  
  return await response.json();
}

export default getWorkingSpaces;
