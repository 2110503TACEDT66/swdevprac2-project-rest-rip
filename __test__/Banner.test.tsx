import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Banner from '@/components/Banner'; // Assuming your Banner component file is in the same directory as this test file

// Mocking the useRouter hook from Next.js
// jest.mock('next/navigation', () => ({
//     useRouter: () => ({
//         push: jest.fn(),
//     }),
// }));
jest.mock('next/navigation', () => ({
    __esModule: true,
    useRouter: jest.fn(),
}));


describe('Banner Component', () => {
    it('renders correctly', () => {
        const { getByText } = render(<Banner />);
        // Check if the main heading is rendered
        expect(screen.getByText('CO-Working Spaces for you')).toBeInTheDocument();
        // Check if the paragraph describing the co-working spaces is rendered
        expect(screen.getByText('Step into productivity with our private office space in Thailand. Our fully equipped offices offer the perfect blend of comfort and functionality, allowing you to work efficiently and effectively. Rent space on your terms and concentrate on achieving your business objectives with us by your side.')).toBeInTheDocument();
        // Check if the "Reserve Now" button is rendered
        expect(screen.getByText('Reserve Now')).toBeInTheDocument();
        // Check if the contact number is rendered
        expect(screen.getByText('Call us at +66 1 212 3121')).toBeInTheDocument();
    });

    it("Reserve Now", () => {
        const { getByText } = render(<Banner />);
        expect(screen.getByText('Reserve Now')).toBeInTheDocument();
    });

});