new Vue({
    el: "#root",
    data:{
        jobs:[
            {name:'job-4',img:'res/img/item4.jpg',isShow:false, zIndex:"z-index:4;",
                link:'#'
            },
            {name:'job-3',img:'res/img/item3.jpg',isShow:false, zIndex:"z-index:3;",
                link:'#'
            },
            {name:'job-2',img:'res/img/item2.jpg',isShow:false, zIndex:"z-index:2;",
                link:'#'
            },
            {name:'Goa',img:'res/img/goa.jpg',isShow:true, zIndex:"z-index:1;",
                link:'https://github.com/IraOdio/goa'
            },
        ]
    },
    methods:{
        switchJob: function (number){
            //console.log(number)
            if(!event.target.href){
                this.jobs[number].isShow = !(this.jobs[number].isShow);
            }

        }
    }
})