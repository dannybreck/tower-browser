document.addEventListener('DOMContentLoaded', function() {
    // Get all tower elements
    const towers = document.querySelectorAll('.tower');
    
    // Tower II and III navigation
    const tower2 = document.querySelector('.tower-2');
    const tower3 = document.querySelector('.tower-3');
    
    // Add click event for Tower II
    tower2.addEventListener('click', function() {
        window.location.href = 'floors-tower-ii.html';
    });
    
    // Add click event for Tower III
    tower3.addEventListener('click', function() {
        window.location.href = 'floors-tower-iii.html';
    });
    
    // Mobile touch event handling
    let activeElement = null;
    
    // Function to handle touch outside of active tower
    function handleTouchOutside(event) {
        if (activeElement && !activeElement.contains(event.target)) {
            activeElement.classList.remove('active');
            activeElement = null;
            document.removeEventListener('touchstart', handleTouchOutside);
        }
    }
    
    // Add touch events for mobile devices
    towers.forEach(tower => {
        tower.addEventListener('touchstart', function(event) {
            event.preventDefault();
            
            // If this tower is already active, handle it as a click
            if (tower.classList.contains('active')) {
                // Only navigate for Tower II and III
                if (tower.classList.contains('tower-2')) {
                    window.location.href = 'floors-tower-ii.html';
                } else if (tower.classList.contains('tower-3')) {
                    window.location.href = 'floors-tower-iii.html';
                }
                return;
            }
            
            // Remove active class from previous active element
            if (activeElement) {
                activeElement.classList.remove('active');
            }
            
            // Set new active element
            tower.classList.add('active');
            activeElement = tower;
            
            // Add listener to detect touch outside
            document.addEventListener('touchstart', handleTouchOutside);
        });
    });
    
    // Function to check if device is in portrait mode
    function isPortrait() {
        return window.innerHeight > window.innerWidth && window.innerWidth <= 768;
    }
    
    // Check orientation and show/hide content accordingly
    function handleOrientationChange() {
        const towers = document.querySelectorAll('.tower');
        
        if (isPortrait()) {
            // Disable interactions in portrait mode
            towers.forEach(tower => {
                tower.style.pointerEvents = 'none';
            });
        } else {
            // Enable interactions in landscape mode
            towers.forEach(tower => {
                tower.style.pointerEvents = 'auto';
            });
        }
    }
    
    // Initial check
    handleOrientationChange();
    
    // Listen for orientation changes
    window.addEventListener('resize', handleOrientationChange);
});