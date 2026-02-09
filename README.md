# 🐕 Plataforma web de adiestramiento canino para invitados y clientes

Proyecto desarrollado con **Angular 20** para la gestión y publicación de contenido informativo sobre **adiestramiento canino**, con sistema de **autenticación**, **roles de usuario** y **contenido personalizado**.

> Plataforma pública con acceso a contenido adicional para usuarios registrados según su rol.

---

## 📌 Descripción

Esta aplicación web tiene como objetivo ofrecer una **plataforma informativa y de gestión de clientes** para mi uso personal como adiestradora.

Incluye:

* Contenido público para visitantes.
* Contenido privado y personalizado para usuarios autenticados.
* Gestión de roles y permisos.
* Panel de administración.

El proyecto está orientado tanto a clientes finales como a administradores y entrenadores.

---

## ✨ Funcionalidades principales

* 🌐 **Zona pública** con información general:

  * Servicios
  * Métodos de adiestramiento
  * Contacto
  * Blog / artículos

* 🔐 **Sistema de autenticación**:

  * Registro e inicio de sesión
  * Recuperación de contraseña

* 👥 **Roles de usuario**:

  * Invitado
  * Cliente
  * Administrador

* 🧩 **Contenido dinámico según rol**:

  * Material exclusivo
  * Seguimiento de perros
  * Historial de sesiones
  * Panel administrativo

* ⚙️ **Panel de administración**:

  * Gestión de usuarios
  * Gestión de contenido
  * Gestión de roles

---

## 🏗️ Arquitectura

* **Framework:** Angular 20
* **Arquitectura:** Modular + Lazy Loading
* **Estado:** Services + RxJS
* **Autenticación:** [Por determinar]
* **Estilos:** SCSS / Bootstrap / Material
---

## 📁 Estructura del proyecto

```
src/
 ├── app/
 │   ├── core/        # Servicios globales, guards, interceptores
 │   ├── shared/      # Componentes reutilizables
 │   ├── features/    # Módulos por funcionalidad
 │   ├── layouts/     # Layouts generales
 │   └── app.routes.ts
 ├── assets/
 └── environments/
```

---

## 🚀 Instalación y ejecución

### Requisitos

* Node.js >= 20
* Angular CLI >= 20


## 🔐 Roles y permisos

| Rol           | Permisos principales             |
| ------------- | -------------------------------- |
| Invitado      | Acceso a contenido público       |
| Cliente       | Contenido exclusivo, seguimiento |
| Administrador | Control total del sistema        |

---

## 🗺️ Roadmap: a dónde nos podemos dirigir

* [ ] Gestión de reservas online
* [ ] Sistema de pagos
* [ ] Chat entrenador-cliente
* [ ] Panel de métricas
* [ ] App móvil (Ionic)

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.

---

## 👤 Autor

**Gabriela Barton Cantín**

Proyecto personal para plataforma de adiestramiento canino.

---

## 🐶 Nota

Este proyecto nace con el objetivo de mejorar la experiencia de clientes y entrenadores, ofreciendo una plataforma clara, útil y moderna.
