async function getWorkingSpace(id: string) {
  const response = await fetch(`https://coworkingspaceapi.onrender.com/workingSpaces/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch hospital");
  }

  return await response.json();
}

export default getWorkingSpace;
