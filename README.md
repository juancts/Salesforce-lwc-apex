# Salesforce-lwc-apex

Para el nuevo objeto Cliente (custom object), se ha de desarrollar un nuevo componente LWC donde el
usuario de forma fácil podrá crear y consultar registros de este objeto.

Se acuerda con el cliente que esta nueva vista tendrá un aspecto similar al siguiente:
Donde tendremos en primer lugar un formulario para insertar sobre los campos que contiene
este nuevo objeto “Cliente” así como una tabla que muestra todos los registros de dicho objeto
(no hace falta paginar).

Este formulario validará que al menos los campos Nombre y Apellidos tengan un valor y en
caso de que los datos introducidos sean válidos se deben reflejar en la tabla el nuevo registro
así como mostrar un mensaje Toast con el mensaje “Se ha insertado con éxito los datos del
nuevo cliente”. En caso de error mostrará el error que se ha producido o los datos que faltan.
