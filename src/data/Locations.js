import { reactive } from "vue";
const locations = reactive([
    {
        image: 'new-york-bk.jpg',
        title: 'New York',
        number: '1.800.458.556',
        openingTime: '9:00 AM',
        closingTime: '6:00 PM',
        color: '#F1F9FB'
    },
    {
        image: 'london-bk.jpg',
        title: 'London',
        number: '1.800.458.556',
        openingTime: '9:00 AM',
        closingTime: '6:00 PM',
        color: '#FAF3E3'
    }
]);

export { locations };