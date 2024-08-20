const utc = new Date();
const kst = new Date(utc.setHours(utc.getHours() + 9));
console.log([kst.getFullYear(), String(kst.getMonth() + 1).padStart(2, "0"), String(kst.getDate()).padStart(2, "0")].join("-"));
