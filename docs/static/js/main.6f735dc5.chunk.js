(this["webpackJsonpmodulo-3-evaluacion-final-masopego"]=this["webpackJsonpmodulo-3-evaluacion-final-masopego"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/Rick_and_Morty_-_logo.75509f2e.png"},,,,function(e,a,t){e.exports=t.p+"static/media/question.2fd68a21.svg"},,,,function(e,a,t){e.exports=t.p+"static/media/images_nave.549c1d9f.png"},,function(e,a,t){e.exports=t.p+"static/media/rick.8127219c.png"},function(e,a,t){e.exports=t.p+"static/media/heart.c1354790.svg"},function(e,a,t){e.exports=t.p+"static/media/bones.b69684dc.svg"},function(e,a,t){e.exports=t.p+"static/media/alien.3c9d84f7.svg"},function(e,a,t){e.exports=t(52)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),s=t.n(c),l=(t(33),t(1)),i=t(2),o=t(4),u=t(3),m=(t(34),t(5)),p=t(7),h=(t(35),t(14)),d=t.n(h),f=t(22),E=t.n(f),v=(t(36),function(e){return r.a.createElement("button",{className:"btn btn__size--".concat(e.size," btn__color--").concat(e.color),onClick:e.onClick},e.title)});v.defaultProps={size:"medium",color:"primary"};var b=v,g=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"layer"},r.a.createElement("img",{className:"title",src:d.a,alt:"Rick and Morty"}),r.a.createElement("img",{className:"main__plane",src:E.a,alt:"Airplane"}),r.a.createElement(p.b,{className:"start",to:"/rick-and-morty-characters"},r.a.createElement(b,{title:"Comenzar"}))))}}]),t}(r.a.Component),j=t(8),y="https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json",O=(t(42),function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("article",{className:"character"},r.a.createElement("img",{className:"character__avatar",src:this.props.image,alt:this.props.title}),r.a.createElement("h3",{className:"character__name"},this.props.title),r.a.createElement("p",{className:"character__specie"},this.props.species))}}]),t}(r.a.Component));O.defaultProps={image:"https://via.placeholder.com/150",species:"Galactic"};var _=O,k=(t(43),function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).getCharacters=n.getCharacters.bind(Object(j.a)(n)),n}return Object(i.a)(t,[{key:"getCharacters",value:function(){return this.props.list.map((function(e){return r.a.createElement("li",{key:e.id,className:"characters__list--element"},r.a.createElement(p.b,{to:"/character/".concat(e.id)},r.a.createElement(_,{image:e.image,title:e.name,species:e.species})))}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"characters__list"},this.getCharacters()))}}]),t}(r.a.Component));k.defaultProps={list:[]};var N=k,C=(t(44),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"input__label",htmlFor:e.id}," ",r.a.createElement("input",{className:"input",type:e.kind,name:e.name,value:e.value,id:e.id,placeholder:e.placeholder,onChange:e.handleInputChange})))});C.defaultProps={kind:"text",name:"name",value:"",id:"",placeholder:""};var S=C,I=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).handleInputChange=n.handleInputChange.bind(Object(j.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n}return Object(i.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"handleInputChange",value:function(e){this.props.onInputSearch(e.target.value)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(S,{kind:"text",name:"userSearch",id:"userSearch",placeholder:"B\xfasqueda",value:this.props.value,handleInputChange:this.handleInputChange})))}}]),t}(r.a.Component),F=(t(45),function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement(I,{onInputSearch:this.props.onInputSearch,value:this.props.value}),r.a.createElement(b,{title:"Reset",size:"small",color:"secondary",onClick:this.props.resetSearch}))}}]),t}(r.a.Component)),V=(t(46),function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("img",{className:"loader--image",src:"https://media2.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.gif",alt:"Loading"}),r.a.createElement("p",{className:"loader--text"},"Viajando por el ciberespacio",r.a.createElement("span",null,"....")))}),x=(t(47),function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"footer__logo"},r.a.createElement("img",{src:d.a,alt:"Rick and Morty Search"})),r.a.createElement("div",{className:"footer__copy"},r.a.createElement("h5",null,r.a.createElement("a",{href:"https://github.com/masopego",target:"_blank",rel:"noopener noreferrer"},"masopego"),"\xa9 2020"))))}}]),t}(r.a.Component)),w=(t(48),function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={characters:[],searchValue:localStorage.getItem("localData")||"",isFetching:!1},n.handleInputValue=n.handleInputValue.bind(Object(j.a)(n)),n.filterCharactersList=n.filterCharactersList.bind(Object(j.a)(n)),n.resetSearch=n.resetSearch.bind(Object(j.a)(n)),n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchCharacters()}},{key:"componentDidUpdate",value:function(){var e=this.state.searchValue;localStorage.setItem("localData",e)}},{key:"fetchCharacters",value:function(){var e=this;this.setState({isFetching:!0}),fetch(y).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(a){setTimeout((function(){e.setState({characters:a,isFetching:!1})}),2500)}))}},{key:"handleInputValue",value:function(e){this.setState({searchValue:e})}},{key:"resetSearch",value:function(){return this.setState({searchValue:""})}},{key:"filterCharactersList",value:function(){var e=this,a=this.state.characters;return""!==this.state.searchValue&&(a=a.filter((function(a){return a.name.toUpperCase().includes(e.state.searchValue.toUpperCase())}))),a.sort((function(e,a){var t=e.name.toUpperCase(),n=a.name.toUpperCase();return t<n?-1:t>n?1:0})),a}},{key:"render",value:function(){var e=this.filterCharactersList();return this.state.isFetching?r.a.createElement(V,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"board"},r.a.createElement(F,{onInputSearch:this.handleInputValue,value:this.state.searchValue,resetSearch:this.resetSearch}),e.length>0?r.a.createElement(N,{list:e}):r.a.createElement("p",{className:"not-results"},"En este universo no hemos encontrado un personaje llamado"," ",this.state.searchValue.toUpperCase(),"."," ",r.a.createElement("span",null,"\xa1Prueba de nuevo! "))),r.a.createElement(x,null))}}]),t}(r.a.Component)),z=(t(49),t(24)),D=t.n(z),U=t(25),P=t.n(U),A=t(26),L=t.n(A),M=t(27),R=t.n(M),q=t(18),B=t.n(q),G=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e="Alive"===this.props.status?r.a.createElement("img",{src:P.a,alt:"Alive"}):"Dead"===this.props.status?r.a.createElement("img",{src:L.a,alt:"Dead"}):r.a.createElement("img",{src:B.a,alt:"Known"}),a="Human"===this.props.species?r.a.createElement("img",{src:D.a,alt:"Human"}):"Alien"===this.props.species?r.a.createElement("img",{src:R.a,alt:"Alien"}):r.a.createElement("img",{src:B.a,alt:"Unknown"});return r.a.createElement("article",{className:"character__card"},r.a.createElement("div",{className:"character__card--left"},r.a.createElement("img",{className:"character__card--avatar",src:this.props.image,alt:this.props.title})),r.a.createElement("div",{className:"character__card--right"},r.a.createElement("h2",{className:"character__card--title"},this.props.title),r.a.createElement("p",{className:"character__card--planet"},this.props.planet),r.a.createElement("div",{className:"character__card--icons"},r.a.createElement("div",{className:"icon-wrapper"},r.a.createElement("span",{className:"icon icon-specie"},a),r.a.createElement("p",{className:"legend"},this.props.species)),this.props.episodes?r.a.createElement("div",{className:"icon-wrapper"},r.a.createElement("span",{className:"icon icon-specie"},this.props.episodes),r.a.createElement("p",{className:"legend"},"Episodios")):null,r.a.createElement("div",{className:"icon-wrapper"},r.a.createElement("span",{className:"icon icon-specie"},e),r.a.createElement("p",{className:"legend"},this.props.status)))))}}]),t}(r.a.Component);G.defaultProps={image:"https://via.placeholder.com/150",species:"Galactic",planet:"I'm from a place called universe",episodes:30,status:"I'm here"};var H=G,J=(t(50),t(51),function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"notFound"},r.a.createElement("div",{className:"notFound--number"},"4",r.a.createElement("span",null),"4"," "),r.a.createElement("p",{className:"notFound--text"},"Parece que esta p\xe1gina se la ha tragado un agujero negro"),r.a.createElement(p.b,{to:"/"}," ",r.a.createElement(b,{title:"Volvemos a casa",size:"large"}))))}}]),t}(r.a.Component)),T=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={character:null},n.fetchCharacter=n.fetchCharacter.bind(Object(j.a)(n)),n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchCharacter()}},{key:"componentDidUpdate",value:function(){this.state.character&&parseInt(this.props.match.params.id)!==this.state.character.id&&this.fetchCharacter()}},{key:"fetchCharacter",value:function(){var e,a=this,t=parseInt(this.props.match.params.id);(e=t,fetch(y).then((function(e){return e.json()})).then((function(a){return a.results.find((function(a){return a.id===e}))}))).then((function(e){a.setState({character:e})}))}},{key:"render",value:function(){var e=parseInt(this.props.match.params.id),a=this.state.character;return a?r.a.createElement("section",{className:"character__detail"},r.a.createElement(H,{image:a.image,title:a.name,species:a.species,planet:a.location.name,episodes:a.episode.length,status:a.status}),r.a.createElement("ul",{className:"character__detail--navigation"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/character/".concat(e-1)},r.a.createElement(b,{title:r.a.createElement("i",{class:"fas fa-arrow-left"}),size:"radius",color:"tertiary"}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/character/".concat(e+1)},r.a.createElement(b,{title:r.a.createElement("i",{class:"fas fa-arrow-right"}),size:"radius",color:"tertiary"})))),r.a.createElement(p.b,{to:"/rick-and-morty-characters"},r.a.createElement(b,{size:"large",title:"Buscar otros personajes"}))):r.a.createElement(J,null)}}]),t}(r.a.Component),K=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"main"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:g}),r.a.createElement(m.a,{path:"/rick-and-morty-characters",component:w}),r.a.createElement(m.a,{path:"/character/:id",component:T}),r.a.createElement(m.a,{component:J})))}}]),t}(r.a.Component);s.a.render(r.a.createElement(p.a,null,r.a.createElement(K,null)),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.6f735dc5.chunk.js.map