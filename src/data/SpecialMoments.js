import { reactive } from "vue";
const specialMoments =  reactive([
    {
        image: 'corporate-bg.jpg',
        hoverImage: 'corporate-hover-bg.jpg',
        text: {
            intestation: 'INTERNATIONAL BAKERY',
            title: 'Corporate Events'
        }
    },
    {
        image: 'wedding-bg.jpg',
        hoverImage: 'wedding-hover-bg.jpg',
        text: {
            intestation: 'PRIVATE DINING HALL',
            title: 'Weddings & Parties'
        }
    }
]) 


export { specialMoments };