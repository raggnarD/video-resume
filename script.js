// Role data - placeholder information
const rolesData = {
    role1: {
        title: "Leading the Charge at Ideal Innovations",
        description: "An in-depth look at my tenure as Founder & CEO of Ideal Innovations, Inc., where I spearheaded innovative solutions for the U.S. government and led groundbreaking initiatives in technology and innovation. This role showcased my ability to build and scale a company from the ground up, working with high-stakes government contracts and delivering exceptional results.",
        position: "Founder & CEO",
        duration: "To be specified",
        videoUrl: "" // Placeholder for video URL
    },
    role2: {
        title: "Engineering Excellence at Michael Baker International",
        description: "A narrative of my role as Executive Vice President and COO, driving operational excellence across diverse verticals. I led strategic initiatives, optimized operations, and managed complex engineering projects that made a significant impact on infrastructure and technology solutions.",
        position: "Executive Vice President & COO",
        duration: "To be specified",
        videoUrl: ""
    },
    role3: {
        title: "Innovating Solids Technology Solutions",
        description: "Delving into my leadership as President of Solids Technology, focusing on solving dry solids handling challenges. I developed innovative solutions, managed technical teams, and delivered results that transformed how industries handle complex material processing challenges.",
        position: "President",
        duration: "To be specified",
        videoUrl: ""
    },
    role4: {
        title: "Strategic Leadership at The Data Council",
        description: "An overview of my presidency at The Data Council, a division of Advantage Solutions, and the impact on data management strategies. I led data-driven initiatives, developed strategic partnerships, and created value through innovative data solutions and analytics.",
        position: "President",
        duration: "To be specified",
        videoUrl: ""
    },
    role5: {
        title: "Harmonizing Success in the Music Industry",
        description: "Exploring my journey as a musician, highlighting top songs and albums that resonated with audiences. This creative pursuit demonstrates my versatility, artistic vision, and ability to connect with people through music and performance.",
        position: "Musician & Artist",
        duration: "To be specified",
        videoUrl: ""
    }
};

// Modal functionality
function openModal(roleId) {
    const modal = document.getElementById('roleModal');
    const role = rolesData[roleId];
    
    if (!role) return;
    
    // Update modal content
    document.getElementById('modalTitle').textContent = role.title;
    document.getElementById('modalDescription').textContent = role.description;
    document.getElementById('modalPosition').textContent = role.position;
    document.getElementById('modalDuration').textContent = role.duration;
    
    // Update video placeholder
    const videoContainer = document.getElementById('modalVideo');
    if (role.videoUrl) {
        // If video URL is provided, embed it
        videoContainer.innerHTML = `
            <iframe 
                width="100%" 
                height="100%" 
                src="${role.videoUrl}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            ></iframe>
        `;
    } else {
        // Show placeholder
        videoContainer.innerHTML = `
            <p>Video Trailer Placeholder</p>
            <p class="video-hint">Your video will appear here</p>
        `;
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('roleModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('roleModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Function to update role data (for future customization)
function updateRoleData(roleId, data) {
    if (rolesData[roleId]) {
        rolesData[roleId] = { ...rolesData[roleId], ...data };
    }
}

// Export function for external use
window.updateRoleData = updateRoleData;
window.rolesData = rolesData;

