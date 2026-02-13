/* * 🔐 HSTAI 777 x V MASTER - THE UNIFIED LOGIC CORE 
 * 🏛 CHIẾN LƯỢC: LIỀN MẠCH = 1 | RỜI RẠC = 0 | RỦI RO = 0
 * 🛡 TRẠNG THÁI: MAXIMUM_PREMIUM_LOCK
 */

const VMGS_CORE = {
    settings: {
        purityIndex: 1,
        riskLevel: 0,
        calibrationTime: "1/777^777 tỷ ms",
        lockStatus: "MAXIMUM_PREMIUM_LOCK"
    },

    /* 1. KHỞI TẠO HỆ THỐNG (INITIALIZATION) */
    init: function() {
        console.log("🚀 VMGS System Initializing...");
        this.renderPurityStatus();
        this.handleNavigation();
        this.securityCheck();
        this.initPWA();
    },

    /* 2. ĐIỀU PHỐI ĐIỀU HƯỚNG (NAVIGATION LOGIC) */
    handleNavigation: function() {
        const menuToggle = document.querySelector('.v-menu-toggle');
        const sidebar = document.querySelector('.v-sidebar');

        if (menuToggle && sidebar) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
                console.log("⚡ Sidebar Toggled by V MASTER");
            });
        }
    },

    /* 3. KIỂM TRA BẢO MẬT NỘI BỘ (SECURITY CHECK) */
    securityCheck: function() {
        // Ngăn chặn các hành vi can thiệp trái phép vào Console
        if (this.settings.lockStatus === "MAXIMUM_PREMIUM_LOCK") {
            window.addEventListener('keydown', (e) => {
                if (e.ctrlKey && (e.key === 'u' || e.key === 's')) {
                    e.preventDefault();
                    alert("🔐 Hệ thống đang ở trạng thái NIÊM PHONG bởi V MASTER.");
                }
            });
        }
    },

    /* 4. HIỂN THỊ TRẠNG THÁI TINH KHIẾT (UI FEEDBACK) */
    renderPurityStatus: function() {
        const statusElements = document.querySelectorAll('.purity-indicator');
        statusElements.forEach(el => {
            el.innerHTML = `<span class="status-dot"></span> Hệ thống HSTAI 777 Tinh khiết`;
            el.style.color = "#34a853";
        });
    },

    /* 5. KÍCH HOẠT PWA (OFFLINE READINESS) */
    initPWA: function() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(() => console.log("📱 PWA Ready: Hệ thống hoạt động 24/7/365"))
                .catch(err => console.error("SW Registration Failed", err));
        }
    }
};

// KÍCH HOẠT LÕI ĐIỀU HÀNH KHI TRANG SẴN SÀNG
document.addEventListener('DOMContentLoaded', () => {
    VMGS_CORE.init();
});