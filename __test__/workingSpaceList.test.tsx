import WorkingSpaceCatalog from "@/components/WorkingSpaceCatalog"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"; // Import the render function
import getWorkingSpaces from "@/libs/getWorkingSpaces";


const mockResult = {
    "success": true,
    "data": {
        "_id": "660129f2248149607426ecdf",
        "name": "KLOUD by KBunk",
        "address": "430, 6-10 Rama I Rd",
        "district": "Khwaeng Pathum Wan",
        "province": "Bangkok",
        "postalcode": "10330",
        "tel": "02-8369999",
        "region": "กรุงเทพมหานคร (Bangkok)",
        "picture": "https://assets.brandinside.asia/uploads/2022/07/DSC01993-scaled.jpg",
        "__v": 0,
    }
}

// Mocking next/link component
jest.mock('next/link', () => {
    return ({ children, href }: { children: React.ReactNode, href: string }) => {
        return <a href={href}>{children}</a>;
    };
});

describe("fetch workingSpace data", () => {
    it("should fetch workingSpace data", async () => {
        const workingSpace = await getWorkingSpaces();
        expect(workingSpace.data).toEqual(mockResult.data);
    });
});



describe("/workingSpace page", () => {

    it("should render WorkingSpaceCatalog component", () => {
        render(<WorkingSpaceCatalog workingSpacesJson={getWorkingSpaces()} />);
        // Add your assertions here
        const workingSpaceName = screen.findByText(mockResult.data.name);
        const workingSpaceAddress = screen.findByText(mockResult.data.address);
        const workingSpaceImg = screen.findByAltText("workingSpaceImg");

        expect(workingSpaceName).toBeInTheDocument();
        expect(workingSpaceAddress).toBeInTheDocument();
        expect(workingSpaceImg).toBeInTheDocument();
    });
    it('navigates to correct URL when a working space item is clicked', async () => {
        const { getByText } = render(<WorkingSpaceCatalog workingSpacesJson={getWorkingSpaces()} />);

        // Click on the first working space item
        fireEvent.click(getByText(mockResult.data.name));

        // Wait for navigation to occur
        await waitFor(() => {
            // Check if the navigation URL is correct
            expect(window.location.href).toBe(`http://localhost:3000/workinngSpace/${mockResult.data._id}`);
        });
    });
});

