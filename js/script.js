Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function (){
    app = new Vue({
         el: "#root",
         data:{
            imgList:[{
                url: 'img/01.jpg',
                title:'Svezia',
                paragrafo:"lorem ipusm 1",
            },
            {
                url: 'img/02.jpg',
                title:'Svizzera',
                paragrafo:"lorem ipsum 2",
            },
            {
                url: 'img/03.jpg',
                title:'Gran Bretagna',
                paragrafo:"lorem ipusm 3 ",
            },
            {
                url: 'img/04.jpg',
                title:'Germania',
                paragrafo:"lorem ipusm 4 ",
            },
            {
                url: 'img/05.jpg',
                title:'Paradise',
                paragrafo:"lorem ipusm 5",
            }],

            classCard: "active",

            indexCounter: 0
         }
    })
})

