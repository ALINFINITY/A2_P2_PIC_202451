# © EduConnect 2025 está bajo CC BY-NC-SA 4.0 

# Instalación del Proyecto

1: Ubíquese en la carpeta en donde desea guardar el proyecto

2: Ejecute el siguiente comando de Git para clonar el proyecto

git clone https://github.com/ALINFINITY/A2_P2_PIC_202451.git

3: Abra el proyecto dentro de un IDE de programación como VSCode

4: Ejecute el siguiente comando para instalar las dependencias del proyecto

npm install

5: Ejecute el siguiente comando para desplegar el proyecto

npm run dev

6: Ingrese al proyecto a través de localhost:5173

# Detalles del Proyecto EduConnect

EduConnect es una red social que facilita la interacción de docentes y estudiantes gracias a su sección de publicaciones y comentarios, el proyecto busca fomentar la comunicación activa tanto en escuelas como en universidades.


# Detalles Técnicos del Proyecto EduConnect

EduConnect esta desarrollado con las mas avanzadas tecnologías de desarrollo web actuales, la lógica de la plataforma esta desarrollada completamente con React + Typescript, el diseño de la plataforma se realizo con la utilización de componentes que se encuentran en los repositorios de Material UI.

* La estructura de EduConnect esta completamente desarrollada con web components.

* La navegación a través de los diferentes apartados de la plataforma se gestiona con React-Router-Dom.

* EduConnect utiliza Papers y Cards de Material UI para presentar la información y formularios al usuario.

* EduConnect cuenta con un sistema de acceso controlado a través de usuarios registrados en la plataforma.

* EduConnect cuenta con un sistema de asignación de ID's basado en números random para asegurar la consistencia de la información en: usuarios, publicaciones y comentarios.

* La creación de usuarios administradores requiere de claves de autorización a excepción de los usuarios con roles de acceso común.

* Los usuarios administradores pueden eliminar su cuenta, si el usuario administrador elimina su cuenta la se cierra la sesión.

* En EduConnect la administración de la plataforma es muy importante, motivo por el cual la plataforma cuenta con roles de Administrador y Roles de Acceso común.

- Rol de Administrador: El administrador puede: Publicar, comentar, eliminar usuarios, eliminar publicaciones y eliminar comentarios. Los usuarios administradores son creados con claves de autorización generadas por el administrador principal de la plataforma.

- Roles de acceso común: Son todos los usuarios como profesores, estudiantes, etc. Los usuarios con este rol pueden crear o eliminar sus propias publicaciones o comentarios.

* En EduConnect nos aseguramos de que la información sea consistente, por ello las entradas de todos los formularios de la plataforma son verificados antes de almacenar cualquier información, ademas, los comentarios o publicaciones que se encuentren publicados en la plataforma solo pueden ser eliminados por el usuario que los creo o por un usuario administrador.

* EduConnect cuenta con un menú de navegación muy intuitivo para facilitar la navegación de los usuarios a través de la plataforma. El menú de navegación incorpora elementos como: información de usuario actual y el botón de cerrar sesión.

* EduConnect almacena credenciales, publicaciones con sus correspondientes comentarios e indicadores de autenticación en el LocalStorage del navegador, con la finalidad de asegurar la persistencia de los datos.

* EduConnect cuenta con un sistema de autenticación dinámico, recopilamos información como: el usuario actual, validez de credenciales y rol del usuario actual para mantener tu sesión activa.

* La carpeta public del proyecto contiene todos los recursos estáticos utilizados en la plataforma

# Páginas de EduConnect

* Login

- Esta es la página principal para acceder a la plataforma. Aquí se validan las credenciales para acceder a la plataforma.

* Register

- Esta página te permite crear una cuenta en la plataforma, una vez creada tu cuenta podrás ingresar a la plataforma

* Inicio

- Es la página principal de la plataforma, en esta sección se muestran las noticias mas recientes de EduConnect.

* Acerca de

- En esta página se detalla la información de los desarrolladores de la plataforma.

* Publicaciones

- En esta página se pueden crear publicaciones o comentar publicaciones de otros usuarios.

* Administración

- Página solo accesible para usuarios Administradores, en esta página se pueden monitorizar y eliminar usuarios de la plataforma.

# Licencia del proyecto

Usted es libre de:

Compartir : copiar y redistribuir el material en cualquier medio o formato.
Adaptar : remezclar, transformar y construir a partir del material
El licenciante no puede revocar estas libertades siempre y cuando usted cumpla con los términos de la licencia.

En los siguientes términos:

Atribución — Debe dar el crédito adecuado , proporcionar un enlace a la licencia e indicar si se realizaron cambios . Puede hacerlo de cualquier manera razonable, pero no de ninguna manera que sugiera que el licenciante lo respalda a usted o a su uso.

No comercial — No puede utilizar el material con fines comerciales .
CompartirIgual: si remezclas, transformas o construyes a partir del material, debes distribuir tus contribuciones bajo la misma licencia que el original.

Sin restricciones adicionales : no puede aplicar términos legales o medidas tecnológicas que restrinjan legalmente que otros hagan cualquier cosa que permita la licencia.

Avisos:

No tiene que cumplir con la licencia para los elementos del material en el dominio público o donde su uso esté permitido por una excepción o limitación aplicable.

No se ofrecen garantías. Es posible que la licencia no le otorgue todos los permisos necesarios para el uso previsto. Por ejemplo, otros derechos, como la publicidad, la privacidad o los derechos morales, pueden limitar la forma en que utiliza el material.

Esta obra está bajo CC BY-NC-SA 4.0. 

Para ver una copia de esta licencia, visite https://creativecommons.org/licenses/by-nc-sa/4.0/