import { generate } from 'shortid'

export const difficulties = [
  {
    id: generate(),
    name: 'Básico',
    difficultyId: 1
  },

  {
    id: generate(),
    name: 'Intermedio',
    difficultyId: 2
  },
  {
    id: generate(),
    name: 'Avanzado',
    difficultyId: 3
  }

]
