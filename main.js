// Data
const sceneryData = [
  { name: '子梅垭口', description: '眺贡嘎金山', image: 'assets/8570b22408b4d4a0acdb9a8b350896a.jpg' },
  { name: '川藏巅', description: '云阔山苍', image: 'assets/81066270f39a0ad237f6a5232e88647.jpg' },
  { name: '贡嘎山', description: '云绕雪巅', image: 'assets/623b6a5f55d07f2d5dd9fe16c545a76.jpg' },
  { name: '墨脱', description: '莲花秘境，林深翠幽', image: 'assets/f9ca000cc76b8776767c48ba4ce335a.jpg' },
  { name: '冈仁波齐', description: '云阔山雄', image: 'assets/88afa52210fb9a6ddf8f0687e3eabed.jpg' },
  { name: '巴音布鲁克', description: '天阔草青', image: 'assets/abb3fc9919d4cedb4b36d3279f472ff.jpg' },
  { name: '果子沟', description: '桥横山，直升机巡空', image: 'assets/796802687aa35b2430c8907accc20ea.jpg' },
  { name: '叶城', description: '新藏线零公里，摩旅起点', image: 'assets/4265b8fb4adf8311beec2f03a168fa9.jpg' }
];

const journeyData = [
  { name: '拉萨夜街', description: '藏韵流光', image: 'assets/d3ad142ba61a6d038b24f4506dbc989.jpg' },
  { name: '藏西阿里', description: '摩旅入藏西阿里', image: 'assets/d8b238261d52e37d06e95f2acb06236.jpg' },
  { name: '藏地湖畔', description: '云阔天蓝', image: 'assets/7ed8a4c2f5df3f20060633b085a66b4.jpg' },
  { name: '松西达坂', description: '摩旅高海拔打卡', image: 'assets/88900e8fcce8ac1ccb6e53a75b25c15.jpg' },
  { name: '戍边英烈碑', description: '雪山畔缅怀', image: 'assets/a27292e5d3d2186cee0bc3fb57ade4b.jpg' },
  { name: '旅途瞬间', description: '在路上', image: 'assets/2b0e5147ae50b48f5a009e4b84f4bce.jpg' },
  { name: '独库公路', description: '雄山壮途', image: 'assets/5620742032b84f530b8c4c4679f7efd.jpg' },
  { name: '赛里木湖', description: '摩旅伴湖天阔', image: 'assets/541938e92f8399f6a42344f17ef0ca8.jpg' }
];

const skillsData = [
  {
    title: '旅游规划师',
    region: '恩施地区 · 携程金牌',
    icon: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>',
    description: '熟悉恩施地区旅游资源，携程金牌旅游规划师，提供专业的旅游线路规划、景点推荐、行程安排等服务，让您体验最地道的恩施风情。',
    highlights: ['携程金牌规划师', '恩施大峡谷', '土司城', '腾龙洞']
  },
  {
    title: '企业网站运维',
    region: '个人服务',
    icon: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>',
    description: '提供网站服务器维护、安全防护、性能优化、内容更新等全方位运维服务，保障企业网站稳定运行。',
    highlights: ['服务器维护', '安全防护', '性能优化', '数据备份']
  },
  {
    title: '隧道幕墙施工',
    region: '持证上岗',
    icon: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
    description: '持有焊工证、高空作业证、特殊设备操作证，具备丰富的隧道工程、幕墙施工经验，熟悉各类焊接工艺，确保工程质量与安全。',
    highlights: ['焊工证', '高空作业证', '特种设备操作证', '幕墙施工']
  },
  {
    title: '自媒体运营',
    region: '企业官号运维',
    icon: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>',
    description: '提供企业自媒体账号运营服务，包括短视频拍摄剪辑、文案策划、内容发布，以及企业线上电商平台的搭建与运维。',
    highlights: ['视频拍摄', '剪辑制作', '文案策划', '电商搭建运维']
  }
];

// Helper functions
function createCard(item) {
  return `
    <div class="card">
      <div class="card-image">
        <img src="${item.image}" alt="${item.name}" class="card-img">
        <div class="card-overlay"></div>
        <div class="card-content">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.description}</p>
        </div>
      </div>
    </div>
  `;
}

function renderCards(container, data) {
  const row1 = data.slice(0, 4);
  const row2 = data.slice(4);
  
  container.innerHTML = `
    <div class="cards-row">
      ${row1.map(createCard).join('')}
    </div>
    <div class="cards-row">
      ${row2.map(createCard).join('')}
    </div>
  `;
}

function createSkillCard(skill) {
  return `
    <div class="skill-card">
      <div class="skill-icon">
        ${skill.icon}
      </div>
      <h3 class="skill-title">${skill.title}</h3>
      <p class="skill-region">${skill.region}</p>
      <p class="skill-desc">${skill.description}</p>
      <div class="skill-tags">
        ${skill.highlights.map(h => `<span class="skill-tag">${h}</span>`).join('')}
      </div>
    </div>
  `;
}

function renderSkills(container) {
  container.innerHTML = skillsData.map(createSkillCard).join('');
}

// Initialize
function init() {
  // Render cards
  const sceneryContainer = document.getElementById('scenery-container');
  const journeyContainer = document.getElementById('journey-container');
  const skillsContainer = document.getElementById('skills-cards');
  
  if (sceneryContainer) renderCards(sceneryContainer, sceneryData);
  if (journeyContainer) renderCards(journeyContainer, journeyData);
  if (skillsContainer) renderSkills(skillsContainer);
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
  
  // Scroll controls for scenery
  setupScrollControls('scenery-container', 'scroll-left-1', 'scroll-right-1');
  
  // Scroll controls for journey
  setupScrollControls('journey-container', 'scroll-left-2', 'scroll-right-2');
  
  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
}

function setupScrollControls(containerId, leftBtnId, rightBtnId) {
  const container = document.getElementById(containerId);
  const leftBtn = document.getElementById(leftBtnId);
  const rightBtn = document.getElementById(rightBtnId);
  
  if (!container || !leftBtn || !rightBtn) return;
  
  const scrollAmount = 260;
  
  leftBtn.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
  
  rightBtn.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
  
  const updateButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = container;
    leftBtn.style.opacity = scrollLeft > 0 ? '1' : '0.3';
    rightBtn.style.opacity = scrollLeft < scrollWidth - clientWidth - 10 ? '1' : '0.3';
  };
  
  container.addEventListener('scroll', updateButtons);
  updateButtons();
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', init);
