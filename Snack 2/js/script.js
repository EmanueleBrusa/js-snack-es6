const students = [
    {
        'id': 213,
        'name': 'Marco della Rovere',
        'grades': 78
    },
    {
        'id': 110,
        'name': 'Paola Cortellessa',
        'grades': 96
    },
    {
        'id': 250,
        'name': 'Andrea Mantegna',
        'grades': 48
    },
    {
        'id': 145,
        'name': 'Gaia Borromini ',
        'grades': 74
    },
    {
        'id': 196,
        'name': 'Luigi Grimaldello',
        'grades': 68
    },
    {
        'id': 102,
        'name': 'Piero della Francesca',
        'grades': 50
    },
    {
        'id': 120,
        'name': 'Francesca da Polenta',
        'grades': 84
    }
]

console.log(students);

//restituisco un array composto dai nomi trasformati in maiuscolo
const plates = students.map((student) => student.name.toUpperCase());

console.log(students);

//restituisco un array degli studenti con un voto superiore a 70
const super_students = students.filter((student) => student.grades > 70)

console.log(super_students);

//restituisco un array composto da voto superiore a 70 ed id maggiore di 120
const ultra_students = students.filter((student) => student.grades > 70 && student.id > 120);

console.log(ultra_students);