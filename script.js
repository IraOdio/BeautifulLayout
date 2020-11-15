new Vue({
    el:'#root',
    data:{
        nav:[
            {name:'Главная',link:'index.html'},
            {name:'Завершенные образцы',link:'SamplesSuccess/index.html'},
            {name:'Нереализованные образцы',link:'SamplesFailed/index.html'},
        ],
        secondNav:[
            {name:'Главная',link:'./../index.html'},
            {name:'Завершенные образцы',link:'./../SamplesSuccess/index.html'},
            {name:'Нереализованные образцы',link:'./../SamplesFailed/index.html'},
        ]
    },
    mounted: function (){
        // var myCarousel = document.querySelector('#mainSlider')
        // var carousel = new bootstrap.Carousel(myCarousel);
    }
})