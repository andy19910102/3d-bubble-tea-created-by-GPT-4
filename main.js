// 建立場景、相機和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); // 透明背景
document.body.appendChild(renderer.domElement);

// 建立杯子外殼
const cupOuterGeometry = new THREE.CylinderGeometry(2.5, 2, 6, 32);
const cupOuterMaterial = new THREE.MeshPhongMaterial({
    color: 0xFFFFFF,
    transparent: true,
    opacity: 0.5,
    side: THREE.BackSide
});
const cupOuter = new THREE.Mesh(cupOuterGeometry, cupOuterMaterial);
scene.add(cupOuter);

// 建立半滿奶茶液體
const liquidGeometry = new THREE.CylinderGeometry(2, 1.9, 3, 32);
const liquidMaterial = new THREE.MeshPhongMaterial({
    color: 0x8B4513,
    transparent: true,
    opacity: 0.7
});
const liquid = new THREE.Mesh(liquidGeometry, liquidMaterial);
liquid.position.y = -1.5;
scene.add(liquid);

// 建立珍珠
const pearlGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const pearlMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
const pearls = new THREE.Group();

for (let i = 0; i < 20; i++) {
    const pearl = new THREE.Mesh(pearlGeometry, pearlMaterial);
    const radius = (Math.random() * (1.6 - 0.3)) + 0.3;
    const angle = Math.random() * Math.PI * 2;
    const height = -2.5 + Math.random() * 2.5;
    pearl.position.set(radius * Math.cos(angle), height, radius * Math.sin(angle));
    pearls.add(pearl);
}

// 建立透明杯蓋
const lidGeometry = new THREE.TorusGeometry(2.5, 0.2, 16, 100);
const lidMaterial = new THREE.MeshPhongMaterial({
    color: 0xFFFFFF,
    transparent: true,
    opacity: 0.5
});
const lid = new THREE.Mesh(lidGeometry, lidMaterial);
lid.position.y = 3;
lid.rotation.x = Math.PI / 2;
scene.add(lid);

scene.add(pearls);

// 建立紅色吸管
const strawGeometry = new THREE.CylinderGeometry(0.3, 0.3, 8, 16);
const strawMaterial = new THREE.MeshPhongMaterial({ color: 0xe44141 });
const straw = new THREE.Mesh(strawGeometry, strawMaterial);
straw.position.set(-1, 1.5, 0);
straw.rotation.z = -0.1;
scene.add(straw);

// 添加環境光源
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(ambientLight);

// 添加點光源
const pointLight = new THREE.PointLight(0xFFFFFF, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// 設定相機位置和角度
camera.position.set(0, 8, 12);
camera.lookAt(scene.position);

// 建立動畫循環
function animate() {
    requestAnimationFrame(animate);
    // 自動旋轉
    scene.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// 調整視窗大小時更新渲染器和相機
window.addEventListener('resize', function () {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// 定義變量
let hue = 0;

// 創建變換背景顏色的函數
function updateBackground() {
    hue = (hue + 0.02) % 360;
    const startColor = `hsl(${hue}, 80%, 60%)`;
    const endColor = `hsl(${(hue + 90) % 360}, 80%, 60%)`;
    const gradient = `linear-gradient(45deg, ${startColor}, ${endColor})`;
    document.body.style.background = gradient;

    requestAnimationFrame(updateBackground);
}

updateBackground();

new Typed('#headerTitle', {
    strings: ['', '3D Bubble Tea created by GPT-4'],
    typeSpeed: 50,
});