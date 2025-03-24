// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in, .slide-in').forEach(el => observer.observe(el));
// Content for each Core Trade
const contentMap = {
    'steel-skids': `
      <h3>Steel Skids</h3>
      <p>We specialize in designing and fabricating durable steel skids for industrial applications, ensuring stability and precision. Visit <a href="https://palletocanada.ca/" target="_blank">Palleto Canada</a> for more details.</p>
    `,
    'tssa': `
      <h3>TSSA Certification Details</h3>
      <p>Weld O Canada also certified for TSSA B31.1 (Power Piping) , B31.3 (Process Piping) , Fabrication and installation . We are also providing mechanical contractor services. Our well-versed engineers, estimators and trades provide seamless technical and customer support. Our Safety program allows our staff to work efficiently with no time lost and that makes us feel confident in supporting your next project.</p>
      <p><strong>New Certifications:</strong></p>
      <ul>
          <li>Fabrication, assembly, and repair of power piping:</li>
          <ul>
              <li>CSA Standard B51, Boiler, Pressure Vessel and Pressure Piping Code</li>
              <li>ASME B31.1 Power Piping</li>
          </ul>
          <li>Fabrication, assembly, and repair of process piping:</li>
          <ul>
              <li>CSA Standard B51, Boiler, Pressure Vessel and Pressure Piping Code</li>
              <li>ASME B31.3 Process Piping</li>
          </ul>
          <li>Manufacture of pressure vessels:</li>
          <ul>
              <li>ASME Boiler and Pressure Vessel Code, Section VIII, Division 1</li>
              <li>CSA Standard B51, Boiler, Pressure Vessel and Pressure Piping Code</li>
          </ul>
          <li>Fabrication of Welded and Non-Welded Category H type Fittings:</li>
          <ul>
              <li>CSA Standard B51, Boiler, Pressure Vessel and Pressure Piping Code</li>
          </ul>
          <li>Repair and alteration of boilers, pressure vessels, piping, and fittings:</li>
          <ul>
              <li>CSA Standard B51, Boiler, Pressure Vessel and Pressure Piping Code</li>
          </ul>
      </ul>
      <p>Our expertise and adherence to these certifications ensure that we consistently meet industry standards and deliver high-quality products and services to our clients. With a dedicated team of experienced professionals, we are well-equipped to handle complex fabrication, assembly, repair, and alteration projects both at our facility and at field sites under our control.</p>
    `,
    'cwb': `
      <h3>CWB Certification</h3>
      <p>Proudly Canadian, Weld O Canada Inc. is a CWB-certified fabrication shop that operates out of an 8000-square-foot craned building fully equipped with fabrication equipment. We hold certifications for Carbon Steel and Stainless Steel (CSA W47.1) and Aluminum (CSA W47.2).</p>
    `,
    'engineering-piping': `
      <h3>Engineering Piping</h3>
      <p>Our team of piping experts possesses extensive experience in designing ABOVE AND BELOW GROUND PIPING systems. The Weld O Canada Piping Team assists you in all aspects of the process, with process, mechanical, electrical, structural, and controls engineers providing expertise in corrosion resistance, pump cavitation, pressure drop, thermal expansion and support design, flow control, and more.</p>
      <p><strong>Our services include, but are not limited to:</strong></p>
      <ul>
          <li>Pipe specifications development</li>
          <li>3D piping modeling</li>
          <li>Fabrication isometric development</li>
          <li>Bill of Materials (BOM) preparation</li>
          <li>Material procurement support</li>
          <li>Aseptic, hygienic, and sanitary piping systems</li>
          <li>Thermal and dynamic pipe stress analysis and design</li>
          <li>Standard and custom pipe support design</li>
          <li>Piping system walkdowns</li>
          <li>Piping installation quality audits</li>
          <li>Process piping design</li>
          <li>Utility piping design</li>
          <li>Pneumatic convey piping systems</li>
          <li>Flammable and volatile liquid & gas piping systems</li>
          <li>Bio-gas piping</li>
          <li>Plumbing systems</li>
          <li>Pig systems</li>
      </ul>
      <p><strong>P# and CRN Registration</strong></p>
      <p>Weld O Canada offers engineering design and registration services for:</p>
      <ul>
          <li>Fittings (Category A, B, C, D, E, F, G & H)</li>
          <li>Pressure vessels (ASME VIII)</li>
          <li>Process piping (B31.3)</li>
          <li>Power piping (B31.1)</li>
          <li>Refrigeration piping (B31.5)</li>
          <li>Medical gas piping (CSA Z7396)</li>
      </ul>
      <p>Weld O Canada can register (P#) for TSSA. Our designers guide you through every step of the registration process efficiently.</p>
      <p><strong>Mechanical Engineering</strong></p>
      <p>Weld O Canada’s licensed engineers are trained and experienced in understanding, designing, and analyzing mechanical systems, including:</p>
      <ul>
          <li>Heating, Ventilating, Air-Conditioning, and Refrigerating Engineering</li>
          <li>Indoor air quality, plumbing, and drainage</li>
          <li>Pressure piping, Piping Support, and Pressure Vessels</li>
          <li>Computational Fluid Dynamics (CFD) and Heat transfer Analysis</li>
          <li>Pipe Stress Analysis (thermal, flexibility, and dynamic stress analyses)</li>
          <li>Heat loss/heat gain/duct calculations</li>
          <li>Industrial and Commercial Plumbing</li>
          <li>Plumbing and Drainage systems</li>
          <li>Backflow prevention systems</li>
          <li>Water treatment systems</li>
          <li>Compressed air systems</li>
          <li>Project management</li>
          <li>Design-Build</li>
      </ul>
      <p><strong>Fuel Piping Systems</strong></p>
      <p>Weld O Canada is a leader in engineering services for fuel piping systems, covering:</p>
      <ul>
          <li>Fuel oil</li>
          <li>Natural Gas</li>
          <li>Propane Vapor</li>
          <li>Liquid Propane</li>
      </ul>
      <p>We also offer heating contractor certification services and certify gas technicians for Provincial Jurisdiction. Our engineers assist with equipment design and the entire approval process, including:</p>
      <ul>
          <li>Design approval</li>
          <li>Variance approval</li>
          <li>Equipment field approval</li>
      </ul>
      <p>Weld O Canada engineers support all fuels programs, including:</p>
      <ul>
          <li>Heating fuels</li>
          <li>Transportation fuels</li>
          <li>Digester, landfill, and biogas</li>
          <li>Food trucks</li>
          <li>High-pressure piping</li>
      </ul>
    `,
    'pressure-vessel': `
      <h3>Pressure Vessel</h3>
      <p>Weld O Canada is a leading high pressure vessel manufacturer of ASME pressure vessels and process tanks. Our ISO 9001:2015 certified quality, engineering, design and production of custom ASME pressure vessels and process tanks is recognized by many OEMs and other companies that require custom pressure vessels, process tanks, storage tanks, etc. to operate their businesses.</p>
      <p>Weld O Canada is a pressure vessel manufacturer. We are recognized as one of the top manufacturing facilities in the northeast for our unparalleled quality, technical capability and manufacturing reliability in producing the highest quality ASME code and non-code pressure vessels, stainless steel tanks, storage tanks and process tanks.</p>
    `,
    'structural-fabrication': `
      <h3>Structural Fabrication</h3>
      <p>Weld O Canada is a full service structural steel, stairs and railings, architectural and miscellaneous metal fabricator. We focus on renovations, additions, reinforcement, and removal of existing structural elements. We also specialize in structural steel erection, focusing on completing residential, commercial and industrial projects throughout the GTA and surrounding areas to our client’s complete satisfaction. Our company takes pride in the ability to accept and complete the intricate and challenging structural steel fabrication projects that pose too great a challenge to competitor companies.</p>
      <p>Weld O Canada has become a trusted partner among major industry players. The company’s expertise, experience, and versatility position it as a valuable service provider. Our remarkable portfolio shows the company’s dedication to delivering results in a timely and cost-effective manner.</p>
      <p>We bring full commitment to every project acquired. Our customers can be assured that any structure fabricated by Weld O Canada will be completed on time and in accordance with the highest engineering and architectural standards. We are proud to be a part of the ventures we have worked on and feel honored by the trust our customers exhibit by including us in their enterprises time after time.</p>
      <p>Weld O Canada is the right choice for all of your structural steel fabrication, installation, and welding needs because it can guarantee to complete your project safely, successfully and in a timely manner. We are your structural steel experts.</p>
    `,
    'tank-fabrication': `
      <h3>Tank Fabrication</h3>
      <p>Weld O Canada certified fabrication shop operates out of a 8000 square foot craned building fully equipped with late model fabrication equipment. Our CWB certification is valid for (CSA W47.1) Carbon Steel and Stainless Steel, and Aluminum (CSA W47.2). The certified and experienced fabricators employed by TMI are CWB certified fitter-welders. Our capabilities include various welding methods including MIG, TIG, Fluxcore & stick.</p>
    `,
    'piping': `
      <h3>Piping</h3>
      <p>Process piping refers to specialized piping designed to transport liquids and gases within a building, distinct from standard piping used in a building’s underlying systems. It plays a crucial role in manufacturing specific products or carrying out particular processes within a facility. Pipe installation and fabrication services for process piping differ significantly from those for conventional piping.</p>
      <p>Extensive networks of process piping are prevalent in various industries in the Toronto and Hamilton area, including:</p>
      <ul>
          <li>Pharmaceutical</li>
          <li>Oil and gas</li>
          <li>Plastics</li>
          <li>Food and beverages</li>
          <li>Breweries</li>
          <li>Chemical processing</li>
          <li>Water treatment</li>
          <li>Mining</li>
      </ul>
      <p>Safety is paramount in instances involving process piping. Companies offering commercial process piping installation and fabrication services, such as Weld O Canada, adhere to specific regulatory guidelines regarding construction, maintenance, and labeling.</p>
      <p><strong>Process Piping Fabrication and Installation:</strong></p>
      <p>Process piping and its associated fabrication services benefit commercial facilities by expanding a building’s capabilities. This allows the production of different products or an enhanced experience for users. Choosing the right contracting company for pipe fabrication, installation, and maintenance is crucial for achieving intended functionality, meeting standards, and staying within budget.</p>
      <p>Weld O Canada, with over 25 years of experience, provides mechanical installation services, including process piping and pipe fabrication services compliant with ASME B31.1 Power Piping, ASME B31.3 Process Piping, CSA Standard B51, Boiler, Pressure Vessel, and Pressure Piping Code, and other relevant regulations. Technicians at Weld O Canada are TSSA-certified professionals with expertise in:</p>
      <ul>
          <li>Pipe installation</li>
          <li>Pipe relocation</li>
          <li>Prefabricated pipe assembly</li>
          <li>Process piping maintenance</li>
          <li>Pipe testing and repair</li>
          <li>Pipe fabrication services with specific materials (carbon, stainless steel, copper, PVC, etc.)</li>
          <li>Medical gas piping systems in accordance with CSA – Z7936.1 – Medical Gas Piping Systems</li>
          <li>Full-scale design/build process piping projects</li>
      </ul>
      <p>Weld O Canada offers a variety of pipe fabrication services with unmatched knowledge and experience in these areas. Their pipe fabrication services have been foundational for ambitious process piping projects, and their installation services have resulted in reliable systems. Contact Weld O Canada today to learn more about why choosing them for your process piping needs is the right decision for the future of your facility.</p>
    `,
    'fabrication': `
      <h3>Fabrication</h3>
      <p>Weld O Canada, a certified fabrication shop, operates from a 32,000-square-foot craned building fully equipped with state-of-the-art fabrication equipment. Our CWB certification is valid for Steel (CSA W47.1), Stainless Steel (CSA W47.1), and Aluminum (CSA W47.2). The fabricators at TMI are certified and experienced CWB fitter-welders. Our capabilities encompass various welding methods, including MIG, TIG, Fluxcore, and stick.</p>
    `,
    'joist-manufacturing': `
      <h3>Joist Manufacturing</h3>
      <p>As part of our major services, we also manufacture steel joists in a variety of shapes, sizes, and geometries. Joists are custom-made structural steel components used to support the floors or roof of a structure. This application of joists can result in significant savings for our customers.</p>
    `,
    'plasma-flame-cutting': `
      <h3>Plasma & Flame Cutting</h3>
      <p>Flame cut mild steel plate with C.C. multi-torch burning</p>
      <p><strong>Material Grades:</strong> -44W-50W, QT100 – 400, C1045</p>
      <p><strong>Flame Cutting:</strong> -3/8 to 8 thick, 10′ wide by 10′ long</p>
      <p>Provide stress relieving, Blanchard grinding and milling...</p>
    `
};
// Certificate Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const certificationWrappers = document.querySelectorAll('.certification-wrapper');
    const modal = document.getElementById('certificate-modal');
    const certificateImage = document.getElementById('certificate-image');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const closeBtn = document.getElementById('close-modal');
    const imageCounter = document.getElementById('image-counter');

    // Map certifications to their images
    const certificateImages = {
        'isn': ['https://weldocanada.com/wp-content/uploads/2021/03/ISN_-logo-150x150.png'],
        'tssa': [
            'https://weldocanada.com/wp-content/uploads/2021/02/tssa-150x150.jpg',           // TSSA Cert 1
            './imagesweldo/TSSA1.png',                  // Replace with actual TSSA Cert 2
            './imagesweldo/TSSA2.png',                  // Replace with actual TSSA Cert 3
            './imagesweldo/TSSA4.png'                   // Replace with actual TSSA Cert 4
        ],
        'weldocanada': ['https://weldocanada.com/wp-content/uploads/2021/07/weldo1-150x150.png',
            './imagesweldo/CWB1.png',
            './imagesweldo/Cwb2.png'
        ],
        'mto': ['https://weldocanada.com/wp-content/uploads/2021/03/Mto-logo-150x150.png'],
        'asr': ['https://weldocanada.com/wp-content/uploads/2024/02/ASR-Logo-Medium-150x150.jpg'],
        'anab': [
            'https://weldocanada.com/wp-content/uploads/2024/02/ANAB-Symbol-RGB-17021-1-MS-CB-White-Bkgr-150x150.png',
            'https://via.placeholder.com/500x700?text=ANAB+Cert+2'
        ],
        'cwb': [
            'https://via.placeholder.com/500x700?text=CWB+Certificate+1',                   // Replace with actual CWB Cert 1
            'https://via.placeholder.com/500x700?text=CWB+Certificate+2'                    // Replace with actual CWB Cert 2
        ]
    };

    let currentImages = [];
    let currentIndex = 0;

    certificationWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            const certKey = wrapper.getAttribute('data-certificates');
            currentImages = certificateImages[certKey] || [];
            if (currentImages.length === 0) return;

            currentIndex = 0;
            updateModal();
            modal.classList.add('active');
        });
    });

    function updateModal() {
        certificateImage.src = currentImages[currentIndex];
        imageCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === currentImages.length - 1;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateModal();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < currentImages.length - 1) {
            currentIndex++;
            updateModal();
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close modal when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// Handle Core Trades click events
document.addEventListener('DOMContentLoaded', () => {
    const dashboardItems = document.querySelectorAll('.dashboard-item');
    const contentDiv = document.getElementById('core-trades-content');

    dashboardItems.forEach(item => {
        // Skip the Steel Skids item since it has a link
        if (!item.querySelector('a')) {
            item.addEventListener('click', () => {
                const contentKey = item.getAttribute('data-content');
                if (contentMap[contentKey]) {
                    contentDiv.innerHTML = contentMap[contentKey];
                    contentDiv.classList.add('active');
                    // Scroll to the content
                    contentDiv.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    });
});

// Stats Counter Animation
const stats = document.querySelectorAll('.stat-number');
stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    let count = 0;
    const increment = target / 100;

    const updateCount = () => {
        count += increment;
        if (count >= target) {
            stat.textContent = target;
        } else {
            stat.textContent = Math.ceil(count);
            requestAnimationFrame(updateCount);
        }
    };

    const statObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateCount();
            statObserver.unobserve(stat);
        }
    }, { threshold: 0.5 });
    statObserver.observe(stat);
});

// 3D Welding Animation (Top Container)
const weldingContainer = document.getElementById('welding-animation-container');
weldingContainer.style.height = '200px';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, weldingContainer.clientWidth / 200, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(weldingContainer.clientWidth, 200);
weldingContainer.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff6f61 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animateWelding = () => {
    requestAnimationFrame(animateWelding);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};
animateWelding();

// 3D Facility Model (About Section)
const facilityCanvas = document.getElementById('facility-model');
const facilityScene = new THREE.Scene();
const facilityCamera = new THREE.PerspectiveCamera(75, facilityCanvas.clientWidth / facilityCanvas.clientHeight, 0.1, 1000);
const facilityRenderer = new THREE.WebGLRenderer({ canvas: facilityCanvas });
facilityRenderer.setSize(facilityCanvas.clientWidth, facilityCanvas.clientHeight);

const facilityGeometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
const facilityMaterial = new THREE.MeshPhongMaterial({ color: 0xff6f61 });
const facilityModel = new THREE.Mesh(facilityGeometry, facilityMaterial);
facilityScene.add(facilityModel);

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 5, 5);
facilityScene.add(light);

facilityCamera.position.z = 5;

const animateFacility = () => {
    requestAnimationFrame(animateFacility);
    facilityModel.rotation.x += 0.01;
    facilityModel.rotation.y += 0.01;
    facilityRenderer.render(facilityScene, facilityCamera);
};
animateFacility();

// Form Submission (Basic Example)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
    contactForm.reset();
});

// Resize Handler for 3D Renderers
window.addEventListener('resize', () => {
    const weldingWidth = weldingContainer.clientWidth;
    renderer.setSize(weldingWidth, 200);
    camera.aspect = weldingWidth / 200;
    camera.updateProjectionMatrix();

    const facilityWidth = facilityCanvas.clientWidth;
    const facilityHeight = facilityCanvas.clientHeight;
    facilityRenderer.setSize(facilityWidth, facilityHeight);
    facilityCamera.aspect = facilityWidth / facilityHeight;
    facilityCamera.updateProjectionMatrix();
});