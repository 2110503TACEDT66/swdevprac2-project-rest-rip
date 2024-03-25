async function getWorkingSpace(id: string) {
  const response = await fetch(`https://presentation-day-1-rest-rip.vercel.app/workingSpaces/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch hospital");
  }

  return await response.json();
}

export default getWorkingSpace;
