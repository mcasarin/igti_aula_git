import mongoose from 'mongoose';

// criação do modelo
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0)
        throw new Error('Valor negativo para a nota não permitido');
    },
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

// definindo o modelo da coleção e obtendo o modelo da coleção
const studentModel = mongoose.model('student', studentSchema, 'student'); // o segundo termo student é para q o mongoose não crie um collection diferente, no plural (students)

export { studentModel }; // exportanto para uso
