(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d={email:"user@mail.com",password:"secret"},a="user-data",m=document.querySelector(".login-form"),s=document.querySelector('[name="email"]'),l=document.querySelector('[name="password"]'),i=document.querySelector(".login-form button");m.addEventListener("submit",f);function f(o){o.preventDefault();const r=s.value.trim(),n=l.value.trim();if(i.textContent==="Logout"){m.reset(),localStorage.removeItem(a),i.textContent="Login",s.removeAttribute("readonly"),l.removeAttribute("readonly");return}if(r===""||n==="")return alert("Fill all fields!");r===d.email&&n===d.password?(localStorage.setItem(a,JSON.stringify({email:r,password:n})),i.textContent="Logout",s.setAttribute("readonly",!0),l.setAttribute("readonly",!0)):alert("Wrong data!")}if(localStorage.getItem(a)){const o=JSON.parse(localStorage.getItem(a));s.value=o.email||"",l.value=o.password||"",i.textContent="Logout",s.setAttribute("readonly",!0),l.setAttribute("readonly",!0)}
//# sourceMappingURL=index.js.map
