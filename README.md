**Documentación de la página web Hostingweb**

La página web Hostingweb es un sitio web de alojamiento web que ofrece servicios de compra de alojamiento web. La página web está diseñada para ser fácil de usar y atractiva para los clientes.

**Componente CombinedSidebar**

El componente CombinedSidebar es un componente principal de la página web Hostingweb. Este componente se encarga de proporcionar una navegación fácil y accesible a los diferentes componentes de la página web.

**Uso del componente CombinedSidebar**

El componente CombinedSidebar se puede usar de la siguiente manera:

```javascript
import CombinedSidebar from "./CombinedSidebar";

<CombinedSidebar activeComponentIndex={0} />;
```

Este código renderizará el componente CompañiaCard en el área de contenido principal.

**Propiedades del componente CombinedSidebar**

El componente CombinedSidebar tiene la siguiente propiedad:

- `activeComponentIndex`: Un entero que especifica qué componente se debe renderizar en el área de contenido principal.

**Componentes renderizados por el componente CombinedSidebar**

El componente CombinedSidebar renderiza los siguientes componentes:

- `Sidebar`: Un componente que renderiza una barra lateral con navegación de acordeón.
- `SidebarAbout`: Un componente que renderiza una barra lateral con información sobre la empresa.

**Referencias al código del componente CombinedSidebar**

El componente CombinedSidebar se define en el archivo `CombinedSidebar.js`. El componente usa las siguientes clases CSS:

- `combined-sidebar-container`: El contenedor principal para el componente.
- `combined-sidebar-left`: El contenedor para la barra lateral izquierda.
- `combined-sidebar-middle`: El contenedor para el área de contenido principal.
- `combined-sidebar-right`: El contenedor para la barra lateral derecha.

El componente registra la prop `activeComponentIndex` en la consola.

**Ejemplo de uso del componente CombinedSidebar**

El siguiente código muestra cómo usar el componente CombinedSidebar para renderizar el componente Servicios en el área de contenido principal:

```javascript
import CombinedSidebar from "./CombinedSidebar";

<CombinedSidebar activeComponentIndex={1} />;
```

Este código renderizará el componente Servicios en el área de contenido principal.

**Explicación del funcionamiento del componente CombinedSidebar**

El componente CombinedSidebar funciona de la siguiente manera:

1. Primero, el componente determina qué componente se debe renderizar en el área de contenido principal usando la prop `activeComponentIndex`.
2. Luego, el componente renderiza los componentes `Sidebar` y `SidebarAbout`.
3. Finalmente, el componente renderiza el componente que se determinó en el paso 1 en el área de contenido principal.

**Aplicación del componente CombinedSidebar a la página web Hostingweb**

El componente CombinedSidebar se utiliza en la página web Hostingweb para proporcionar una navegación fácil y accesible a los siguientes componentes:

- Información sobre la empresa
- Servicios que ofrece la empresa
- Soluciones que ofrece la empresa
- Lista de clientes
- Formulario de contacto

El componente CombinedSidebar permite a los clientes de la página web Hostingweb navegar fácilmente por la página web y encontrar la información que necesitan.
