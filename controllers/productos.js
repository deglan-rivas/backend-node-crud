import { productosModel as Productos } from '../models/productos.js'


import multer from 'multer'
import shortid from 'shortid'

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const extension = file.mimetype.split('/')[1];
        cb(null, `${shortid.generate()}.${extension}`);
    }
})

const configuracionMulter = {
    storage: fileStorage,
    fileFilter(req, file, cb) {
        // console.log(file.mimetype)
        if ( file.mimetype === 'image/jpeg' ||  file.mimetype ==='image/png' ) {
            cb(null, true);
        } else {
            cb(new Error('Formato No válido'))
        }
    },
}

const upload = multer(configuracionMulter).single('imagen');

export const subirArchivo = (req, res, next) => {
    upload(req, res, function(error) {
        if(error) {
            // res.json({mensaje: error})
            console.log(error)
        }
        return next();
    })
}

export const nuevoProducto = async (req, res, next) => {
    const producto = new Productos(req.body);
    // console.log(req)

    try {
        if(req.file?.filename) {
            producto.imagen = req.file.filename
        }
        await producto.save();
        res.json({mensaje : 'Se agrego un nuevo producto'})
    } catch (error) {
        console.log(error);
        next();
    }
} 


export const mostrarProductos = async (req, res, next) => {
    try {
        const productos = await Productos.find({});
        res.json(productos);
    } catch (error) {
        console.log(error);
        next();
    }
}

export const mostrarProducto = async (req, res, next) => {
    const producto = await Productos.findById(req.params.idProducto);

    if(!producto) {
        res.json({mensaje : 'Ese Producto no existe'});
        return next();
    }

    res.json(producto);
}

export const actualizarProducto = async (req, res, next) => {
    try {
        let nuevoProducto = req.body;

        if(req.file) {
            nuevoProducto.imagen = req.file.filename;
        } else {
            let productoAnterior = await Productos.findById(req.params.idProducto);
            nuevoProducto.imagen = productoAnterior.imagen;
        }

        
        let producto = await Productos.findOneAndUpdate({_id : req.params.idProducto}, nuevoProducto, {
            new : true,
        });

        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}

export const eliminarProducto = async (req, res, next) => {
    try {
        await Productos.findByIdAndDelete({ _id : req.params.idProducto });
        res.json({mensaje : 'El Producto se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}

export const buscarProducto = async (req, res, next) => {
    try {
        const { query } = req.params;
        const producto = await Productos.find({ nombre: new RegExp(query, 'i') });
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}