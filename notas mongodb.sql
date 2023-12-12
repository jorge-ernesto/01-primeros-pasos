help;          # Verificar comandos de MongoDB
db.help();     # Verificar comandos de MongoDB relacionados a las BD
db.version();  # Verificar version de BD
db.stats();    # Verificar estadisticas de BD
show dbs;      # Verificar Bases de Datos

use curso_mongo;                                            # Creamos Base de Datos
db.frutas.insert({ nombre: 'Naranja', color: 'naranja' });  # Solo insertando una coleccion hacemos commit a la creacion de BD
manzana = { nombre: 'Manzana', color: 'verde' };            # Creamos variable, las variables solo persisten en la consola que se utilizan
db.frutas.insert(manzana);                                  # Insertamos coleccion usando variable

db.getCollection('frutas').find({});  # Buscamos en coleccion "frutas"
db.frutas.find();  # Alternativa a buscamos en coleccion "frutas"
