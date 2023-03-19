# 3D Bubble Tea created by GPT-4

This 3D Bubble Tea is created by GPT-4, check the youtube link below to see the building process: 

### Video: [https://youtu.be/SvtUIhMDlrA](https://youtu.be/SvtUIhMDlrA)

### [Live demo](https://andy19910102.github.io/3d-bubble-tea-created-by-GPT-4/)

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzg3Zjk1M2M3NGNjOTIwMzYxZTRkMDJjNTU5ZTBlNWFmYjFiNDE1YSZjdD1n/7CE5ALS8JsqJG1O18Y/giphy.gif)

----

## Prompts History

🧙🏻‍♀️

請幫我使用HTML,CSS,JavaScript搭配Three.js函式庫在canvas上設計一個放在天藍色背景的可愛造型的3D珍珠奶茶，並且可旋轉視角，現在請開始進行HTML檔案的撰寫

Please help me design a 3D pearl milk tea with a cute shape on a sky blue background using HTML, CSS, JavaScript with the Three.js library. The view should be rotatable. Please start by creating an HTML file.

----

🤖

首先，您需要在您的電腦上安裝Three.js。前往[官方網站]https://threejs.org/）下載最新版本的Three.js，或者在HTML檔案中使用CDN鏈接。

以下是使用HTML、CSS、JavaScript和Three.js建立3D珍珠奶茶的代碼範例：

Firstly, you need to install Three.js on your computer. Visit the [official website](https://threejs.org/) to download the latest version of Three.js or use a CDN link in your HTML file.

Here is a sample code for creating a 3D pearl milk tea using HTML, CSS, JavaScript and Three.js:

```javascript
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D 珍珠奶茶</title>
  <style>
    body {
      margin: 0;
    }
    canvas {
      display: block;
    }
  </style>
</head>
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script>
    // 建立場景、相機和渲染器
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('skyblue');
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // 建立珍珠奶茶杯身
    const cupGeometry = new THREE.CylinderGeometry(2, 2, 6, 32);
    const cupMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
    const cup = new THREE.Mesh(cupGeometry, cupMaterial);
    scene.add(cup);

    // 建立珍珠
    const pearlGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const pearlMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
    const pearls = new THREE.Group();

    for (let i = 0; i < 20; i++) {
      const pearl = new THREE.Mesh(pearlGeometry, pearlMaterial);
      pearl.position.set(Math.random() * 4 - 2, -2.5, Math.random() * 4 - 2);
      pearls.add(pearl);
    }

    scene.add(pearls);

    // 設定相機位置
    camera.position.z = 12;

    // 建立動畫循環
    function animate() {
      requestAnimationFrame(animate);
      
      // 旋轉珍珠奶茶和珍珠
      cup.rotation.y += 0.01;
      pearls.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();

    // 調整視窗大小時更新渲染器和相機
    window.addEventListener('resize', function() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });
  </script>
</body>
</html>

```

----

🧙🏻‍♀️

我換個方式形容，我需要的是有著半透明背身，裡頭放置半杯的奶茶以及珍珠，奶茶可用棕色。背景色一樣是天然色。給我JavaScript Code即可。

Let me describe it in a different way. What I need is a half-transparent container that holds half a cup of milk tea with pearls inside. The milk tea should be brown in color. The background color should be natural. Please give me the JavaScript code for this.

----

🤖

了解您的需求，以下是基於Three.js函式庫創建半透明珍珠奶茶的JavaScript代碼：

I understand your needs. Below is the JavaScript code for creating a semi-transparent pearl milk tea based on the Three.js library:

```javascript
// 建立場景、相機和渲染器
const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 建立珍珠奶茶杯身
const cupGeometry = new THREE.CylinderGeometry(2, 2, 6, 32);
const cupMaterial = new THREE.MeshPhongMaterial({
    color: 0xFFFFFF,
    transparent: true,
    opacity: 0.5
});
const cup = new THREE.Mesh(cupGeometry, cupMaterial);
scene.add(cup);

// 建立奶茶液體
const liquidGeometry = new THREE.CylinderGeometry(1.9, 1.9, 3, 32);
const liquidMaterial = new THREE.MeshPhongMaterial({color: 0x8B4513});
const liquid = new THREE.Mesh(liquidGeometry, liquidMaterial);
liquid.position.y = -1.5;
scene.add(liquid);

// 建立珍珠
const pearlGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const pearlMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
const pearls = new THREE.Group();

for (let i = 0; i < 20; i++) {
    const pearl = new THREE.Mesh(pearlGeometry, pearlMaterial);
    pearl.position.set(Math.random() * 3.8 - 1.9, -1.5 + Math.random() * 1, Math.random() * 3.8 - 1.9);
    pearls.add(pearl);
}

scene.add(pearls);

// 添加環境光源
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(ambientLight);

// 添加點光源
const pointLight = new THREE.PointLight(0xFFFFFF, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// 設定相機位置
camera.position.z = 12;

// 建立動畫循環
function animate() {
    requestAnimationFrame(animate);

    // 旋轉珍珠奶茶和珍珠
    cup.rotation.y += 0.01;
    liquid.rotation.y += 0.01;
    pearls.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// 調整視窗大小時更新渲染器和相機
window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
```

----

🧙🏻‍♀️

你畫得很好，但是需要更多的改良空間：
1. 奶茶的顏色很好，但是請使用半透明的奶茶色，讓我可以看到裡面的珍珠。
2. 我希望杯身是頂部的半徑比較大，底部的半徑比較小，參考真實手搖杯會有的比例。
3. 有些珍珠跑到杯身之外了，請確保珍珠被放在杯身內。

You've done a great job, but there is room for improvement:

1. The color of the milk tea is great, but please use a semi-transparent milk tea color so that I can see the pearls inside.
2. I hope that the cup has a larger radius at the top and a smaller radius at the bottom, resembling the proportions of a real hand-shaken cup.
3. Some of the pearls are outside of the cup. Please make sure that all the pearls are inside the cup.

----

🤖

根據您的要求，我對代碼進行了修改：

1. 使用半透明的奶茶色。
2. 調整杯身形狀，使頂部半徑大於底部半徑。
3. 確保珍珠完全位於杯身內部。

請參考以下修改後的JavaScript代碼：

Based on your request, I have made the following changes to the code:

1. Used a semi-transparent milk tea color.
2. Adjusted the shape of the cup so that the top radius is larger than the bottom radius.
3. Ensured that all pearls are fully inside the cup.

Please refer to the following modified JavaScript code:

```javascript
// 建立場景、相機和渲染器
const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 建立珍珠奶茶杯身
const cupGeometry = new THREE.CylinderGeometry(2.5, 2, 6, 32);
const cupMaterial = new THREE.MeshPhongMaterial({
    color: 0xFFFFFF,
    transparent: true,
    opacity: 0.5
});
const cup = new THREE.Mesh(cupGeometry, cupMaterial);
scene.add(cup);

// 建立奶茶液體
const liquidGeometry = new THREE.CylinderGeometry(2.4, 1.9, 3, 32);
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
const pearlMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
const pearls = new THREE.Group();

for (let i = 0; i < 30; i++) {
    const pearl = new THREE.Mesh(pearlGeometry, pearlMaterial);
    const radius = (Math.random() * (1.9 - 0.3)) + 0.3;
    const angle = Math.random() * Math.PI * 2;
    const height = -1.5 + Math.random() * 1;
    pearl.position.set(radius * Math.cos(angle), height, radius * Math.sin(angle));
    pearls.add(pearl);
}

scene.add(pearls);

// 添加環境光源
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(ambientLight);

// 添加點光源
const pointLight = new THREE.PointLight(0xFFFFFF, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// 設定相機位置
camera.position.z = 12;

// 建立動畫循環
function animate() {
    requestAnimationFrame(animate);

    // 旋轉珍珠奶茶和珍珠
    cup.rotation.y += 0.01;
    liquid.rotation.y += 0.01;
    pearls.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
// 調整視窗大小時更新渲染
```

----

🧙🏻‍♀️

很好，但你應該清楚知道還有改善空間：

1. 奶茶應合理的被放在杯身內，且必須要是放在杯子的底部
2. 我希望使用者在拖曳時可以轉動鏡頭的視角
3. 在杯子的頂部插一根紅色的吸管
4. 杯子的形狀很好，但現在的杯子起來是實體，我希望杯子是個殼，透明的顏色。

Very good, but you should know that there is still room for improvement:

1. The milk tea should be placed inside the cup properly and must be at the bottom of the cup.
2. I hope that users can rotate the camera's view when dragging.
3. Insert a red straw at the top of the cup.
4. The cup shape is great, but currently the cup is a solid object. I hope that the cup can be a shell with a transparent color.

----

🤖

根據您的要求，我進行了以下改進：

1. 將奶茶放置在杯子底部並填滿杯子。
2. 允許用戶拖動以旋轉視角。
3. 在杯子頂部添加紅色吸管。
4. 將杯子改為透明並且是空心的。

請參考以下修改後的JavaScript代碼：

Based on your request, I have made the following improvements:

1. Filled the cup with milk tea and placed it at the bottom of the cup.
2. Enabled users to drag and rotate the camera's view.
3. Added a red straw at the top of the cup.
4. Made the cup transparent and hollow.

Please refer to the following modified JavaScript code:

```javascript
// 建立場景、相機和渲染器
const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
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

// 建立奶茶液體
const liquidGeometry = new THREE.CylinderGeometry(2.4, 1.9, 6, 32);
const liquidMaterial = new THREE.MeshPhongMaterial({
    color: 0x8B4513,
    transparent: true,
    opacity: 0.7
});
const liquid = new THREE.Mesh(liquidGeometry, liquidMaterial);
scene.add(liquid);

// 建立珍珠
const pearlGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const pearlMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
const pearls = new THREE.Group();

for (let i = 0; i < 30; i++) {
    const pearl = new THREE.Mesh(pearlGeometry, pearlMaterial);
    const radius = (Math.random() * (1.9 - 0.3)) + 0.3;
    const angle = Math.random() * Math.PI * 2;
    const height = -3 + Math.random() * 6;
    pearl.position.set(radius * Math.cos(angle), height, radius * Math.sin(angle));
    pearls.add(pearl);
}

scene.add(pearls);

// 建立紅色吸管
const strawGeometry = new THREE.CylinderGeometry(0.1, 0.1, 8, 16);
const strawMaterial = new THREE.MeshPhongMaterial({color: 0xFF0000});
const straw = new THREE.Mesh(strawGeometry, strawMaterial);
straw.position.set(-1.2, 2, 0);
straw.rotation.z = -0.3;
scene.add(straw);

// 添加環境光源
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(ambientLight);

// 添加點光源
const pointLight = new THREE.PointLight(0xFFFFFF, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// 設定相
```

----

🧙🏻‍♀️

請繼續

Continue, please.

----

🤖

```javascript
// 機位置
camera.position.z = 12;

// 建立動畫循環
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// 調整視窗大小時更新渲染器和相機
window.addEventListener('resize', function() {
const width = window.innerWidth;
const height = window.innerHeight;
renderer.setSize(width, height);
camera.aspect = width / height;
camera.updateProjectionMatrix();
});

// 添加拖動控制來旋轉視角
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.minDistance = 5;
controls.maxDistance = 50;
controls.maxPolarAngle = Math.PI / 2;
```

----

🧙🏻‍♀️

你畫得很好，但是還是有需要調整的地方：

1. 吸管需要再粗一點，可以參考珍珠的直徑設計。
2. 奶茶畫得很好，請保持這個水準，但是我希望奶茶是半滿的，但是要留意把奶茶放置在底部。
3. 放棄拖曳這個效果，保持其自動旋轉即可，但是我希望鏡頭角度是由上往下45度角看奶茶，讓我可以感受到立體感。
4. 目前的吸管底部插出杯身了，這不合理，但是我不希望強求你，你可以調整吸管的角度變得比較垂直來避免這個問題。
5. canvas的背景色可以是透明的嗎？如果可行幫我設計成透明的。我會在透過CSS為網頁加上背景色，如果canvas不可是透明的幫我一樣放上天藍色即可

You drew it well, but there are still some adjustments needed:

1. The straw needs to be thicker, you can refer to the diameter of the pearls.
2. The milk tea looks great, please keep it at this level. However, I hope the milk tea is half-filled but still placed at the bottom.
3. Let go of the dragging effect, keep it rotating automatically. However, I want the camera angle to be a 45-degree top-down view of the milk tea, so I can feel the three-dimensional effect.
4. The bottom of the straw is now inserted outside of the cup, which is not reasonable. But I don't want to force you, you can adjust the angle of the straw to be more vertical to avoid this problem.
5. Can the background color of the canvas be transparent? If possible, please design it as transparent. I will add a background color to the webpage through CSS. If the canvas cannot be transparent, please use the sky blue color as before.

----

🤖

根據您的要求，我對代碼進行了以下調整：

1. 將吸管粗度增加到與珍珠直徑相似。
2. 使奶茶半滿，並將其放置在杯子底部。
3. 取消拖動控制，保持自動旋轉。
4. 調整吸管角度，使其更接近垂直。
5. 將canvas背景設置為透明。

以下是修改後的JavaScript代碼：

You drew it well, but there are still some adjustments needed:

1. The straw needs to be thicker, you can refer to the diameter of the pearls.
2. The milk tea looks great, please keep it at this level. However, I hope the milk tea is half-filled but still placed at the bottom.
3. Let go of the dragging effect, keep it rotating automatically. However, I want the camera angle to be a 45-degree top-down view of the milk tea, so I can feel the three-dimensional effect.
4. The bottom of the straw is now inserted outside of the cup, which is not reasonable. But I don't want to force you, you can adjust the angle of the straw to be more vertical to avoid this problem.
5. Can the background color of the canvas be transparent? If possible, please design it as transparent. I will add a background color to the webpage through CSS. If the canvas cannot be transparent, please use the sky blue color as before.

```javascript
// 建立場景、相機和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
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
const liquidGeometry = new THREE.CylinderGeometry(2.4, 1.9, 3, 32);
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
const pearlMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
const pearls = new THREE.Group();

for (let i = 0; i < 30; i++) {
    const pearl = new THREE.Mesh(pearlGeometry, pearlMaterial);
    const radius = (Math.random() * (1.9 - 0.3)) + 0.3;
    const angle = Math.random() * Math.PI * 2;
    const height = -3 + Math.random() * 3;
    pearl.position.set(radius * Math.cos(angle), height, radius * Math.sin(angle));
    pearls.add(pearl);
}

scene.add(pearls);

// 建立紅色吸管
const strawGeometry = new THREE.CylinderGeometry(0.3, 0.3, 8, 16);
const strawMaterial = new THREE.MeshPhongMaterial({color: 0xFF0000});
const straw = new THREE.Mesh(strawGeometry, strawMaterial);
straw.position.set(-1, 1.5, 0);
straw.rotation.z = -0.1;
scene.add(straw);

// 添加環境光源
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add
```

----

🧙🏻‍♀️

請繼續

Continue please

----

🤖

```javascript
(ambientLight);

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
```

----

🧙🏻‍♀️

你這次做的接近我要的品質了，做的非常很請保持這個水準。

我希望頂部是個透明杯蓋，因為透明色的關係，我從視角上看不到杯蓋的立體感，我希望可以從目前視角能夠看到杯蓋前邊緣的型態。

You're getting close to the quality I'm looking for, and you've done a great job. Please maintain this level of quality.

I want the top of the cup to be a transparent lid. Due to the transparency, I can't see the three-dimensional effect of the lid from this angle. I hope that I can see the shape of the front edge of the lid from the current viewing angle.

----

🤖

謝謝您的肯定！我已經根據您的要求為杯子添加了一個透明的杯蓋，並確保從目前的視角可以看到杯蓋前邊緣的型態。以下是修改後的JavaScript代碼：

Thank you for your positive feedback! I have added a transparent lid to the cup according to your requirements and made sure that the shape of the front edge of the lid is visible from the current viewing angle. Here is the updated JavaScript code: 

```javascript
// ...前面的代碼保持不變...

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

// ...後面的代碼保持不變...
```

這段修改後的代碼在杯子頂部添加了一個透明的杯蓋。將這段代碼加入您之前的JavaScript代碼中，然後在HTML文件中加入Three.js函式庫，將整個代碼放入`<script>`標籤中。

Here is the updated code that adds a transparent lid to the top of the cup. Please incorporate this code into your previous JavaScript code, and include the Three.js library in your HTML file. Then, place the entire code within a `<script>` tag.

----

🧙🏻‍♀️

很好！你做的非常好！請保持現在的水準，有一些珍珠跑出了奶茶杯緣這是不合理的，你可以減少珍珠的數量，請針對這部分相關的code修改即可

Great job! You did really well! Please keep up the current level. Some pearls are running out of the edge of the milk tea cup, which is unreasonable. You can reduce the number of pearls, please modify the relevant code for this part.

----

🤖

謝謝您的讚美！我已經修改了珍珠的生成代碼，確保所有珍珠都在奶茶杯內，並減少了珍珠的數量。以下是修改後的珍珠生成代碼：

Thank you for your praise! I have modified the code for generating pearls to ensure that all pearls are inside the milk tea cup and have reduced the number of pearls. Here is the modified code for generating pearls:

```javascript
// ...前面的代碼保持不變...

// 建立珍珠
const pearlGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const pearlMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
const pearls = new THREE.Group();

for (let i = 0; i < 20; i++) {
    const pearl = new THREE.Mesh(pearlGeometry, pearlMaterial);
    const radius = (Math.random() * (1.6 - 0.3)) + 0.3;
    const angle = Math.random() * Math.PI * 2;
    const height = -2.5 + Math.random() * 2.5;
    pearl.position.set(radius * Math.cos(angle), height, radius * Math.sin(angle));
    pearls.add(pearl);
}

scene.add(pearls);
// ...後面的代碼保持不變...
```

