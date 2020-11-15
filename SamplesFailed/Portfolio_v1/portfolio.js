function includeStyle(name){
    if(name !=""&&name.length>0){
        var StyleLink = document.createElement('link');
        StyleLink.href=name;
        StyleLink.rel="stylesheet";
        document.head.append(StyleLink);
    }
}
function includeScript(name) {
    var script = document.createElement('script');
    script.src = name;
    document.getElementsByTagName('body')[0].appendChild(script);
}
function searchComponent(){
    var listComponents = ['catalog','card_product'];
    for(var i = 0; i< listComponents.length;i++){
        var temp123 = document.querySelector('.'+listComponents[i]);
        if(temp123){
            var pathInclude = 'components/'+listComponents[i]+'/'+listComponents[i]+'.css';
            includeStyle(pathInclude);
        }
    }
}
function getNamePage() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    page = page.split('.').shift();
    return page;
}
function navMenu() {
    //EWI - the element in which to insert
    var EWI = 'js_TopNavMenu';
    EWI = document.getElementById(EWI);
    var listNavItems = ['Главная','Каталог','Карточка товара','О себе'];
    var listNavItems_Links =['index','catalog','card_product','self'];
    var classNavItem = 'nav-item';
    var classNavItem_Link = 'nav-link';
    var classNavItem_LinkActive = 'nav-link active';
    var extension_page_html = true;
    var extension_page =  extension_page_html ? '.html' : '.php';
    if(EWI){
        for(var i=0; i< listNavItems.length;i++){
            var navItem__Element = document.createElement('li');
            navItem__Element.className = classNavItem;
            var navItem_Link__Element = document.createElement('a');
            navItem_Link__Element.className = getNamePage() == listNavItems_Links[i] ? classNavItem_LinkActive : classNavItem_Link;
            navItem_Link__Element.href = listNavItems_Links[i] + extension_page;
            navItem_Link__Element.textContent = listNavItems[i];
            navItem__Element.prepend(navItem_Link__Element);
            EWI.append(navItem__Element);
        }
    }

}
function catalogPage() {
    class itemCatalog{
        constructor(title,description = 'shortDescription--Default',nameImg='',classes) {
            this.title = title;
            this.description = description;
            this.nameImg = nameImg;
            this.classes = classes;
        }
        generateDomElement(){
            var col = document.createElement('div');
            var catalogItem = document.createElement('div');
            var catalogItemTitle = document.createElement('div');
            var catalogItemTitleLink = document.createElement('a');
            var catalogItemImage = document.createElement('div');
            var thisImg = document.createElement('img');
            var catalogItemDescription = document.createElement('div');
            col.className = this.classes.col;
            catalogItem.className = this.classes.catalogItem;
            catalogItemTitle.className = this.classes.catalogItemTitle;
            catalogItemTitleLink.className = this.classes.catalogItemTitleLink;
            catalogItemImage.className = this.classes.catalogItemImage;
            thisImg.className = this.classes.thisImg;
            catalogItemDescription.className = this.classes.catalogItemDescription;
            catalogItemImage.append(thisImg);
            catalogItemTitle.append(catalogItemTitleLink);
            catalogItem.append(catalogItemTitle);
            catalogItem.append(catalogItemImage);
            catalogItem.append(catalogItemDescription);
            col.append(catalogItem);
            catalogItemTitleLink.textContent = this.title;
            thisImg.src = this.nameImg;
            catalogItemDescription.textContent = this.description;
            catalogItemTitleLink.href='#';
            return col;
        }
    }
    class illusionItemCatalog{
        constructor(title,description,color,classes) {
            this.title = title;
            this.description = description;
            this.color = color;
            this.classes = classes;
        }
        generateDomElement(){
            var col = document.createElement('div');
            var catalogItem = document.createElement('div');
            var catalogItemTitle = document.createElement('div');
            var catalogItemTitleLink = document.createElement('a');
            var catalogItemImage = document.createElement('div');
            var catalogItemImageIllusion = document.createElement('div');
            var catalogItemDescription = document.createElement('div');
            col.className = this.classes.col;
            catalogItem.className = this.classes.catalogItem;
            catalogItemTitle.className = this.classes.catalogItemTitle;
            catalogItemTitleLink.className = this.classes.catalogItemTitleLink;
            catalogItemImage.className = this.classes.catalogItemImage;
            catalogItemImageIllusion.className = this.classes.catalogItemImageIllusion;
            catalogItemDescription.className = this.classes.catalogItemDescription;
            catalogItemImage.append(catalogItemImageIllusion);
            catalogItemTitle.append(catalogItemTitleLink);
            catalogItem.append(catalogItemTitle);
            catalogItem.append(catalogItemImage);
            catalogItem.append(catalogItemDescription);
            col.append(catalogItem);
            catalogItemTitleLink.textContent = this.title;
            catalogItemImageIllusion.style='background-color:'+this.color;
            catalogItemDescription.textContent = this.description;
            catalogItemTitleLink.href='#';
            return col;
        }
    }
    class Catalog{
        constructor() {

        }
        generateItems_Illusion(len){
            var IWE = document.getElementById('js_Catalog-items--Illusion');
            var classes ={
                catalogItems:'catalog-items',
                row:'row',
                col:'col-3',
                catalogItem:'catalog-item',
                catalogItemTitle:'catalog-item-title',
                catalogItemTitleLink:'catalog-item-title--link',
                catalogItemImage:'catalog-item-image',
                catalogItemImageIllusion:'catalog_img-illusion',
                catalogItemDescription:'catalog-item-description'
            }
            var enumColors = {
                colors:['aqua','red','#4cb5e86e','black','yellow','greenyellow'],
                iterator:0,
                getColor:function(){
                    var color = this.colors[this.iterator];
                    this.iterator++;
                    if (!this.colors[this.iterator]) {
                        this.iterator = 0;
                    }
                    return color;
                }
            }
            var catalogItems = document.createElement('div');
            catalogItems.className = classes.catalogItems;
            var row = document.createElement('div');
            row.className = classes.row;
            for(var i = 0; i< len; i++){
                var color = enumColors.getColor();
                var title = 'Предмет-'+i;
                var description = 'Описание предмета-'+i;
                var illusionItemCatalogV = new illusionItemCatalog(title,description,color,classes);
                var col = illusionItemCatalogV.generateDomElement();
                row.append(col);
                catalogItems.append(row);
                IWE.append(catalogItems);
            }
        }
        generateItems(len){
            var IWE = document.getElementById('js_Catalog-items');
            var classes ={
                catalogItems:'catalog-items',
                row:'row',
                col:'col-3',
                catalogItem:'catalog-item',
                catalogItemTitle:'catalog-item-title',
                catalogItemTitleLink:'catalog-item-title--link',
                catalogItemImage:'catalog-item-image',
                thisImg:'this-img img-fluid',
                catalogItemDescription:'catalog-item-description'
            }
            var enumImg = {
                images:['img/item1.jpg','img/item6.jpg','img/item3.jpg'],
                iterator:0,
                getImg:function(){
                    var img = this.images[this.iterator];
                    this.iterator++;
                    if (!this.images[this.iterator]) {
                        this.iterator = 0;
                    }
                    return img;
                }
            }
            var catalogItems = document.createElement('div');
            catalogItems.className = classes.catalogItems;
            var row = document.createElement('div');
            row.className = classes.row;
            for(var i = 0; i< len; i++){
                var img = enumImg.getImg();
                var title = 'Предмет-'+i;
                var description = 'Описание предмета-'+i;
                var illusionItemCatalogV = new itemCatalog(title,description,img,classes);
                var col = illusionItemCatalogV.generateDomElement();
                row.append(col);
                catalogItems.append(row);
                IWE.append(catalogItems);
            }
            adaptiveItemCatalog();
        }
    }
    var catalogV = new Catalog();
    //catalogV.generateItems_Illusion(20);
    catalogV.generateItems(12);

    function adaptiveItemCatalog() {
        setTimeout(function () {
            var allItems = document.querySelectorAll('.catalog-items .this-img');
            var maxHeight = allItems[0].height;
            for (var i = 1; i < allItems.length; i++) {
                if (allItems[i].height > maxHeight) maxHeight = allItems[i].height;
            }
            document.getElementById('jsWriteStyles').innerHTML = `.catalog-items .this-img{min-height:${maxHeight}px;}`;
        },1500)
    }
}
function route() {
    if(getNamePage()=='catalog'){
        catalogPage();
    }
}
function main(){
    searchComponent();
    navMenu()
    route();
}
document.addEventListener('DOMContentLoaded',function () {
    includeStyle('preloader.css');
    setTimeout(function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
            main();
        }, 100);
    },500);
});
