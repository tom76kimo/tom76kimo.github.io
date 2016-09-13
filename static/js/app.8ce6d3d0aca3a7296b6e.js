webpackJsonp([1,0],[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=o(2),r=i(s),a=o(30),n=i(a),c=o(38),l=i(c),d=o(4),v=i(d),p=o(3),u=i(p);r["default"].use(l["default"]),r["default"].use(u["default"]);var f=new l["default"];f.map(v["default"]),f.start(n["default"],"#app")},function(e,t){"use strict";function o(e){return e.projects}function i(e){return e.experiences}function s(e){return e.skill.skillEntry}function r(e){return e.skill.progressArray}Object.defineProperty(t,"__esModule",{value:!0}),t.getProjects=o,t.getExperiences=i,t.getSkillEntry=s,t.getProgressArray=r},,,function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(35),r=i(s),a=o(31),n=i(a),c=o(36),l=i(c),d=o(37),v=i(d),p=o(33),u=i(p),f=o(32),_=i(f);t["default"]={"/":{component:r["default"]},"/Home":{component:r["default"]},"/Contact":{component:n["default"]},"/Project":{component:l["default"]},"/Skill":{component:v["default"]},"/Experience":{component:u["default"]},"/Education":{component:_["default"]}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(3),r=i(s),a=o(2),n=i(a);n["default"].use(r["default"]);var c={projects:[{title:"Yahoo Front Page",titleLink:"https://tw.yahoo.com",duration:"Jan. 2015 - Now",avatar:"https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png",content:"The main site of Yahoo Taiwan. Work on advertise fetching and balance the loading of site.",skillSet:["React","Webpack","Advertising","User Tracking","Modulization","i18n"]},{title:"Bible Reader",titleLink:"http://bible.tom76kimo.info/",duration:"May. 2014 - Now",avatar:"http://graph.facebook.com/10152748341458051/picture?width=70&height=70",content:"A website for user to record the progress of reading Bible. User can easily use this website framework to build your own record web app for your group or church.",skillSet:["Backbone","Bootstrap","Recording"]},{title:"webpack-atomizer-loader",titleLink:"https://github.com/acss-io/webpack-atomizer-loader",duration:"May. 2016 - Now",avatar:"https://avatars2.githubusercontent.com/u/18367805?v=3&s=200",content:"A webpack loader of Atomic CSS. Accepted by ACSS organization.",skillSet:["Webpack","Atmoic CSS","Utils"]}],experiences:[{avatar:"https://media.licdn.com/media/p/5/005/00e/318/39cf760.png",position:"Software Engineer",title:"Yahoo Inc.",duration:"Sep. 2014 - Now",descriptions:["Web architecture design, front-end coding (JavaScript, CSS, HTML),library/package composing and iOS app programming.","Yahoo News - iOS app","Yahoo Taiwan Home Page","Yahoo Video Page"]},{avatar:"https://media.licdn.com/media/p/8/005/0a5/2c7/1637158.png",position:"Front-end Engineer",title:"QNAP Inc.",duration:"Sep. 2014 - Oct. 2013",descriptions:["Build a iPhoto-like web site to manage photos."]}],skill:{progressArray:[{title:"Javascript",style:{width:"75%"}},{title:"HTML & CSS",style:{width:"85%"}},{title:"Nodejs",style:{width:"70%"}}],skillEntry:["React","Vue","Nodejs","ES6","Git","Webpack","SEO","Performance Tuning","Continuous Deploy","i18n","Flux flow"]}},l={};t["default"]=new r["default"].Store({state:c,mutations:l})},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(34),r=i(s),a=o(5),n=i(a);t["default"]={replace:!1,components:{HeaderBanner:r["default"]},store:n["default"]}},function(e,t){"use strict"},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(1);t["default"]={vuex:{getters:{experiences:i.getExperiences}},data:function(){return{}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{classes:["Home","Project","Skill","Experience","Contact"],showMenu:!1}},methods:{toggleMenu:function(){this.showMenu=!this.showMenu}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{}},methods:function(){return{}}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(1);t["default"]={vuex:{getters:{projects:i.getProjects}},data:function(){return{}}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(1);t["default"]={vuex:{getters:{skillEntry:i.getSkillEntry,progressArray:i.getProgressArray}},data:function(){return{}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,o){e.exports=o.p+"static/img/tom-avatar.d703cc9.png"},function(e,t){e.exports=" <header-banner></header-banner> <router-view> </router-view> "},function(e,t){e.exports=' <div class=container _v-170bd949=""> <div class=title _v-170bd949="">Experience</div> <div class=experience-container v-for="ex in experiences" _v-170bd949=""> <img class=experience-avatar width=100 v-bind:src=ex.avatar _v-170bd949=""> <div class=experience-position _v-170bd949="">{{ex.position}}</div> <div class=experience-title _v-170bd949="">{{ex.title}}</div> <div class=experience-duration _v-170bd949="">{{ex.duration}}</div> <ul _v-170bd949=""> <li class=experience-details-entry v-for="des in ex.descriptions" _v-170bd949="">{{des}}</li> </ul> </div> </div> '},function(e,t){e.exports=' <div class=banner _v-25a4ea90=""> <div class=logo _v-25a4ea90="">tom76kimo</div> <ul _v-25a4ea90=""> <li v-for="classEntry in classes" v-link="{ path : \'/\' + classEntry}" _v-25a4ea90="">{{classEntry}}</li> </ul> <div class=menu v-on:click=toggleMenu _v-25a4ea90=""> <i class="fa fa-bars" aria-hidden=true _v-25a4ea90=""></i> </div> <div class=menu-block v-show=showMenu _v-25a4ea90=""> <a class=menu-entry v-on:click=toggleMenu v-for="classEntry in classes" v-link="{ path : \'/\' + classEntry}" _v-25a4ea90="">{{classEntry}}</a> </div> </div> '},function(e,t,o){e.exports=' <div class=container _v-29da9904=""> <div class=details _v-29da9904=""> <div class=avatar-container _v-29da9904=""> <img class=avatar src='+o(21)+' _v-29da9904=""> </div> <div class=bio _v-29da9904=""> <div class=bio-title _v-29da9904="">Web Front-end Developer</div> <div class=bio-details _v-29da9904="">Hi, I am Tom Wu. I have 5 years of experience in Web front and back end. Highly eager to dig new tech on web.</div> <a href="mailto:tom76kimo@gmail.com?subject=[CV Required] I am <who I am>&amp;body=Hi, please give me your CV :)" _v-29da9904="">Require CV</a> </div> </div> </div> '},function(e,t){e.exports=' <div class=container _v-3ede9c5e=""> <div class=title _v-3ede9c5e="">Contact</div> <div class=details _v-3ede9c5e=""> <div class=name _v-3ede9c5e="">Tom Wu</div> <div class=occupation _v-3ede9c5e="">Front-end Developer</div> <div class=email _v-3ede9c5e=""> - tom76kimo@gmail.com</div> </div> </div> '},function(e,t){e.exports=' <div class=container _v-6f598f19=""> <div class=title _v-6f598f19="">Education</div> <div class=edu-container _v-6f598f19=""></div> </div> '},function(e,t){e.exports=' <div class=container _v-7251c9c2=""> <div class=title _v-7251c9c2="">Skill</div> <div class=progress-section _v-7251c9c2=""> <div class=progress-container v-for="progress in progressArray" _v-7251c9c2=""> <div class=progress-title _v-7251c9c2="">{{progress.title}}</div> <div class=progress _v-7251c9c2=""> <div class=inner-progress-container v-bind:style=progress.style _v-7251c9c2=""> <div class=inner-progress _v-7251c9c2=""></div> </div> </div> </div> </div> <div class=skill-entry-section _v-7251c9c2=""> <div class=skill-title _v-7251c9c2="">More</div> <div class=skill-entry v-for="entry in skillEntry" _v-7251c9c2=""> <i class="fa fa-check-circle" aria-hidden=true _v-7251c9c2=""></i>{{entry}} </div> </div> </div> '},function(e,t){e.exports=' <div class=container _v-b3c8976c=""> <div class=title _v-b3c8976c="">Projects</div> <div v-for="project in projects" class=project-block _v-b3c8976c=""> <div class=project-title _v-b3c8976c=""> <a href={{project.titleLink}} target=_blank _v-b3c8976c="">{{project.title}}<i class="fa fa-link" aria-hidden=true _v-b3c8976c=""></i></a> </div> <div class=duration _v-b3c8976c="">{{project.duration}}</div> <div class=project-table _v-b3c8976c=""> <div class=project-details _v-b3c8976c=""> <div class=project-avatar-block _v-b3c8976c=""> <img class=project-avatar v-bind:src=project.avatar height=50 _v-b3c8976c=""> </div> <div class=project-content _v-b3c8976c="">{{project.content}}</div> <div class=project-skill _v-b3c8976c=""> <div v-for="set in project.skillSet" class=skill _v-b3c8976c="">{{set}}</div> </div> </div> </div> <div class=project-avatar-block-xs _v-b3c8976c=""> <img class=project-avatar v-bind:src=project.avatar height=50 _v-b3c8976c=""> </div> <div class=project-content-xs _v-b3c8976c="">{{project.content}}</div> <div class=project-skill-xs _v-b3c8976c=""> <div v-for="set in project.skillSet" class=skill _v-b3c8976c="">{{set}}</div> </div> </div> <div class=more _v-b3c8976c="">More...(Review on CV)</div> </div> '},function(e,t,o){var i,s;o(13),i=o(6),s=o(22),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(17),i=o(7),s=o(26),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(18),s=o(27),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(14),i=o(8),s=o(23),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(15),i=o(9),s=o(24),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(16),i=o(10),s=o(25),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(20),i=o(11),s=o(29),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(19),i=o(12),s=o(28),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}]);
//# sourceMappingURL=app.8ce6d3d0aca3a7296b6e.js.map