export const EnglishExercisesMockup = [
  {
    id: 11231,
    categoryName: 'Comida',
    exercises: [
      {
        id: 11,
        name: '1',
        title: '¿Cuál de estos es "Café"?',
        isDone: false,
        answers: [
          { id: 112, content: 'Coffe', isCorrect: true },
          { id: 113, content: 'Sugar', isCorrect: false },
          { id: 114, content: 'Tea', isCorrect: false }
        ]
      },
      {
        id: 12,
        name: '2',
        title: '¿Cómo se dice "té"?',
        isDone: true,
        answers: [
          { id: 122, content: 'Tea', isCorrect: true },
          { id: 123, content: 'Hello', isCorrect: false },
          { id: 124, content: 'Coffe', isCorrect: false }
        ]
      },

      {
        id: 13,
        name: '3',
        title: '¿Cómo se dice "Hola"?',
        isDone: true,
        answers: [
          { id: 122, content: 'Hello', isCorrect: true },
          { id: 123, content: 'Bye', isCorrect: false },
          { id: 124, content: 'Nice', isCorrect: false }
        ]
      },
      {
        id: 14,
        name: '4',
        title: '¿Cómo se dice "Por favor"?',
        isDone: false,
        answers: [
          { id: 122, content: 'Please', isCorrect: true },
          { id: 123, content: 'Fast', isCorrect: false },
          { id: 124, content: 'Come on', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 21212,
    categoryName: 'House',
    exercises: [
      {
        id: 21,
        name: '1',
        title: '¿Cuál es la traducción de apple?',
        isDone: true,
        answers: [
          { id: 211, content: 'manzana', isCorrect: true },
          { id: 212, content: 'Pera', isCorrect: false },
          { id: 213, content: 'Platano', isCorrect: false }
        ]
      },
      {
        id: 22,
        name: '2',
        title: '¿Cuál es la traducción de pear?',
        isDone: false,
        answers: [
          { id: 221, content: 'manzana', isCorrect: false },
          { id: 222, content: 'Pera', isCorrect: true },
          { id: 234, content: 'Platano', isCorrect: false }
        ]
      }
    ]
  }
]
