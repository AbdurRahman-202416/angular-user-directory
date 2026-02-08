# Angular User Directory

A modern, high-performance Angular application for managing and displaying user information. This project features a comprehensive user directory system, an advanced work management module with real-time data tables, and dynamic form integration using Formly.

## 🚀 Key Features

### 💎 User Management (Standard)
- **User List View**: Paginated list of users with search functionality and loading states.
- **Detailed User Profile**: Innovative profile view with comprehensive user information.
- **User Creation**: Form with dynamic skills management (add/remove skills) using `FormArray`.

### ⚡ Work Management (Advanced)
- **Premium Real-Time Datatable**: Advanced implementation using `@swimlane/ngx-datatable` featuring:
  - Custom cell templates with visual avatars.
  - Interactive status badges (Active/Inactive) and role chips.
  - Sorting, pagination, and horizontal scrolling for large datasets.
- **Advanced Dynamic Forms (Formly)**: 
  - **12-Column Grid System**: Optimized form layout that maximizes field visibility.
  - **Repeatable Sections**: Custom "repeat" type for dynamic lists (e.g., Skills).
  - **Conditional Logic**: Fields that appear/hide based on user selection (expressions).
  - **Complex Types**: Integration with Material Datepicker and Select inputs.

### 🎨 Design & UX
- **Modern Dashboard Layout**: Clean, responsive interfaces with high-quality Material Design cards.
- **Premium Aesthetics**: Sophisticated typography, subtle shadow systems, and balanced color palettes.
- **Responsive Navigation**: Global Navbar for seamless transitions between modules.

## 🛠️ Technology Stack

- **Angular**: 21 - Modern SPA framework with Standalone Components.
- **Angular Material**: 21 - Premium UI component library.
- **@ngx-formly**: 7.x - Metadata-driven dynamic forms.
- **@swimlane/ngx-datatable**: 22.x - High-performance complex tables.
- **RxJS**: 7.8 - Reactive state management.
- **Vitest**: 4.0 - Next-generation testing framework.

## 📁 Project Structure

```bash
src/app/
├── user-list-modules/      # Main User Management (Standard Forms)
├── user-work-list-module/  # Advanced Work & Datatable Features
│   ├── container/
│   │   ├── test-formly/    # Redesigned Dashboard-style Formly page
│   │   └── ngx-data-table/ # Real-time interactive tables
├── shared/
│   └── formly/             # Custom Formly field types (e.g., Repeat Section)
├── formly-integration/     # Shared Formly configurations
└── app.config.ts           # Root application providers & registrations
```

## 🚀 Getting Started

1. **Clone the Repo**: `git clone https://github.com/AbdurRahman-202416/angular-user-directory.git`
2. **Install**: `npm install --legacy-peer-deps`
3. **Run**: `npm start`
4. **Visit**: `http://localhost:4200/`

## 🔗 Routing

- **Home**: `/`
- **User Details**: `/user-details/:id`
- **Create User**: `/create-user`
- **Advanced Work**: `/work/user-work`
- **Real-Time Table**: `/work/ngx-datatable`
- **Premium Formly**: `/work/formly`

---
*Built with ❤️ using Angular 21.*
