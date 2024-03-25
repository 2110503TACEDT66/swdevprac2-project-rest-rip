async function getWorkingSpaces() {
  const response = await fetch("https://presentation-day-1-rest-rip.vercel.app/workingSpaces");

  if (!response.ok) {
    throw new Error("Failed to fetch working spaces");
  }
  
  return await response.json();
}

export default getWorkingSpaces;
