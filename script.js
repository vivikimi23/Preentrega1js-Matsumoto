const articulos = [
    {nombre: "lemonpie" , precio : 2500},
    {nombre: "chocotorta" , precio : 3000},
    {nombre: "brownie" , precio : 2200},
    {nombre: "tiramisu" , precio : 2600},
    {nombre: "cheescake" , precio : 2100},
    {nombre: "selvanegra" , precio : 2000},
    
    
    ];
    let carrito =[]
    
    let todosLosArticulos = articulos.map((articulo) => articulo.nombre + " "+ articulo.precio + "$")
    
    alert(todosLosArticulos.join("-"))
    
    while(true) {
        let articulo = prompt("Agrega un articulo a tu carrito")
        let precio = 0
    
        if (articulo == "lemonpie" || articulo == "chocotorta" || articulo == "brownie" || articulo == "tiramisu" || articulo == "cheescake" || articulo == "selva negra"){
            switch (articulo){
                case "lemonpie":
                precio = 2500;
                break;
                case "chocotorta":
                precio = 3000;
                break;
                case "brownie":
                precio = 2200;
                break;
                case "tiramisu":
                precio = 2600;
                break;
                case "cheescake":
                precio = 2100;
                break;
                case "selvanegra":
                precio = 2000;
                break;

            }
            let unidades = parseInt(prompt ("Agregue las unidades"))
            carrito.push({articulos, unidades, precio})
            console.log(carrito)
            
            let seleccion = prompt("Continua con la compra si o no?")
            
            
    
            if(seleccion === "no"){
                alert("Gracias por la compra")
                break;
            }
    }
    }