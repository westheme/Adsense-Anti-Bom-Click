# Adsense-Anti-Bom-Click
This code using javascript
This script code will protect your site from people with malicious intentions against your Google Adsense ads by clicking repeatedly which causes revenue to decrease or get banned from Google Adsense.

---

## How it work?
1. The script will check whether the cookies script are looking is exists or not
2. If exist, all ads will remove
3. When visitor / guest click on ads, script will count and save in cookies
4. After all conditions are met, all ads will remove as long as you defined it before

---

## How to use
1. Call the script after JQuery Library

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- another script link here -->
<script src="antibom.js"></script>
```
    
2. Put the code on footer or before closing tag </body>

```javascript
let antibom = new Antibom(2, 1); 
// 2 is click count, how many clicks on ads before ads will hidden
// 1 is mean 1 hour. You can change it as you wish. It define how long before the ads is showing again (starting from the last click)
antibom.run();
```

3. Save
---


## Thanks to
1. Allah SWT
2. Muhammad SAW
3. Stackoverflow
4. W3school
