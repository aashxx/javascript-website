const root = document.getElementById('root');

function toggleMobileMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('show');
}

const navbar = document.createElement('nav');

    const homeLink = document.createElement('a');
    homeLink.href = '#';
    homeLink.textContent = 'Home';

    const aboutLink = document.createElement('a');
    aboutLink.href = '#';
    aboutLink.textContent = 'About';

    const servicesLink = document.createElement('a');
    servicesLink.href = '#';
    servicesLink.textContent = 'Services';

    const contactLink = document.createElement('a');
    contactLink.href = '#';
    contactLink.textContent = 'Contact';

    navbar.appendChild(homeLink);
    navbar.appendChild(aboutLink);
    navbar.appendChild(servicesLink);
    navbar.appendChild(contactLink);

const mobileMenuIcon = document.createElement('div');
mobileMenuIcon.className = 'mobile-menu-icon';
mobileMenuIcon.textContent = '☰';
mobileMenuIcon.onclick = toggleMobileMenu;

const heroSection = document.createElement('div');
heroSection.className = 'hero';

const heroTitle = document.createElement('h1');
heroTitle.textContent = 'Your Website';

const heroText = document.createElement('p');
heroText.textContent = 'Welcome to your awesome website';

heroSection.appendChild(heroTitle);
heroSection.appendChild(heroText);

const mainContent = document.createElement('div');
mainContent.className = 'main-content';

const mainTitle = document.createElement('h2');
mainTitle.textContent = 'Main Content Section';

const mainText = document.createElement('p');
mainText.textContent = 'This is where your main content goes.';

mainContent.appendChild(mainTitle);
mainContent.appendChild(mainText);

const footer = document.createElement('footer');
footer.innerHTML = '&copy; 2024 Your Website. All rights reserved.';

root.appendChild(navbar);
root.appendChild(mobileMenuIcon);
root.appendChild(heroSection);
root.appendChild(mainContent);
root.appendChild(footer);
root.appendChild(navbar);
root.appendChild(mobileMenuIcon);
root.appendChild(heroSection);
root.appendChild(mainContent);
root.appendChild(footer);































// document.getElementById(id)
// document.getElementsByClassName(className)
// document.getElementsByTagName(tagName)
// document.querySelector(selector)
// document.querySelectorAll(selector)
// document.createElement(tagName)
// element.innerHTML
// element.textContent
// element.setAttribute(name, value)
// element.getAttribute(name)
// element.style.property
// element.classList.add(className)
// element.classList.remove(className)
// element.classList.toggle(className)
// parentElement.appendChild(newChild)
// parentElement.removeChild(child)
// element.addEventListener(event, function)
// element.removeEventListener(event, function)