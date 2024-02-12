import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const pedidosSchema = new Schema({
    cliente: {
        type: Schema.ObjectId, 
        ref: 'Clientes'
    }, 
    pedido: [{
        producto: {
            type: Schema.ObjectId,
            ref: 'Productos'
        }, 
        cantidad: Number
    }],
    total: {
        type: Number
    }
});

export const pedidosModel = mongoose.model('Pedidos', pedidosSchema);