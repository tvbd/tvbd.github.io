import { templates } from './templates.js';

const defaultState = {
    templateId: 'classic',
    heading: 'সন্ধ্যার সংবাদ',
    subheading: 'আজকের গুরুত্বপূর্ণ সব খবর, এক নজরে দেখে নিন।',
    date: '27 December 2025',
    domain: 'example.com',
    facebook: 'yourpage',
    youtube: 'yourchannel',
    image: '', // Data URL
    logo: '',  // Data URL
    adImage: '', // Data URL
    font: 'Hind Siliguri',
    accentColor: '#D9232D',
    bgColor: '#ffffff',
    textColor: '#111827',
};

let state = { ...defaultState };

function saveState() {
    try {
        localStorage.setItem('photoCardState', JSON.stringify(state));
    } catch (e) {
        console.error('Failed to save state:', e);
    }
}

function loadState() {
    try {
        const saved = localStorage.getItem('photoCardState');
        if (saved) {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
        }
    } catch (e) {
        console.error('Failed to load state:', e);
    }
}

function resetState() {
    if (confirm('Are you sure you want to reset all settings?')) {
        localStorage.removeItem('photoCardState');
        window.location.reload();
    }
}

const SYSTEM_FIELDS = ['image', 'logo', 'adImage', 'font', 'accentColor', 'bgColor', 'textColor'];

const elements = {
    templateSelect: document.getElementById('templateSelect'),
    templateDesc: document.getElementById('templateDesc'),
    dynamicContent: document.getElementById('dynamicContent'),
    image: document.getElementById('imageInput'),
    imageUrl: document.getElementById('imageUrlInput'),
    logo: document.getElementById('logoInput'),
    logoUrl: document.getElementById('logoUrlInput'),
    adImage: document.getElementById('adImageInput'),
    adImageUrl: document.getElementById('adImageUrlInput'),
    font: document.getElementById('fontInput'),
    accentColor: document.getElementById('accentColorInput'),
    bgColor: document.getElementById('bgColorInput'),
    textColor: document.getElementById('textColorInput'),
    renderTarget: document.getElementById('renderTarget'),
    canvasWrapper: document.querySelector('.canvas-wrapper'),
    downloadBtn: document.getElementById('downloadBtn'),
    resetBtn: document.getElementById('resetBtn'),
    loadSystemFontsBtn: document.getElementById('loadSystemFontsBtn')
};

let fontChoices;

// Initialize
function init() {
    loadState();

    // Initialize Choices.js for fonts
    fontChoices = new Choices(elements.font, {
        searchEnabled: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Search fonts...',
        shouldSort: false, // Keep our grouping order
    });

    // Load fonts
    loadFonts();

    // Check for Local Fonts API support
    if ('queryLocalFonts' in window) {
        elements.loadSystemFontsBtn.style.display = 'block';
        elements.loadSystemFontsBtn.addEventListener('click', loadSystemFonts);
    }

    // Populate Templates
    templates.forEach(t => {
        const option = document.createElement('option');
        option.value = t.id;
        option.textContent = t.name;
        elements.templateSelect.appendChild(option);
    });

    // Set initial values
    elements.templateSelect.value = state.templateId;
    // Font value will be set after fonts are loaded
    elements.accentColor.value = state.accentColor;
    elements.bgColor.value = state.bgColor;
    elements.textColor.value = state.textColor;
    if (state.image && !state.image.startsWith('data:')) elements.imageUrl.value = state.image;
    if (state.logo && !state.logo.startsWith('data:')) elements.logoUrl.value = state.logo;
    if (state.adImage && !state.adImage.startsWith('data:')) elements.adImageUrl.value = state.adImage;

    // Listeners
    elements.templateSelect.addEventListener('change', (e) => {
        state.templateId = e.target.value;
        
        // Update defaults if available
        const template = templates.find(t => t.id === state.templateId);
        if (template && template.defaults) {
            Object.entries(template.defaults).forEach(([key, value]) => {
                state[key] = value;
                // Update static inputs if they exist
                if (elements[key]) {
                    if (key === 'font') {
                        fontChoices.setChoiceByValue(value);
                    } else {
                        elements[key].value = value;
                    }
                }
            });
        }

        saveState();
        updateDynamicInputs();
        render();
    });

    elements.font.addEventListener('change', (e) => { 
        state.font = e.target.value; 
        loadGoogleFont(state.font);
        saveState(); 
        render(); 
    });
    elements.accentColor.addEventListener('input', (e) => { state.accentColor = e.target.value; saveState(); render(); });
    elements.bgColor.addEventListener('input', (e) => { state.bgColor = e.target.value; saveState(); render(); });
    elements.textColor.addEventListener('input', (e) => { state.textColor = e.target.value; saveState(); render(); });

    elements.image.addEventListener('change', handleImageUpload.bind(null, 'image'));
    elements.imageUrl.addEventListener('input', (e) => { state.image = e.target.value; saveState(); render(); });
    elements.logo.addEventListener('change', handleImageUpload.bind(null, 'logo'));
    elements.logoUrl.addEventListener('input', (e) => { state.logo = e.target.value; saveState(); render(); });
    elements.adImage.addEventListener('change', handleImageUpload.bind(null, 'adImage'));
    elements.adImageUrl.addEventListener('input', (e) => { state.adImage = e.target.value; saveState(); render(); });

    elements.downloadBtn.addEventListener('click', downloadImage);
    elements.resetBtn.addEventListener('click', resetState);

    window.addEventListener('resize', fitPreview);

    // Mobile Toggle
    const toggleBtn = document.getElementById('toggleSettings');
    const closeBtn = document.getElementById('closeSettings');
    const sidebar = document.querySelector('.sidebar');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }

    updateDynamicInputs();
    render();
    // Delay fitPreview slightly to ensure DOM is ready
    setTimeout(fitPreview, 100);
}

async function loadFonts() {
    const popularFonts = [
        'Hind Siliguri', 'Noto Sans Bengali', 'Noto Serif Bengali', 'Baloo Da 2', 'Mina', 'Galada', 'Anek Bangla', // Bengali
        'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Poppins', 'Oswald', // Sans
        'Merriweather', 'Playfair Display', 'Lora', 'Roboto Slab' // Serif
    ];

    const webSafeFonts = [
        // Windows
        'Segoe UI', 'Calibri', 'Cambria', 'Candara', 'Consolas', 'Constantia', 'Corbel', 
        'Franklin Gothic Medium', 'Gabriola', 'Palatino Linotype', 'Perpetua', 'Rockwell',
        'Franklin Gothic', 'Century Gothic',
        // macOS
        'Helvetica Neue', 'Avenir', 'Avenir Next', 'Optima', 'Gill Sans', 'Didot', 
        'American Typewriter', 'Baskerville', 'Geneva', 'Monaco',
        // Common / Web Safe
        'Arial', 'Helvetica', 'Verdana', 'Tahoma', 'Trebuchet MS', 
        'Times New Roman', 'Georgia', 'Garamond', 'Courier New', 
        'Brush Script MT', 'Impact', 'Arial Black', 'Comic Sans MS'
    ].sort();

    try {
        const response = await fetch('https://api.fontsource.org/v1/fonts');
        const fonts = await response.json();
        
        const googleFonts = fonts.filter(f => f.type === 'google');
        
        const choices = [];

        // Add Popular Group
        const popularGroup = {
            label: 'Popular / Bengali',
            id: 'popular',
            disabled: false,
            choices: []
        };

        popularFonts.forEach(fontName => {
            const font = googleFonts.find(f => f.family === fontName);
            if (font) {
                popularGroup.choices.push({
                    value: font.family,
                    label: font.family,
                    selected: state.font === font.family,
                    customProperties: { weights: font.weights }
                });
            }
        });
        choices.push(popularGroup);
        
        // Add System Fonts Group
        const systemGroup = {
            label: 'Standard System Fonts',
            id: 'system',
            disabled: false,
            choices: []
        };

        webSafeFonts.forEach(fontName => {
            systemGroup.choices.push({
                value: fontName,
                label: fontName,
                selected: state.font === fontName,
                customProperties: { type: 'system' }
            });
        });
        choices.push(systemGroup);

        // Add All Fonts Group
        const allGroup = {
            label: 'All Google Fonts',
            id: 'all',
            disabled: false,
            choices: []
        };

        googleFonts.forEach(font => {
            if (!popularFonts.includes(font.family)) {
                allGroup.choices.push({
                    value: font.family,
                    label: font.family,
                    selected: state.font === font.family,
                    customProperties: { weights: font.weights }
                });
            }
        });
        choices.push(allGroup);

        fontChoices.setChoices(choices, 'value', 'label', true);
        
        // Ensure initial font is loaded
        if (state.font) {
            loadGoogleFont(state.font);
        }

    } catch (e) {
        console.error('Failed to load fonts:', e);
        // Fallback to basic list if API fails
        const fallbackChoices = popularFonts.map(f => ({
            value: f,
            label: f,
            selected: state.font === f
        }));
        fontChoices.setChoices(fallbackChoices, 'value', 'label', true);
    }
}

async function loadSystemFonts() {
    const btn = elements.loadSystemFontsBtn;
    const originalText = btn.textContent;
    btn.textContent = 'Loading...';
    btn.disabled = true;

    try {
        const availableFonts = await window.queryLocalFonts();
        const uniqueFonts = [...new Set(availableFonts.map(f => f.family))].sort();
        
        const localGroup = {
            label: 'Installed Local Fonts',
            id: 'local',
            disabled: false,
            choices: uniqueFonts.map(family => ({
                value: family,
                label: family,
                selected: false,
                customProperties: { type: 'local' }
            }))
        };

        // Add to choices (prepend or append)
        // Note: setChoices with replace=false appends.
        fontChoices.setChoices([localGroup], 'value', 'label', false);
        
        btn.textContent = `Success! ${uniqueFonts.length} fonts loaded`;
        setTimeout(() => {
            btn.style.display = 'none';
        }, 2000);

    } catch (err) {
        console.error(err);
        btn.textContent = 'Failed to load fonts';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        }, 2000);
    }
}

function loadGoogleFont(fontFamily) {
    if (!fontFamily) return;
    
    // Check if it's a system/local font (simple heuristic: if it's in our webSafe list or we don't want to fetch it)
    // But we don't easily know if a random string is a google font or local font here without checking the list.
    // However, fetching a non-existent google font usually just 404s harmlessly or we can check if it was in the google list.
    // For now, we'll just try to load it if it looks like a google font.
    
    // Optimization: Don't try to load web safe fonts from Google
    const webSafeFonts = [
        // Windows
        'Segoe UI', 'Calibri', 'Cambria', 'Candara', 'Consolas', 'Constantia', 'Corbel', 
        'Franklin Gothic Medium', 'Gabriola', 'Palatino Linotype', 'Perpetua', 'Rockwell',
        'Franklin Gothic', 'Century Gothic',
        // macOS
        'Helvetica Neue', 'Avenir', 'Avenir Next', 'Optima', 'Gill Sans', 'Didot', 
        'American Typewriter', 'Baskerville', 'Geneva', 'Monaco',
        // Common / Web Safe
        'Arial', 'Helvetica', 'Verdana', 'Tahoma', 'Trebuchet MS', 
        'Times New Roman', 'Georgia', 'Garamond', 'Courier New', 
        'Brush Script MT', 'Impact', 'Arial Black', 'Comic Sans MS'
    ];
    if (webSafeFonts.includes(fontFamily)) return;

    const id = `font-${fontFamily.replace(/\s+/g, '-').toLowerCase()}`;
    if (document.getElementById(id)) return;

    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    // Load regular and bold weights if possible, or just 400,700
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\s+/g, '+')}:wght@400;500;600;700&display=swap`;
    document.head.appendChild(link);
}

function extractPlaceholders(html) {
    const regex = /{([a-zA-Z0-9_]+)}/g;
    const placeholders = new Set();
    let match;
    while ((match = regex.exec(html)) !== null) {
        placeholders.add(match[1]);
    }
    return Array.from(placeholders);
}

function updateDynamicInputs() {
    const template = templates.find(t => t.id === state.templateId);
    if (!template) return;

    const placeholders = extractPlaceholders(template.html);
    const contentFields = placeholders.filter(p => !SYSTEM_FIELDS.includes(p));

    elements.dynamicContent.innerHTML = '';

    contentFields.forEach(field => {
        const group = document.createElement('div');
        group.className = 'control-group';

        const label = document.createElement('label');
        // Capitalize first letter
        label.textContent = field.charAt(0).toUpperCase() + field.slice(1);
        
        const textarea = document.createElement('textarea');
        textarea.rows = ['heading', 'content', 'subheading'].indexOf(field) !== -1 ? 3 : 1;
        textarea.value = state[field] || '';
        
        textarea.addEventListener('input', (e) => {
            state[field] = e.target.value;
            saveState();
            render();
        });

        group.appendChild(label);
        group.appendChild(textarea);
        elements.dynamicContent.appendChild(group);
    });
}

function handleImageUpload(key, event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        state[key] = e.target.result;
        saveState();
        render();
    };
    reader.readAsDataURL(file);
}

function render() {
    const template = templates.find(t => t.id === state.templateId);
    if (!template) return;

    elements.templateDesc.textContent = template.description;

    // Prepare CSS
    let styleTag = document.getElementById('template-styles');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'template-styles';
        document.head.appendChild(styleTag);
    }
    
    const logoSelectors = [
        '.logo-wrapper', '.logo-badge', '.logo-overlay', '.logo-area', 
        '.mini-logo', '.logo-section', '.pa-logo', '.bbc-logo-wrapper',
        '.ntv-logo-badge', '.btv-logo-area', '.adesh-logo', 
        '.somoy-logo-overlay', '.jamuna-logo', '.top-logo'
    ];
    const hideLogoCss = `
        .template-wrapper:not(.has-logo) ${logoSelectors.join(',\n.template-wrapper:not(.has-logo) ')} {
            display: none !important;
        }
    `;
    styleTag.textContent = template.css + hideLogoCss;

    // Prepare HTML
    let html = template.html;
    
    const formatText = (text) => (text || '').replace(/\n/g, '<br>');

    // Replace placeholders
    const placeholders = extractPlaceholders(template.html);
    placeholders.forEach(key => {
        if (SYSTEM_FIELDS.includes(key)) return;
        
        const val = state[key] || '';
        const formatted = formatText(val);
        const regex = new RegExp(`{${key}}`, 'g');
        html = html.replace(regex, formatted);
    });

    html = html.replace(/{font}/g, state.font || 'sans-serif');
    html = html.replace(/{accentColor}/g, state.accentColor);
    html = html.replace(/{bgColor}/g, state.bgColor);
    html = html.replace(/{textColor}/g, state.textColor);
    
    // Placeholder images
    const placeholderImg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0iI2YzZjRmNiI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz48dGV4dCB4PSI1MCIgeT0iNTAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5Y2EzYWYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij5JTUFHRTwvdGV4dD48L3N2Zz4=';
    const transparentPixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    
    html = html.replace(/{image}/g, state.image || placeholderImg);
    
    // Logo Logic
    if (state.logo) {
        html = html.replace(/{logo}/g, state.logo);
        html = html.replace('template-wrapper', 'template-wrapper has-logo');
    } else {
        html = html.replace(/{logo}/g, transparentPixel);
    }
    
    // Ad Image Logic - if no ad image, we might want to hide the container or show empty
    // For now, let's just replace. If empty, the img src will be empty.
    // Better: Use a class to hide if empty? Or just let it be empty.
    // Let's use a transparent pixel if empty to avoid broken image icon
    html = html.replace(/{adImage}/g, state.adImage || transparentPixel);
    
    // Add a class to wrapper if ad exists to adjust layout if needed
    if (state.adImage) {
        html = html.replace('template-wrapper', 'template-wrapper has-ad');
    }

    elements.renderTarget.innerHTML = html;
}

function fitPreview() {
    const wrapper = elements.canvasWrapper;
    const container = wrapper.parentElement;
    if (!container) return;
    
    const padding = 80; // Total padding
    const availableWidth = container.clientWidth - padding;
    const availableHeight = container.clientHeight - padding;
    
    const scale = Math.min(
        availableWidth / 1080,
        availableHeight / 1080
    );
    
    // Ensure scale is not negative or infinite
    const safeScale = (scale > 0 && scale < 5) ? scale : 0.5;
    
    wrapper.style.transform = `scale(${safeScale})`;
}

function downloadImage() {
    const originalElement = elements.renderTarget.firstElementChild;
    if (!originalElement) return;

    // Wait for fonts to be ready to ensure correct rendering
    document.fonts.ready.then(() => {
        // Create a container for the full-size render
        // We render off-screen to ensure we capture at full 1080x1080 resolution
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.left = '-9999px';
        container.style.top = '0';
        container.style.width = '1080px';
        container.style.height = '1080px';
        container.style.zIndex = '-1';
        
        // Clone the element
        const clonedElement = originalElement.cloneNode(true);
        // Ensure the clone has the correct dimensions and no transform
        clonedElement.style.width = '1080px';
        clonedElement.style.height = '1080px';
        clonedElement.style.transform = 'none';

        container.appendChild(clonedElement);
        document.body.appendChild(container);

        // Helper to wait for images to load in the clone
        const waitForImages = () => {
            const images = Array.from(clonedElement.querySelectorAll('img'));
            const promises = images.map(img => {
                if (img.complete) return Promise.resolve();
                return new Promise(resolve => {
                    img.onload = resolve;
                    img.onerror = resolve;
                });
            });
            return Promise.all(promises);
        };

        waitForImages().then(() => {
            // Fix object-fit: cover by drawing to canvas
            // This is more robust than div replacement for html2canvas
            const images = Array.from(clonedElement.querySelectorAll('img'));
            images.forEach(img => {
                const style = window.getComputedStyle(img);
                if (style.objectFit === 'cover' && img.naturalWidth > 0 && img.naturalHeight > 0) {
                    const rect = img.getBoundingClientRect();
                    if (rect.width === 0 || rect.height === 0) return;

                    const canvas = document.createElement('canvas');
                    canvas.width = rect.width;
                    canvas.height = rect.height;

                    // Copy classes
                    canvas.className = img.className;

                    // Copy critical styles
                    canvas.style.width = `${rect.width}px`;
                    canvas.style.height = `${rect.height}px`;
                    canvas.style.display = style.display;
                    canvas.style.position = style.position;
                    canvas.style.top = style.top;
                    canvas.style.left = style.left;
                    canvas.style.right = style.right;
                    canvas.style.bottom = style.bottom;
                    canvas.style.margin = style.margin;
                    canvas.style.borderRadius = style.borderRadius;
                    canvas.style.zIndex = style.zIndex;
                    canvas.style.opacity = style.opacity;

                    const ctx = canvas.getContext('2d');

                    // Calculate "cover" dimensions (center aligned)
                    const imgAspect = img.naturalWidth / img.naturalHeight;
                    const canvasAspect = rect.width / rect.height;

                    let renderW, renderH, renderX, renderY;

                    if (imgAspect > canvasAspect) {
                        // Image is wider: match height, crop width
                        renderH = rect.height;
                        renderW = rect.height * imgAspect;
                        renderY = 0;
                        renderX = (rect.width - renderW) / 2;
                    } else {
                        // Image is taller: match width, crop height
                        renderW = rect.width;
                        renderH = rect.width / imgAspect;
                        renderX = 0;
                        renderY = (rect.height - renderH) / 2;
                    }

                    ctx.drawImage(img, renderX, renderY, renderW, renderH);

                    img.parentNode.replaceChild(canvas, img);
                }
            });

            // Small delay to ensure layout is finalized
            setTimeout(() => {
                html2canvas(clonedElement, {
                    scale: 1, // 1:1 scale of the 1080px element
                    useCORS: true,
                    backgroundColor: null,
                    logging: false,
                    width: 1080,
                    height: 1080
                }).then(canvas => {
                    const link = document.createElement('a');
                    link.download = `photocard-${state.templateId}-${Date.now()}.png`;
                    link.href = canvas.toDataURL('image/png');
                    link.click();

                    // Cleanup
                    document.body.removeChild(container);
                }).catch(err => {
                    console.error('Export failed:', err);
                    if (document.body.contains(container)) {
                        document.body.removeChild(container);
                    }
                });
            }, 100);
        });
    });
}

init();
