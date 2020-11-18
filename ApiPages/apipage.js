new Vue({
    el:'#root',
    data:{
        posts:[
            {
                "albumId": 1,
                "id": 1,
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "https://via.placeholder.com/600/92c952",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            },
        ],
        anytext:'anytext'
    },
    mounted: function (){
        // var myCarousel = document.querySelector('#mainSlider')
        // var carousel = new bootstrap.Carousel(myCarousel);
        this.f1();
        //this.f2();
    },
    methods:{
        f1: async function () {
            let response = await fetch('https://jsonplaceholder.typicode.com/photos/3');
            if (response.ok) {
                let result = await response.json();
                console.log(result)
                this.posts = [result];
            } else {
                console.error(response.status);
            }
        },
        f2: function (){
            fetch('https://jsonplaceholder.typicode.com/photos/2')
                .then(response => response.json())
                .then(json => {
                    this.posts = [json];
                })
        }
    }
})