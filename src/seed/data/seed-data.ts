interface SeedCategory {
  name: string;
}

interface SeedFood {
  name: string;
  price: number;
  description?: string;
  calories?: number;
  preparationTime?: Date;
  isActive?: boolean;
  category: string;
}

interface SeedUser {
  email: string;
  password: string;
  fullName: string;
  roles: string[];
}

interface SeedData {
  categories: SeedCategory[];
  foods: SeedFood[];
  users: SeedUser[];
}

export const initialData: SeedData = {
  users: [
    {
      email: 'admin@gmail.com',
      password: 'Admin123',
      fullName: 'Admin',
      roles: ['admin'],
    },
  ],
  categories: [
    {
      name: 'Hamburguesas',
    },
    {
      name: 'Papas Fritas',
    },
    {
      name: 'Ensaladas',
    },
    {
      name: 'Bebidas',
    },
    {
      name: 'Pizzas',
    },
    {
      name: 'Postres',
    },
    {
      name: 'Desayunos',
    },
    {
      name: 'Coctelería',
    },
    {
      name: 'Vegetarianos',
    },
    {
      name: 'Platos',
    },
    {
      name: 'Otros',
    },
  ],
  foods: [
    {
      name: 'Hamburguesa Clásica',
      price: 10.99,
      description:
        'Jugosa hamburguesa con carne de res, queso, lechuga y tomate.',
      category: 'Hamburguesas',
    },
    {
      name: 'Papas Deluxe',
      price: 5.99,
      description: 'Papas fritas crujientes acompañadas de salsa especial.',
      category: 'Papas Fritas',
    },
    {
      name: 'Ensalada Mediterránea',
      price: 8.99,
      description:
        'Mezcla fresca de lechuga, tomate, aceitunas, queso feta y aderezo de hierbas.',
      category: 'Ensaladas',
    },
    {
      name: 'Mojito de Fresa',
      price: 7.49,
      description: 'Refrescante mojito con un toque de fresa.',
      category: 'Bebidas',
    },
    {
      name: 'Pizza Margarita',
      price: 12.99,
      description: 'Deliciosa pizza con tomate, mozzarella y albahaca fresca.',
      category: 'Pizzas',
    },
    {
      name: 'Tarta de Chocolate',
      price: 6.99,
      description: 'Irresistible tarta de chocolate con salsa de frambuesa.',
      category: 'Postres',
    },
    {
      name: 'Desayuno Saludable',
      price: 9.99,
      description: 'Tostadas integrales, yogur con frutas y granola.',
      category: 'Desayunos',
    },
    {
      name: 'Martini de Mango',
      price: 8.49,
      description: 'Sofisticado martini con puré de mango.',
      category: 'Coctelería',
    },
    {
      name: 'Wrap Vegetariano',
      price: 11.49,
      description: 'Wrap con falafel, hummus, verduras frescas y salsa tahini.',
      category: 'Vegetarianos',
    },
    {
      name: 'Cheeseburger Especial',
      price: 13.49,
      description:
        'Sabrosa cheeseburger con tocino, aguacate y salsa especial.',
      category: 'Hamburguesas',
    },
    {
      name: 'Twisters de Batata',
      price: 6.99,
      description: 'Deliciosos twisters de batata con alioli de ajo.',
      category: 'Papas Fritas',
    },
    {
      name: 'Ensalada César con Pollo',
      price: 10.99,
      description:
        'Ensalada fresca con pollo a la parrilla, crutones y aderezo césar.',
      category: 'Ensaladas',
    },
    {
      name: 'Smoothie de Frutas Tropicales',
      price: 5.49,
      description: 'Batido refrescante con piña, mango y plátano.',
      category: 'Bebidas',
    },
    {
      name: 'Pizza Vegetariana',
      price: 14.99,
      description:
        'Pizza abundante con champiñones, pimientos, cebolla y queso vegano.',
      category: 'Pizzas',
    },
    {
      name: 'Helado de Vainilla con Almendras',
      price: 7.99,
      description: 'Helado cremoso de vainilla con trozos de almendra.',
      category: 'Postres',
    },
    {
      name: 'Desayuno Energético',
      price: 12.99,
      description: 'Batido verde, avena con frutas y tostadas de aguacate.',
      category: 'Desayunos',
    },
    {
      name: 'Piña Colada',
      price: 9.49,
      description: 'Clásica piña colada con ron y crema de coco.',
      category: 'Coctelería',
    },
    {
      name: 'Tacos Vegetarianos',
      price: 10.49,
      description:
        'Tacos rellenos de frijoles, aguacate, maíz y salsa picante.',
      category: 'Vegetarianos',
    },
    {
      name: 'Sushi Variado',
      price: 16.99,
      description: 'Selección de sushi con variedad de pescados y vegetales.',
      category: 'Platos',
    },
    {
      name: 'Bocadillo de Pollo BBQ',
      price: 8.99,
      description: 'Bocadillo jugoso de pollo asado con salsa barbacoa.',
      category: 'Hamburguesas',
    },
    {
      name: 'Tostones con Guacamole',
      price: 7.49,
      description: 'Tostones crujientes acompañados de guacamole fresco.',
      category: 'Papas Fritas',
    },
    {
      name: 'Ensalada de Quinoa',
      price: 9.99,
      description:
        'Ensalada saludable con quinoa, aguacate, tomate y aderezo de limón.',
      category: 'Ensaladas',
    },
    {
      name: 'Limonada de Fresa',
      price: 4.99,
      description: 'Refrescante limonada con trozos de fresa y menta.',
      category: 'Bebidas',
    },
    {
      name: 'Calzone de Vegetales',
      price: 13.99,
      description: 'Calzone relleno de verduras asadas y queso mozzarella.',
      category: 'Pizzas',
    },
    {
      name: 'Mousse de Mango',
      price: 6.49,
      description: 'Postre suave y cremoso de mango con coulis de frutas.',
      category: 'Postres',
    },
    {
      name: 'Desayuno Mexicano',
      price: 11.99,
      description: 'Huevos rancheros, frijoles, salsa y tortillas de maíz.',
      category: 'Desayunos',
    },
    {
      name: 'Cóctel de Frutas Frescas',
      price: 10.99,
      description: 'Mezcla de frutas frescas con un toque de licor de naranja.',
      category: 'Coctelería',
    },
    {
      name: 'Risotto de Champiñones',
      price: 12.49,
      description: 'Risotto cremoso con champiñones y queso parmesano.',
      category: 'Vegetarianos',
    },
    {
      name: 'Filete de Salmón',
      price: 17.99,
      description: 'Filete de salmón a la parrilla con salsa de eneldo.',
      category: 'Platos',
    },
    {
      name: 'Empanadas de Pino',
      price: 9.99,
      description:
        'Empanadas rellenas de carne, cebolla, huevo duro, aceitunas y pasas.',
      category: 'Otros',
    },
    {
      name: 'Cazuela de Pollo',
      price: 11.49,
      description:
        'Sopa abundante con pollo, papas, zapallo, zanahorias y arroz.',
      category: 'Platos',
    },
    {
      name: 'Completo',
      price: 6.99,
      description:
        'Hot dog chileno con salchicha, palta, tomate, mayonesa y sauerkraut.',
      category: 'Otros',
    },
    {
      name: 'Asado a la Parrilla',
      price: 16.99,
      description:
        'Selección de carnes a la parrilla con chimichurri, papas y ensalada chilena.',
      category: 'Platos',
    },
    {
      name: 'Pastel de Choclo',
      price: 13.99,
      description:
        'Pastel gratinado de choclo con carne, cebolla y huevo duro.',
      category: 'Platos',
    },
    {
      name: 'Sopaipillas con Pebre',
      price: 5.49,
      description:
        'Sopaipillas fritas con pebre (salsa de tomate, cebolla y cilantro).',
      category: 'Otros',
    },
    {
      name: 'Humitas al Horno',
      price: 8.99,
      description:
        'Humitas de maíz rellenas de carne, cebolla y condimentos, cocidas al horno.',
      category: 'Otros',
    },
    {
      name: 'Ceviche de Reineta',
      price: 14.49,
      description:
        'Ceviche de reineta marinado en limón con cebolla morada, cilantro y ají.',
      category: 'Otros',
    },
    {
      name: 'Manjarate',
      price: 7.99,
      description: 'Postre chileno con manjar (dulce de leche) y galletas.',
      category: 'Postres',
    },
    {
      name: 'Curanto',
      price: 19.99,
      description:
        'Plato típico de Chiloé con mariscos, carnes, papas y chapaleles cocidos en hoyo.',
      category: 'Platos',
    },
    {
      name: 'Sopa de Mariscos',
      price: 15.49,
      description: 'Sopa abundante con variedad de mariscos, papas y verduras.',
      category: 'Platos',
    },
    {
      name: 'Calzones Rotos',
      price: 6.49,
      description:
        'Masitas fritas con forma irregular, espolvoreadas con azúcar flor.',
      category: 'Postres',
    },
    {
      name: 'Milcao',
      price: 10.99,
      description:
        'Tortas gruesas de papa rallada y chicharrones de cerdo, cocidas al horno.',
      category: 'Otros',
    },
    {
      name: 'Paila Marina',
      price: 17.99,
      description: 'Sopa de mariscos servida en una paila de cobre.',
      category: 'Platos',
    },
    {
      name: 'Ensalada Chilena',
      price: 8.99,
      description:
        'Ensalada fresca con tomate, cebolla y cilantro, aliñada con aceite de oliva.',
      category: 'Ensaladas',
    },
    {
      name: 'Papas con Pebre',
      price: 7.49,
      description:
        'Papas cocidas acompañadas de pebre (salsa de tomate, cebolla y cilantro).',
      category: 'Otros',
    },
    {
      name: 'Kuchen de Frutas',
      price: 12.49,
      description: 'Pastel alemán con frutas frescas, crema y masa quebrada.',
      category: 'Postres',
    },
    {
      name: 'Chorrillana',
      price: 13.99,
      description:
        'Plato contundente con papas fritas, carne, cebolla y huevo frito.',
      category: 'Otros',
    },
    {
      name: 'Tiramisú de Lucuma',
      price: 9.99,
      description: 'Variante chilena del clásico tiramisú con pulpa de lucuma.',
      category: 'Postres',
    },
    {
      name: 'Sopa de Porotos',
      price: 8.49,
      description:
        'Sopa espesa de porotos (frijoles), cebolla, ajo y especias.',
      category: 'Platos',
    },
    {
      name: 'Palta Rellena',
      price: 6.99,
      description:
        'Palta (aguacate) rellena de camarones, mayonesa y jugo de limón.',
      category: 'Ensaladas',
    },
    {
      name: 'Charquicán',
      price: 11.49,
      description: 'Guiso de carne con papas, calabaza, choclo y guisantes.',
      category: 'Platos',
    },
    {
      name: 'Pastel de Jaiba',
      price: 14.99,
      description: 'Pastel gratinado de jaiba con queso y crema.',
      category: 'Platos',
    },
    {
      name: 'Caldillo de Congrio',
      price: 16.49,
      description: 'Sopa de congrio con papas, zanahorias, cebolla y tomate.',
      category: 'Platos',
    },
    {
      name: 'Machas a la Parmesana',
      price: 17.99,
      description: 'Machas gratinadas con queso parmesano, mantequilla y ajo.',
      category: 'Platos',
    },
    {
      name: 'Cordero al Palo',
      price: 19.99,
      description: 'Cordero cocido a la parrilla con especias y hierbas.',
      category: 'Platos',
    },
    {
      name: 'Leche Asada',
      price: 9.49,
      description: 'Postre horneado a base de leche, huevo, azúcar y vainilla.',
      category: 'Postres',
    },

    {
      name: 'Pastel de Chuchoca',
      price: 12.99,
      description:
        'Pastel elaborado con chuchoca (maíz molido), carne y condimentos.',
      category: 'Platos',
    },
    {
      name: 'Humitas en Olla',
      price: 8.99,
      description: 'Humitas envueltas en hojas de maíz y cocidas en olla.',
      category: 'Otros',
    },
    {
      name: 'Chapalele',
      price: 6.49,
      description: 'Bollos de papa y harina, cocidos y servidos con pebre.',
      category: 'Otros',
    },

    {
      name: 'Curanto en Hoyo',
      price: 18.99,
      description:
        'Plato típico de Chiloé cocido bajo tierra con mariscos, carnes y papas.',
      category: 'Platos',
    },
    {
      name: 'Küchen de Moras',
      price: 7.99,
      description: 'Pastel con moras frescas, crema y masa quebrada.',
      category: 'Postres',
    },
    {
      name: 'Asado de Tira',
      price: 15.99,
      description:
        'Costillas de vacuno asadas a la parrilla con salsa de chimichurri.',
      category: 'Platos',
    },
    {
      name: 'Torte de Manzana',
      price: 11.99,
      description: 'Torta de manzana con capas de fruta y crema.',
      category: 'Postres',
    },
    {
      name: 'Paila de Huesillos',
      price: 9.49,
      description:
        'Huesillos (duraznos deshidratados) cocidos en almíbar servidos en una paila.',
      category: 'Postres',
    },
    {
      name: 'Carne Mechada',
      price: 13.49,
      description:
        'Carne de vacuno deshilachada y cocida lentamente en salsa de tomate.',
      category: 'Platos',
    },
  ],
};
