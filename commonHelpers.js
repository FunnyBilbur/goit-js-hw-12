import{S as L,a as b,i as c}from"./assets/vendor-6511d75b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const B=document.querySelector(".form"),C=document.querySelector(".input__search"),u=document.querySelector(".gallery"),d=document.querySelector(".load"),i=document.querySelector('button[data-action="load-more"]');let l=1,p=40;var v=new L(".gallery a",{captionsData:"alt",captionDelay:"250"});const m=async()=>{i.classList.add("isHidden"),d.classList.add("loader");let o=new URLSearchParams({key:"41527522-465889db431a6a06c19f4d10b",q:C.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:p});await b.get(`https://pixabay.com/api/?${o}`).then(r=>{let{total:n,hits:a,totalHits:e}=r.data;if(n===0){c.show({titleColor:"white",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"}),d.classList.remove("loader");return}d.classList.remove("loader");const t=a.map(({webformatURL:s,largeImageURL:g,tags:h,likes:f,views:y,comments:_,downloads:w})=>`<li class="gallery__item">
                    <a class="gallery__link" href="${g}">
                        <img
                            class="gallery__image"
                            src="${s}"
                            alt="${h}"/>
                        <ul class="info__list">
                        <li class="info__item">
                        <span>Likes</span>
                        <span>${f}</span>
                        </li>
                        <li class="info__item">
                        <span>Views</span>
                        <span>${y}</span>
                        </li>
                        <li class="info__item">
                        <span>Comments</span>
                        <span>${_}</span>
                        </li>
                        <li class="info__item">
                        <span>Downloads</span>
                        <span>${w}</span>
                        </li>
                        </ul>
            
                    </a>
            </li>`).join("");u.insertAdjacentHTML("beforeend",t),v.refresh(),i.classList.remove("isHidden"),p*l>=e&&(c.show({titleColor:"white",position:"topRight",message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"}),i.classList.add("isHidden"))}).catch(r=>c.show({titleColor:"white",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"}))};B.addEventListener("submit",async o=>{o.preventDefault(),u.innerHTML="",l=1,await m()});i.addEventListener("click",async()=>{l+=1,await m();let o=u.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:o,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
