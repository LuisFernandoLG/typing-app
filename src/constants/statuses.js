import { generate } from 'shortid'

export const statuses = [
  {
    id: generate(),
    name: 'Activo',
    statusId: 1
  },

  {
    id: generate(),
    name: 'Inactivo',
    statusId: 2
  }
]
