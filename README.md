# 🚀 CV ANALYZER AI - Angular 19

Sistema de análisis inteligente de currículums usando IA (OpenAI GPT-4) con interfaz estilo ChatGPT.

---

## 📋 **Características**

- ✅ Análisis automático de CVs en PDF
- ✅ Evaluación con IA (OpenAI GPT-4o-mini)
- ✅ Interfaz tipo ChatGPT/OpenAI
- ✅ Scoring detallado (Formación, Experiencia, Skills, etc.)
- ✅ Envío automático de emails a candidatos aptos
- ✅ Detección automática de años de experiencia
- ✅ Validación de requisitos (GitHub, Portfolio, etc.)
- ✅ Diseño responsive con Angular Material

---

## 🛠️ **Tecnologías**

### **Frontend**
- Angular 19 (Standalone Components)
- Angular Material 19
- TypeScript 5
- SCSS
- RxJS

### **Backend** (no incluido en este repo)
- Python FastAPI
- OpenAI API (GPT-4o-mini)
- FastAPI-Mail
- PyPDF

---

## 📦 **Instalación**

### **1. Clonar repositorio**
```bash
git clone https://github.com/tu-usuario/cv-analyzer-ai.git
cd cv-analyzer-ai
```

### **2. Instalar dependencias**
```bash
npm install
```

### **3. Configurar variables de entorno**

Crear archivo `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  API_URL: 'http://localhost:8000' // URL de tu backend
};
```

Crear archivo `src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: true,
  API_URL: 'https://tu-api-production.com'
};
```

### **4. Ejecutar aplicación**
```bash
ng serve
```

Navegar a `http://localhost:4200/`

---

## 📁 **Estructura del Proyecto**

```
src/
├── app/
│   ├── core/
│   │   ├── interfaces/
│   │   │   └── ichat-response.interface.ts    # Interfaces de respuesta API
│   │   └── services/
│   │       └── cv-analizer.service.ts         # Servicio HTTP para análisis
│   │
│   ├── dashboard/
│   │   ├── layout/
│   │   │   ├── dashboard-layout.component.ts
│   │   │   ├── dashboard-layout.component.html
│   │   │   └── dashboard-layout.component.scss
│   │   └── pages/
│   │       └── cv-analizer/
│   │           ├── cv-analizer.component.ts    # Componente principal
│   │           ├── cv-analizer.component.html
│   │           └── cv-analizer.component.scss
│   │
│   └── app.routes.ts                           # Rutas de la aplicación
│
└── environments/
    ├── environment.ts                          # Config desarrollo
    └── environment.prod.ts                     # Config producción
```

---



### **Build para producción**
```bash
ng build --configuration production
```

Los archivos compilados estarán en `dist/`.

### **Variables de entorno en producción**

Asegúrate de configurar:
```typescript
// environment.prod.ts
export const environment = {
  production: true,
  API_URL: 'https://tu-backend-api.com'
};
```

---

## 📄 **Licencia**

MIT License - Puedes usar este proyecto libremente.

---

## 👨‍💻 **Autor**

Desarrollado con ❤️ usando Angular 19 + FastAPI + OpenAI
---

