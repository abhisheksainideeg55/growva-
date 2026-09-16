import fs from 'fs';
import path from 'path';
import https from 'https';

const baseUrl = 'https://www.growva.tech/';

const assetList = [
  'assets/images/favicon.png',
  'assets/images/logo/growlogo.png',
  'assets/images/logo/itekHeaderLogo.png',
  'assets/images/shape/introShape2_1.png',
  'assets/images/shape/introShape2_2.png',
  'assets/images/shape/introShape2_3.png',
  'assets/images/shape/introShape2_4.png',
  'assets/images/shape/textSlider3_1.png',
  'assets/images/shape/breadcumbBg1_1.png',
  'assets/images/intro/introThumb2_1.png',
  'assets/images/intro/introThumb2_2.png',
  'assets/images/services/serviceThumb3.jpg',
  'assets/images/services/serviceIcon3_1.png',
  'assets/images/services/serviceIcon3_2.png',
  'assets/images/services/serviceIcon3_3.png.png',
  'assets/images/services/serviceIcon3_3.png',
  'assets/images/services/serviceIcon3_4.png',
  'assets/images/about/aboutThunb3.jpg',
  'assets/images/about/aboutThumb1_1.jpg',
  'assets/images/price/priceIcon3_1.png',
  'assets/images/price/priceIcon3_2.png',
  'assets/images/price/priceIcon3_3.png',
  'assets/images/faq/faqThumb3.png',
  'assets/images/contact/contactThumb3.jpg',
  'assets/images/blog/blogThumb3_1.jpg',
  'assets/images/blog/blogThumb3_2.jpg',
  'assets/images/cta/ctaThumb3_1.jpg',
  'assets/images/cta/ctaThumb3_2.jpg',
  'assets/images/cta/ctaThumb3_3.jpg',
  'assets/images/project/projectThumb1_1.jpg',
  'assets/images/project/projectThumb1_2.jpg',
  'assets/images/project/projectThumb1_3.jpg',
  'assets/images/project/projectThumb1_4.jpg',
  'assets/images/project/projectThumb1_5.jpg',
  'assets/images/project/projectThumb1_6.jpg',
];

function downloadFile(relPath) {
  return new Promise((resolve) => {
    const url = baseUrl + relPath;
    const dest = path.join(process.cwd(), 'public', relPath);
    const destDir = path.dirname(dest);
    fs.mkdirSync(destDir, { recursive: true });

    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded: ${relPath}`);
          resolve(true);
        });
      } else {
        console.log(`Skipped/Failed (${res.statusCode}): ${relPath}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`Error ${relPath}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  console.log('Downloading assets...');
  for (const asset of assetList) {
    await downloadFile(asset);
  }
  console.log('All downloads finished!');
}

run();
