const express = require('express');
const fs = require('fs');
const pdf = require('html-pdf');
const axios = require('axios')
const puppeteer = require('puppeteer');

const app = express();

// app.use(express.static(__dirname+'/views'))

// app.post('/', async (req, res) => {

// const options = {
//   format: 'A4',
// };

// fs.readFile(__dirname+'/input/index.html','utf8',(err,data)=>{

// if (data) {
//   const randomData = Math.floor(Math.random()*99999999)
//   const path = './uploads/'
//   pdf.create(data, options).toFile(`${path}${randomData}.pdf`, function (err, res) {
//     if (err) {
//       console.error(err);
//     } else {
//       res.send(res);
//     }
//   });  
// }

//   });


// });

app.get('/',async(req,res)=>{
  
  (async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    // Navigate the page to a URL
    await page.goto('https://developer.chrome.com/');
  
    // Set screen size
    await page.setViewport({width: 1080, height: 1024});
  
    // Type into search box
    await page.type('.search-box__input', 'automate beyond recorder');
  
    // Wait and click on first result
    const searchResultSelector = '.search-box__link';
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);
  
    // Locate the full title with a unique string
    const textSelector = await page.waitForSelector(
      'text/Customize and automate'
    );
    const fullTitle = await textSelector?.evaluate(el => el.textContent);
  
    // Print the full title
    console.log('The title of this blog post is "%s".', fullTitle);
  
    await browser.close();
  })();







  // exportWebToPdf("https://icons.getbootstrap.com/icons/type/", exportOptions)
  //   .then(data => {
  //     res.send(data);
  //   });
//  const data = await axios.get('https://icons.getbootstrap.com/icons/type/')
//  const html = await data.data
//  console.log(html)
// console.log(data);
 // res.sendFile(__dirname+'/views/index.html')
})
app.listen(3000, () => {
  console.log(`Server running on port `);
});
