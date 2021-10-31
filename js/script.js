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

            indexCounter: 0,
            timer:"",

            
         },

         methods :{
            
            

            nextPic(){
                this.indexCounter++ 
                if (this.indexCounter > this.imgList.length -1 ) {
                    this.indexCounter = 0
                }
            },

            beforePic(){
                let newIndex = this.indexCounter - 1 
                if (newIndex < 0 ) {
                    newIndex = this.imgList.length -1
                }
                 this.indexCounter= newIndex
            },

            sliding(){
              this.timer =  setInterval(()=>{
                    this.nextPic(); {
               }}, 3000);
            },

            stop(){
                clearInterval(this.timer);    
           },
            
        
        },

        


       
         

       
         
       
         
    })

    
})

