const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni', 'Fedez', 
    'George Clooney', 
    'Amal Clooney', 
    'Maneskin'
]

const invitation_array = guests.map((guest, i) => {
    return { 'table_name': 'Tavolo Vip', 'guest': guest, 'order': i}
});

console.log(invitation_array);