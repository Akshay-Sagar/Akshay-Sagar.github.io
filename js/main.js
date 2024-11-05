let scene, camera, renderer, particles;

function init() {
    try {
        console.log('Initializing Three.js scene...');
        
        // Scene setup
        scene = new THREE.Scene();
        
        // Camera setup
        camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 3;

        // Renderer setup
        renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#webgl'),
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x0a0a0a, 1);

        // Create particles
        createParticles();

        // Start animation loop
        animate();

        console.log('Scene initialized successfully');
    } catch (error) {
        console.error('Error initializing scene:', error);
    }
}

function createParticles() {
    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', 
        new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: '#ffffff'
    });

    particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
}

function animate() {
    requestAnimationFrame(animate);
    
    if (particles) {
        particles.rotation.x += 0.0001;
        particles.rotation.y += 0.0001;
    }

    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add this to check if Three.js is loaded
window.addEventListener('load', () => {
    if (typeof THREE === 'undefined') {
        console.error('Three.js is not loaded!');
    } else {
        console.log('Three.js is loaded successfully');
    }
}); 