let pokemonRepository=function(){let t=[];function e(t){return fetch(t.detailsUrl).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.other.dream_world.front_default,t.height=e.height,t.weight=e.weight,t.types=[];for(let n=0;n<e.types.length;n++)t.types.push(" "+e.types[n].type.name[0].toUpperCase()+e.types[n].type.name.slice(1).toLowerCase());t.abilities=[];for(let i=0;i<e.abilities.length;i++)t.abilities.push(" "+e.abilities[i].ability.name[0].toUpperCase()+e.abilities[i].ability.name.slice(1).toLowerCase());return t}).catch(function(t){console.error(t)})}function n(){return t}function i(e){t.push(e)}function o(t){e(t).then(function(){var e;let n,i,o,a,s,p,r,l;e=t,n=$(".modal-body"),(i=$(".modal-title")).empty(),n.empty(),o=$("<h3>"+e.name.toUpperCase()+"</h3>"),(a=$('<img class="modal-img">')).attr("src",e.imageUrl),s=$("<p><strong> Height: </strong>"+e.height+" cm</p>"),p=$("<p><strong> Weight: </strong>"+e.weight+" kg</p>"),r=$("<p><strong> Type: </strong>"+e.types+"</p>"),l=$("<p><strong> Abilities: </strong>"+e.abilities+"</p>"),i.append(o),n.append(a),n.append(s),n.append(p),n.append(r),n.append(l)})}return{add:i,getAll:n,loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=500").then(t=>t.json()).then(t=>{t.results.forEach(t=>{i({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.log(t)})},loadDetails:e,addListItem:function t(e){let n=document.querySelector(".pokemon-list"),i=document.createElement("li");i.classList.add("group-list-item");let a=document.createElement("button");a.innerText=e.name.toUpperCase(),a.classList.add("btn-primary"),a.addEventListener("click",function(){o(e)}),i.appendChild(a),n.appendChild(i)},showDetails:o}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){return pokemonRepository.addListItem(t)})});