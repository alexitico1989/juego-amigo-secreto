Juego Amigo Secreto

Una aplicación web interactiva para organizar sorteos de amigo secreto de manera fácil y divertida.

Descripción

Este proyecto es una aplicación web que permite a los usuarios agregar nombres de amigos y realizar un sorteo aleatorio para determinar quién será el "amigo secreto". La aplicación está desarrollada como parte del curso de Lógica de Programación de Alura Oracle ONE Next Education.

Características

- ✅ Agregar nombres: Interfaz intuitiva para ingresar nombres de participantes
- ✅ Lista dinámica: Visualización en tiempo real de todos los participantes agregados
- ✅ Validaciones: Previene nombres vacíos y duplicados
- ✅ Sorteo aleatorio: Algoritmo de selección aleatoria para determinar el ganador
- ✅ Interfaz responsive: Diseño adaptable a diferentes dispositivos
- ✅ Ocultamiento de lista: La lista se oculta después del sorteo para mantener el misterio

Tecnologías Utilizadas

- HTML5: Estructura semántica y accesible
- CSS3: Estilos modernos con variables CSS y diseño responsive
- JavaScript: Lógica de programación y manipulación del DOM
- Google Fonts: Tipografías Inter y Merriweather

Estructura del Proyecto


amigo-secreto/
├── index.html          Estructura principal de la aplicación
├── style.css           Estilos y diseño visual
├── app.js              Lógica de programación JavaScript
├── assets/             Recursos gráficos
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md           Documentación del proyecto


Funcionalidades

Agregar Participantes
- Ingresa nombres en el campo de texto
- Presiona "Añadir" o la tecla Enter
- Los nombres se validan automáticamente
- Se previenen duplicados

Realizar Sorteo
- Requiere mínimo 2 participantes
- Algoritmo de selección aleatoria
- La lista se oculta para mantener el suspenso
- Resultado destacado visualmente

Instalación y Uso

1. Clona el repositorio
   bash
   git clone https://github.com/alexitico1989/juego-amigo-secreto.git

2. Navega al directorio
   bash
   cd amigo-secreto
   

3. Abre el archivo index.html
   - Doble clic en el archivo, o
   - Abre con tu navegador preferido, o
   - Usa un servidor local como Live Server

Conceptos de Programación Aplicados

Estructuras de Datos
- Arrays: Almacenamiento dinámico de participantes
- Objetos DOM: Manipulación de elementos HTML

Algoritmos
- Validación de datos: Verificación de entrada del usuario
- Generación aleatoria: `Math.random()` para sorteo justo
- Búsqueda: Verificación de duplicados con `includes()`

Buenas Prácticas
- Funciones modulares: Código organizado y reutilizable
- Validación del lado cliente: Experiencia de usuario fluida
- Manipulación del DOM: Actualización dinámica de la interfaz
- Event Listeners: Interactividad responsive

Aprendizajes

Este proyecto me permitió practicar y consolidar:

- Manipulación del DOM con JavaScript
- Implementación de validaciones de formulario
- Uso de arrays y métodos de JavaScript
- Diseño responsive con CSS Grid y Flexbox
- Algoritmos de selección aleatoria
- Gestión de eventos del usuario
- Organización de código limpio y documentado
