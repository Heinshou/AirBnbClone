# Rutas

## URL DEL DESPLIEGUE
- - https://airbnb-clon.onrender.com/

- /api/v1/users
- /api/v1/users/:id
- /api/v1/users/me

- /api/v1/auth/login
- /api/v1/auth/register
- /api/v1/auth/password-recovery
-/api/v1/auth/verify-account

- /api/v1/users
- - GET 

- /api/v1/users/:id
- - GET 
- - PUT (ADMIN)
- - DELETE (ADMIN)

- /api/v1/users/me 
- - GET
- - PUT
- - PATCH
- - DELETE


- /api/v1/auth/login
- - POST




- /api/v1/auth/register
- -POST



- /api/v1/auth/password-recovery
- - POST
- - PATCH


# Paths de mi usuario a traves de la aplicacion

[✅]registrar mi usuario
[✅]loggear mi usuario

### Visitantes sin iniciar sesion

1. Ver los lugares
2. Puede ver la informacion del lugar

### Guest

1. Ver los lugares
2. Puede ver la informacion del lugar
3. Reservar
4. Dar un score una vez finalizada la reservacion


### Host

1. Ver los lugares
2. Puede ver la informacion del lugar
3. Reservar
4. Dar un score una vez finalizada la reservacion
5. Crear Lugares
6. Cancelar reservaciones en los lugares donde es host
7. Puede ver pefiles de usuario
8. Puede ver todos los lugares que le pertenecen
9. Editar el lugar
10. Eliminar el lugar



### Admind 

1. Ver los lugares
2. Puede ver la informacion del lugar
3. Reservar
4. Dar un score una vez finalizada la reservacion
5. Puede ver pefiles de usuario
6. Editar el lugar
7. Eliminar el lugar
8. Modificar roles
9. Eliminar un usuario
10. Modificar un usuario
11. Ver lugares de los hbsts


### Accommodations


/api/v1/accommodations

- /
- - GET

- /:id
- - GET
- - DELETE
- - PUT

- /:placeid/make-accommodation
- - POST

- /:id/make-reservation 
- - POST (CREA UNA RESERVACION)


### Reservations

/api/v1/reservations


- /
- - GET

- /:id
- - GET
- - PUT
- - DELETE