var n=s=>{throw TypeError(s)};var c=(s,a,r)=>a.has(s)||n("Cannot "+r);var l=(s,a,r)=>(c(s,a,"read from private field"),r?r.call(s):a.get(s)),o=(s,a,r)=>a.has(s)?n("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(s):a.set(s,r);import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{a as p}from"./assets/vendor-N5iQpiFS.js";var t,e;class m{constructor(){o(this,t,"https://api.unsplash.com/search/photos");o(this,e,"gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58")}async getPopularPhotos(a){const r=new URLSearchParams({query:"popular",page:a,per_page:12,orientation:"portrait",client_id:l(this,e)}),{data:i}=await p(`${l(this,t)}?${r}`);return i}}t=new WeakMap,e=new WeakMap;const g=s=>s.map(a=>`
        <li class="gallery__item">
        <img class="gallery-img" src="${a.urls.small}" alt="${a.alt_description}">
        </li>
        `).join(""),h=document.querySelector(".gallery"),u=new m;u.getPopularPhotos(1).then(s=>{console.log(s),h.innerHTML=g(s.results)});
//# sourceMappingURL=gallery.js.map
