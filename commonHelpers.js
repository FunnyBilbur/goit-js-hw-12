import{S as y,a as _,i as l}from"./assets/vendor-6511d75b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const L=document.querySelector(".form"),b=document.querySelector(".input__search"),c=document.querySelector(".gallery"),i=document.querySelector(".load");L.addEventListener("submit",async n=>{n.preventDefault(),c.innerHTML="",i.classList.add("loader");var t=new y(".gallery a",{captionsData:"alt",captionDelay:"250"});let s=new URLSearchParams({key:"41527522-465889db431a6a06c19f4d10b",q:b.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});await _.get(`https://pixabay.com/api/?${s}`).then(o=>{let{total:e,hits:r}=o.data;if(e===0){l.show({titleColor:"white",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"}),i.classList.remove("loader");return}i.classList.remove("loader");const a=r.map(({webformatURL:u,largeImageURL:m,tags:p,likes:d,views:f,comments:g,downloads:h})=>`<li class="gallery__item">
                    <a class="gallery__link" href="${m}">
                        <img
                            class="gallery__image"
                            src="${u}"
                            alt="${p}"/>
                        <ul class="info__list">
                        <li class="info__item">
                        <span>Likes</span>
                        <span>${d}</span>
                        </li>
                        <li class="info__item">
                        <span>Views</span>
                        <span>${f}</span>
                        </li>
                        <li class="info__item">
                        <span>Comments</span>
                        <span>${g}</span>
                        </li>
                        <li class="info__item">
                        <span>Downloads</span>
                        <span>${h}</span>
                        </li>
                        </ul>
            
                    </a>
            </li>`).join("");c.insertAdjacentHTML("beforeend",a),t.refresh()}).catch(o=>l.show({titleColor:"white",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"}))});
//# sourceMappingURL=commonHelpers.js.map
