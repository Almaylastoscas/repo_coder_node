import { Router } from "express";
import auth_router from "./auth.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    //let hola = chau
    return res.render(
      "index", //nombre de la vista
      {
        //datos dinamicos que puede llegar a necesitar la vista
        name: "Producto",
        //last_name: 'borraz',
        photoInicio: "public/img/inicio.jpg",
        alumnos: [
          {
            name: "Zpatilla nike dinamic",
            photo: "public/img/img01.jpg",
          },
          {
            name: "Zapatilla nike static",
            photo: "public/img/img02.jpg",
          },
          {
            name: "Zapatilla nike Urban ",
            photo: "public/img/img03.jpg",
          },
        ],
        title: "index",
        script: "/public/conection.js",
      }
    );
  } catch (error) {
    next(error);
  }
});
router.get("/products", async (req, res, next) => {
  try {
    return res.render("products", {
      produtcs: [
        {
          title: "Anteojos Ray-Ban Wayfarer 4195Mi",
          photo: "public/img/1.jpg",
          price: "$15.000",
        },
        {
          title: "Anteojos Ray-Ban Wayfarer 4195Mi",
          photo: "public/img/2.jpg",
          price: "$20.000",
        },
        {
          title: "Anteojos Ray-Ban Wayfarer 4195Mi",
          photo: "public/img/2.jpg",
          price: "$20.000",
        },
        {
          title: "Anteojos Ray-Ban Wayfarer 4195Mi",
          photo: "public/img/2.jpg",
          price: "$20.000",
        },
        {
          title: "Anteojos Ray-Ban Wayfarer 4195Mi",
          photo: "public/img/2.jpg",
          price: "$20.000",
        },
        {
          title: "Anteojos Ray-Ban Wayfarer 4195Mi",
          photo: "public/img/2.jpg",
          price: "$20.000",
        },
        {
          title: "Anteojos Ray-Ban Wayfarer 4195Mi",
          photo: "public/img/2.jpg",
          price: "$20.000",
        },
        {
          title: "Anteojos Ray-Ban Wayfarer 4195Mi",
          photo: "public/img/2.jpg",
          price: "$20.000",
        },
        {
          title: "Anteojos Ray-Ban Wayfarer 4195Mi",
          photo: "public/img/2.jpg",
          price: "$20.000",
        },
        {
          title: "Anteojos Ray-Ban Wayfarer 4195Mi",
          photo: "public/img/2.jpg",
          price: "$20.000",
        },
        {
          title: "Anteojos Ray-Ban Wayfarer 4195Mi",
          photo: "public/img/2.jpg",
          price: "$20.000",
        },
        {
          title: "Anteojos Ray-Ban Wayfarer 4195Mi",
          photo: "public/img/3.jpg",
          price: "$23.000",
        },
      ],
      title: "index",
      script: "/public/conection.js",
      title: "Products",
    });
  } catch (error) {
    next();
  }
});
router.get("/chat", async (req, res, next) => {
  try {
    return res.render("chat", { title: "Chat bot" });
  } catch (error) {
    next();
  }
});
auth_router.get("/register", async (req, res, next) => {
  try {
    return res.render("register", { title: "auth form" });
  } catch (error) {
    next();
  }
});
router.get("/new_product", async (req, res, next) => {
  try {
    return res.render("new_product", {
      title: "new_product",
      script: "/public/conection.js",
      title: "Product",
    });
  } catch (error) {
    next();
  }
});

router.use("/auth", auth_router);
//router.use('/products',product_router)
//router.use('/carts',cart_router)

export default router;
//en el enrutador principal de vistas
//UNICAMENTE llamo a los enrutadores de vistas de recursos
//el endpoint de prueba de la linea y ESTA MAL UBICADO
