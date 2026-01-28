# Angular User Directory

A modern Angular application for managing and displaying user information. This project provides a comprehensive user directory system with features for listing, viewing, and creating user profiles.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Building](#building)
- [Testing](#testing)
- [API Integration](#api-integration)
- [Routing](#routing)
- [Additional Resources](#additional-resources)

## Overview

Angular User Directory is a single-page application (SPA) built with Angular 21 that demonstrates modern Angular development practices. The application provides a user management interface with lazy-loaded modules, reactive forms, and HTTP client integration with external APIs.

## Features

- **User List View** with pagination support and loading spinner
- **Detailed User Profile View** with comprehensive user information
- **User Creation Form** with dynamic skills management (add/remove skills)
- **User Work List Module** - New feature for managing user work items
- **Lazy Loading** for optimized performance
- **Reactive Forms** with FormArray for dynamic form fields
- **HTTP Client** integration with JSONPlaceholder API
- **Angular Material UI** components (Paginator, etc.)
- **Enhanced UI/UX** with icons, loading states, and smooth animations
- **Responsive design** with modern SCSS styling
- **Type-safe development** with TypeScript
- **Unit testing** with Vitest

## Technology Stack

### Core Dependencies

- **Angular**: 21.0.0 - Progressive web application framework
- **Angular Router**: 21.0.0 - Navigation and routing
- **Angular Material**: 21.1.1 - Material Design components
- **Angular CDK**: 21.1.1 - Component Development Kit
- **Angular Forms**: 21.0.0 - Reactive and template-driven forms
- **Angular Animations**: 21.1.1 - Animation support
- **RxJS**: 7.8.0 - Reactive programming library
- **TypeScript**: 5.9.2 - Static typing for JavaScript

### Development Tools

- **Angular CLI**: 21.0.5 - Command-line interface
- **Vitest**: 4.0.8 - Unit testing framework
- **JSDOM**: 27.1.0 - JavaScript implementation of web standards
- **Prettier**: Code formatting (configured)

## Project Structure

```
angular-user-directory/
├── src/
│   ├── app/
│   │   ├── user-list-modules/          # Feature module for user management
│   │   │   ├── container/               # Smart components
│   │   │   │   ├── user-list/          # User list component
│   │   │   │   ├── user-detail/        # User detail component
│   │   │   │   └── create-user/        # Create user component with skills form
│   │   │   ├── services/               # Business logic services
│   │   │   │   ├── user-list-service.ts
│   │   │   │   └── user-list-form-service.ts
│   │   │   ├── types/                  # TypeScript type definitions
│   │   │   ├── user-list-modules-module.ts
│   │   │   └── user-list-routing.module.ts
│   │   ├── user-work-list-module/      # Feature module for user work management
│   │   │   ├── container/               # Smart components
│   │   │   │   └── user-works-list/    # User works list component
│   │   │   ├── services/               # Business logic services
│   │   │   │   └── user-work-services.ts
│   │   │   ├── types/                  # TypeScript type definitions
│   │   │   │   └── user-work.type.ts
│   │   │   ├── user-work-list-module-module.ts
│   │   │   └── user-work-route.ts
│   │   ├── app.config.ts               # Application configuration
│   │   ├── app.routes.ts               # Root routing configuration
│   │   ├── app.ts                      # Root component
│   │   ├── app.html                    # Root template
│   │   └── app.scss                    # Root styles
│   ├── index.html                      # Main HTML file
│   ├── main.ts                         # Application entry point
│   └── styles.scss                     # Global styles
├── public/                             # Static assets
├── angular.json                        # Angular CLI configuration
├── package.json                        # Project dependencies
├── tsconfig.json                       # TypeScript configuration
└── README.md                           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm 10.9.2 or higher
- Angular CLI 21.0.5

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AbdurRahman-202416/angular-user-directory.git
cd angular-user-directory
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200/`

## Development

### Development Server

To start a local development server:

```bash
ng serve
```

Or use the npm script:

```bash
npm start
```

The application will automatically reload when you modify any source files.

### Code Scaffolding

Generate new components:

```bash
ng generate component component-name
```

Generate new services:

```bash
ng generate service service-name
```

For a complete list of available schematics:

```bash
ng generate --help
```

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build the project for production
- `npm run watch` - Build and watch for changes in development mode
- `npm test` - Run unit tests

## Building

To build the project for production:

```bash
ng build
```

Or:

```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory. The production build optimizes the application for performance and speed with features like:
- Ahead-of-Time (AOT) compilation
- Tree shaking
- Minification
- Output hashing for cache busting

### Build Budgets

The project is configured with the following build budgets:
- Initial bundle: 500kB warning, 1MB error
- Component styles: 4kB warning, 8kB error

## Testing

### Unit Tests

The project uses Vitest as the test runner. To execute unit tests:

```bash
ng test
```

Or:

```bash
npm test
```

Test files are co-located with their corresponding components and services with the `.spec.ts` extension.

## API Integration

The application integrates with the JSONPlaceholder API for demonstration purposes.

### User List Service

Located at: `src/app/user-list-modules/services/user-list-service.ts`

**Available Methods:**

- `getAllUsersList()`: Fetches all users from the API
- `getUserById(id: number)`: Fetches a specific user by ID
- `getUsersPaginated(page: number, limit: number)`: Fetches paginated user data

**API Endpoint:**

```
https://jsonplaceholder.typicode.com/users
```

### Example Usage

```typescript
import { UserListService } from './services/user-list-service';

constructor(private userService: UserListService) {}

loadUsers() {
  this.userService.getAllUsersList().subscribe(users => {
    console.log(users);
  });
}
```

## Dynamic Forms with FormArray

### Skills Management in User Creation

The Create User form includes a dynamic skills management feature using Angular's `FormArray`. This allows users to add or remove multiple skill entries dynamically.

**Implementation Details:**

The `UserListFormService` creates a FormArray for skills:

```typescript
createUserForm(): FormGroup {
  return this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    address: [''],
    skills: this.fb.array([this.createSkillGroup()]),
  });
}

createSkillGroup(): FormGroup {
  return this.fb.group({
    skillsName: ['', [Validators.required]],
  });
}
```

**Component Methods:**

```typescript
get skills(): FormArray {
  return this.userForm.get('skills') as FormArray;
}

addSkill() {
  this.skills.push(this.userFormService.createSkillGroup());
}

removeSkill(index: number) {
  if (this.skills.length > 1) {
    this.skills.removeAt(index);
  }
}
```

**Features:**
- Add unlimited skill entries
- Remove individual skills (minimum 1 required)
- Individual validation for each skill
- Responsive UI with styled add/remove buttons

## Routing

### Route Structure

The application uses lazy loading for optimal performance:

**Root Routes** (`app.routes.ts`):
- `/` - User Management Module (lazy loaded)
- `/work` - User Work List Module (lazy loaded)

**User Module Routes** (`user-list-routing.module.ts`):
- `/` - User list view
- `/user-details/:id` - User detail view
- `/create-user` - Create user form

**User Work Module Routes** (`user-work-route.ts`):
- `/work/user-work` - User work list view

### Navigation Example

```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {}

navigateToUserDetail(userId: number) {
  this.router.navigate(['/user-details', userId]);
}
```

## Application Configuration

### Providers

The application is configured with the following providers in `app.config.ts`:

- `provideBrowserGlobalErrorListeners()` - Global error handling
- `provideRouter(routes)` - Routing configuration
- `provideHttpClient()` - HTTP client for API calls
- `provideAnimationsAsync()` - Async animations support

### Styling

The project uses SCSS for styling with:
- Global styles in `src/styles.scss`
- Component-specific styles co-located with components
- Angular Material theming support

### Code Formatting

Prettier is configured with the following settings:
- Print width: 100 characters
- Single quotes enabled
- Angular parser for HTML files

## Browser Support

The application supports modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Additional Resources

### Angular Documentation

- [Angular Documentation](https://angular.dev/)
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [Angular Material Components](https://material.angular.io/)

### Project Dependencies

- [RxJS Documentation](https://rxjs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev/)

## Contributing

When contributing to this project:

1. Follow the existing code style and conventions
2. Write unit tests for new features
3. Update documentation as needed
4. Ensure all tests pass before submitting changes
5. Use meaningful commit messages

## License

This project was generated using Angular CLI version 21.0.5.
# angular-user-directory
