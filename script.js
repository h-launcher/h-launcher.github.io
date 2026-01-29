document.addEventListener('DOMContentLoaded', () => {
    console.log('HLauncher site loaded');

    // Add scroll effect for navbar
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(8, 12, 20, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.6)';
        } else {
            navbar.style.background = 'linear-gradient(to bottom, rgba(8, 12, 20, 0.95), rgba(8, 12, 20, 0.8))';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
        }
    });

    // Simple platform selector interaction on Download page (if exists)
    const platforms = document.querySelectorAll('.platform-card');
    if (platforms.length > 0) {
        platforms.forEach(p => {
            p.addEventListener('click', () => {
                platforms.forEach(other => other.classList.remove('active'));
                p.classList.add('active');
            });
        });
    }
    // Modal Logic
    const downloadBtn = document.querySelector('.btn-mega-download');
    // Only if we are on the download page and button exists
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            openSupportModal();
        });
    }
});

function openSupportModal() {
    const modal = document.getElementById('support-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeSupportModal() {
    const modal = document.getElementById('support-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

async function getDownloadCount() {
    const owner = 'h-launcher';
    const repo = 'h-launcher.github.io';
    // Count all releases
    const url = `https://api.github.com/repos/${owner}/${repo}/releases`;

    // For specific tag:
    // const url = `https://api.github.com/repos/${owner}/${repo}/releases/tags/Beta-0.1`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        let totalDownloads = 0;

        // Logic if data is array (all releases)
        if (Array.isArray(data)) {
            data.forEach(release => {
                release.assets.forEach(asset => {
                    // Count only .exe or all files
                    if (asset.name === 'HLauncher.exe') {
                        totalDownloads += asset.download_count;
                    }
                });
            });
        }
        // Logic if url was for specific tag
        else if (data.assets) {
            data.assets.forEach(asset => {
                if (asset.name === 'HLauncher.exe') {
                    totalDownloads += asset.download_count;
                }
            });
        }

        // Display on page
        const element = document.getElementById('dl-count');
        if (element) {
            element.innerText = totalDownloads;
        }

    } catch (error) {
        console.error('Ошибка получения статистики:', error);
    }
}

document.addEventListener('DOMContentLoaded', getDownloadCount);
