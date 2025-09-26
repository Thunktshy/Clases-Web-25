        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.slide');
            const navLinks = document.querySelectorAll('.nav-link');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const slideCounter = document.getElementById('slide-counter');
            const progressBar = document.getElementById('progress');
            
            let currentSlide = 0;
            const totalSlides = slides.length;
            
            // Función para actualizar la visualización de slides
            function updateSlide() {
                // Ocultar todas las slides
                slides.forEach(slide => {
                    slide.classList.remove('active');
                });
                
                // Mostrar la slide actual
                slides[currentSlide].classList.add('active');
                
                // Actualizar enlaces de navegación
                navLinks.forEach((link, index) => {
                    if (index === currentSlide) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
                
                // Actualizar botones de navegación
                prevBtn.disabled = currentSlide === 0;
                nextBtn.disabled = currentSlide === totalSlides - 1;
                
                // Actualizar contador
                slideCounter.textContent = `${currentSlide + 1} de ${totalSlides}`;
                
                // Actualizar barra de progreso
                const progress = ((currentSlide + 1) / totalSlides) * 100;
                progressBar.style.width = `${progress}%`;
            }
            
            // Navegación con botones
            prevBtn.addEventListener('click', function() {
                if (currentSlide > 0) {
                    currentSlide--;
                    updateSlide();
                }
            });
            
            nextBtn.addEventListener('click', function() {
                if (currentSlide < totalSlides - 1) {
                    currentSlide++;
                    updateSlide();
                }
            });
            
            // Navegación con enlaces del sidebar
            navLinks.forEach((link, index) => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    currentSlide = index;
                    updateSlide();
                });
            });
            
            // Navegación con teclado
            document.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowLeft' && currentSlide > 0) {
                    currentSlide--;
                    updateSlide();
                } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
                    currentSlide++;
                    updateSlide();
                }
            });
            
            // Inicializar
            updateSlide();
        });