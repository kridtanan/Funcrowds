- src/components
    สำหรับเก็บ ui ที่ใช้ซ้ำ เช่น navigation , footer 2 component นี้ถูกใช้ในหน้า  src/app.js
    *จัดการ navigation ~ footer หลักได้ในนี้

- src/pages 
    สำหรับเก็บ หน้าเว็บแต่หละหน้า
    *จัดการ page ต่างๆ หลักได้ในนี้


- src/functioanl 
    สำหรับเก็บฟังก์ชั่นที่สรา้งขึ้นมาเอง ในโปรเจ็คนี้มีฟังก์ชั่นแปลภาษาอยู่ src/functional/functranslate.js
    div ที่จะแปลจะต้องมี data-i18n="key" กำหนดไว้เช่น 
    ```<h1 data-i18n="ซื้อ">ซื้อ</h1> ```
    แล้วไปเพิ่ม key ใส่ใน translateConfig.js
    เช่นจะแปลจะ "TH" เป็น "EN" ต้องเข้าไปเพิ่ม key ใน
    
    ```
    const translateConfig{ 
        TH:{...}
        EN:{
        "ซื้อ":"buy"
        }
    }
    ```

- src/style
    สำหรับเก็บ css 
    *จัดการ css ต่างๆ หลักได้ในนี้

- public/assets/~
    เก็บไฟลฺภาพต่างๆนาๆ โฟลเดอร์ที่เก็บภาพสำหรับภาษาอังกฤษด้วย จะต้องแยกเป็นโฟลเดอร์ TH / EN เช่น assets/logo/TH & assets/logo/EN 
    
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
