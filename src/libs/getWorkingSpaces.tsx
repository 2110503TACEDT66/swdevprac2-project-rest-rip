async function getWorkingSpaces() {
  const response = await fetch("http://localhost:5000/workingSpaces");

  if (!response.ok) {
    throw new Error("Failed to fetch working spaces");
  }
  
  return await response.json();
}

export default getWorkingSpaces;
