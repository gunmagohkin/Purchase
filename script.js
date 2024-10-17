document.addEventListener('DOMContentLoaded', () => {
    // Define the sequence manually
    const processSteps = [
        // First row (left to right)
        ...document.querySelectorAll('.horizontal:nth-child(1) .process, .horizontal:nth-child(1) .arrow'),
        document.querySelector('.vertical-arrow-container .arrow-vertical'), // Vertical arrow after Die-casting

        // Second row (right to left)
        ...Array.from(document.querySelectorAll('.horizontal:nth-child(2) .process, .horizontal:nth-child(2) .arrow')).reverse(),

        // Vertical arrow below Inspection
        document.querySelector('.horizontal:nth-child(2) .vertical-arrow-container .arrow-vertical'),

        // Final shipment step
        document.querySelector('.shipment')
    ];

    // Hide all elements initially
    processSteps.forEach(item => {
        if (item) item.classList.add('hidden'); // Ensure item exists before adding class
    });

    // Function to show steps with delay
    processSteps.forEach((item, index) => {
        if (item) {
            setTimeout(() => {
                item.classList.remove('hidden');
                item.classList.add('visible');
            }, index * 300); // Delay of 0.3 seconds per step
        }
    });

    // Add click events for interaction
    document.querySelectorAll('.process').forEach(item => {
        item.addEventListener('click', () => {
            alert(`Step: ${item.dataset.step}`); // Fixed template literal syntax
        });
    });
});
