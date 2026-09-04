// Preloader JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    
    // Hide preloader after page loads
    function hidePreloader() {
        if (preloader) {
            // Add a small delay for better UX
            setTimeout(() => {
                preloader.classList.add('hidden');
                
                // Remove from DOM after animation completes
                setTimeout(() => {
                    if (preloader.parentNode) {
                        preloader.parentNode.removeChild(preloader);
                    }
                }, 500);
            }, 1500); // Adjust this time as needed
        }
    }
    
    // Hide preloader when everything is loaded
    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
        
        // Fallback: hide preloader after 3 seconds max
        setTimeout(hidePreloader, 3000);
    }
    
    // Add some interactive elements to preloader
    const preloaderText = document.querySelector('.preloader-text');
    if (preloaderText) {
        const texts = [
            'Cargando amor y detalles...',
            'Preparando sorpresas especiales...',
            'Armando momentos inolvidables...',
            'Cargando magia cajamarquina...'
        ];
        
        let currentIndex = 0;
        
        // Change text every 2 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            preloaderText.style.opacity = '0';
            
            setTimeout(() => {
                preloaderText.textContent = texts[currentIndex];
                preloaderText.style.opacity = '1';
            }, 300);
        }, 2000);
    }
});