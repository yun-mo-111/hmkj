




// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化导航功能
    initNavigation();

    // 默认显示首页
    showSection('home-page');
});

/**
 * 初始化导航功能
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.sidebar a[data-target]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            showSection(targetId);
        });
    });
}

/**
 * 显示指定内容区块
 * @param {string} sectionId 要显示的内容区块ID
 */
function showSection(sectionId) {
    // 隐藏所有内容区块
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    // 显示目标区块
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

/**
 * 切换手风琴内容显示
 * @param {string} accordionId 手风琴内容ID
 */
function toggleAccordion(accordionId) {
    const content = document.getElementById(accordionId);
    if (!content) return;

    const isVisible = content.style.display === 'block';
    content.style.display = isVisible ? 'none' : 'block';

    // 更新标题状态
    const title = document.querySelector(`[onclick="toggleAccordion('${accordionId}')"]`);
    if (title) {
        title.classList.toggle('active', !isVisible);
    }
}

/**
 * 提交申请表单
 */
function submitForm() {
    const form = document.getElementById('applicationForm');
    if (!form) return;

    // 收集表单数据
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // 模拟提交成功
    alert('申请提交成功，我们会尽快审核！若有疑问可联系：18706046117');
    form.reset();
}

/**
 * 提交在线申请表单
 */
function submitOnlineForm() {
    const form = document.getElementById('onlineApplicationForm');
    if (!form) return;

    // 收集表单数据
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // 模拟提交成功
    alert('在线申请提交成功，我们会尽快审核！若有疑问可联系：18706046117');
    form.reset();
}

/**
 * 提交试用申请表单
 */
function submitTrialForm() {
    const form = document.getElementById('trialApplicationForm');
    if (!form) return;

    // 收集表单数据
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // 模拟提交成功
    alert('3km 免费试用申请提交成功，我们会尽快审核！若有疑问可联系：18706046117');
    form.reset();
}




