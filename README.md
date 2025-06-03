# BuDemo
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

# Prerequisites
Before you begin, make sure your development environment includes `Node.js®` and an npm package manager.

## Visual Studio Code
1. Installation: [https://code.visualstudio.com/]
2. Recommended Extensions: 
        Angular TypeScript Snippets for VS Code
        Angular Language Service

### StackBlitz
StackBlitz is an online IDE which supports Angular and React development projects out-of-the box.
[https://stackblitz.com/]


## Node.js
Angular requires a current, active LTS, or maintenance LTS version of Node.js. See the engines key for the specific version requirements in our [package.json](https://unpkg.com/@angular/cli/package.json)
To check your version, run node -v in a terminal/console window.
To get Node.js, go to [nodejs.org](https://nodejs.org/).

## npm package manager
Angular, the Angular CLI, and Angular apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have an npm package manager.
This setup guide uses the npm client command line interface, which is installed with Node.js by default.
To check that you have the npm client installed, run `npm -v` in a terminal/console window.


# Install the Angular CLI
You use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.
Install the Angular CLI globally.
To install the CLI using npm, open a terminal/console window and enter the following command:
```javascript
npm install -g @angular/cli
```


# Create a workspace and initial application
You develop apps in the context of an Angular workspace.
To create a new workspace and initial starter app:

1. Run the CLI command ng new and provide the name my-app, as shown here:
```javascript
ng new my-app
```
2. The `ng new` command prompts you for information about features to include in the initial app. Accept the defaults by pressing the Enter or Return key.

The Angular CLI installs the necessary Angular npm packages and other dependencies. This can take a few minutes.
The CLI creates a new workspace and a simple Welcome app, ready to run.


## Angular routing
When we execute the `ng new` command, we will be asked if we want to add angular routing. This will include a Routing Module out of the box.


## SASS vs SCSS
The `ng new` command prompts also if we want to use a [CSS preprocessor](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor) or plain CSS. If you have doubts about the differences between SCSS and SASS, here are a couple of quotes from the [official webpage](https://sass-lang.com/):

> "Sass has two syntaxes. The most commonly used syntax is known as “SCSS” (for “Sassy CSS”), and is a superset of CSS3’s syntax. This means that every valid CSS3 stylesheet is valid SCSS as well. SCSS files use the extension .scss."
> "The second, older syntax is known as the indented syntax (or just “.sass”). Inspired by Haml’s terseness, it’s intended for people who prefer conciseness over similarity to CSS. Instead of brackets and semicolons, it uses the indentation of lines to specify blocks. Files in the indented syntax use the extension .sass."


# Run the application
The Angular CLI includes a server, so that you can easily build and serve your app locally.

1. Go to the workspace folder (my-app).
2. Launch the server by using the CLI command ng serve, with the --open option.

```javascript
cd my-app
ng serve --open
```

The `ng serve` command launches the server, watches your files, and rebuilds the app as you make changes to those files.
The `--open` (or just `-o`) option automatically opens your browser to `http://localhost:4200/`.



# Why Angular?
The original version of Angular is now officially called AngularJS. This includes all versions of Angular that start with 1, whether that's 1. 0 or 1. 7. All versions of Angular 1 are the older framework, which is officially titled AngularJS. The current version of Angular, and the one that this course is about, is simply called Angular. This includes versions 2 and beyond.

### Expressive HTML
Angular makes our HTML more expressive. It powers up our HTML with features such as if conditions, for loops, and local variables.

### Powerful Data Binding
Angular has powerful data binding. We can easily display fields from our data model, track changes, and process updates from the user.

### Modular by Design
Angular promotes modularity by design. Our applications become a set of building blocks, making it easier to create and reuse content.

### Built-in Backend Integration
Angular has built-in support for communication with a back-end service. This makes it easy for our web applications to integrate with a back-end service, to get and post data, or execute server- side business logic.

### Built for Speed
Angular is built for speed. It has faster initial loads, faster change detection, and improved rendering times.

### Modern
Angular is modern. It takes advantage of features provided in the latest JavaScript standards and beyond, such as classes, modules, and decorators, yet it supports both greenfield and legacy browsers.

### Simplified API
Angular has a simplified API, it has fewer built-in directives to learn, simpler bindings, and a lower overall concept count.

### Enhances Productivity
Angular enhances our productivity to improve our day-to-day workflow.


# Versioning
| Version | Date    |
| ------- | ------- |
| ^2.0.0  | 09/2016 |
| ^4.0.0  | 03/2017 |
| ^5.0.0  | 11/2017 |
| ^6.0.0  | 05/2018 |
| ^7.0.0  | 10/2018 |
| ^8.0.0  | 05/2019 |
| ^9.0.0  | 02/2020 |


## Support policy and schedule
All of major releases are supported for 18 months.

- 6 months of active support, during which regularly-scheduled updates and patches are released.
- 12 months of long-term support (LTS), during which only critical fixes and security patches are released.


# TypeScript
TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.
TypeScript is designed for development of large applications and [transcompiles](https://en.wikipedia.org/wiki/Source-to-source_compiler) to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side execution

- [Official webpage](https://www.typescriptlang.org/index.html)


# Basics

## Modules
Angular apps are modular and Angular has its own modularity system called _NgModules_. NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. They can contain components, service providers, and other code files whose scope is defined by the containing NgModule. They can import functionality that is exported from other NgModules, and export selected functionality for use by other NgModules.
Every Angular app has at least one NgModule class, the root module, which is conventionally named AppModule and resides in a file named `app.module.ts`. You launch your app by _bootstrapping_ the root NgModule.
While a small application might have only one NgModule, most apps have many more _feature modules_. The _root_ NgModule for an app is so named because it can include child NgModules in a hierarchy of any depth.
```javascript
ng g m new-module
```


## Components
A _component_ controls a patch of screen called a _view_. For example, individual components define and control each of the following views from the Tutorial:

- The app root with the navigation links.
- The list of heroes.
- The hero editor.

You define a component's application logic—what it does to support the view—inside a class. The class interacts with the view through an API of properties and methods.
```javascript
ng g c new-component
```


## Services
Service is a broad category encompassing any value, function, or feature that an app needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.
Angular distinguishes components from services to increase modularity and reusability. By separating a component's view-related functionality from other kinds of processing, you can make your component classes lean and efficient.
Ideally, a component's job is to enable the user experience and nothing more. A component should present properties and methods for data binding, in order to mediate between the view (rendered by the template) and the application logic (which often includes some notion of a model).
A component can delegate certain tasks to services, such as fetching data from the server, validating user input, or logging directly to the console. By defining such processing tasks in an injectable service class, you make those tasks available to any component. You can also make your app more adaptable by injecting different providers of the same kind of service, as appropriate in different circumstances.
Angular doesn't enforce these principles. Angular does help you follow these principles by making it easy to factor your application logic into services and make those services available to components through dependency injection.
```javascript
ng g s new-service
```


## Dependency Injection
DI is wired into the Angular framework and used everywhere to provide new components with the services or other things they need. Components consume services; that is, you can _inject_ a service into a component, giving the component access to that service class.
To define a class as a service in Angular, use the `@Injectable()` decorator to provide the metadata that allows Angular to inject it into a component as a _dependency_. Similarly, use the `@Injectable()` decorator to indicate that a component or other class (such as another service, a pipe, or an NgModule) _has_ a dependency.

- The _injector_ is the main mechanism. Angular creates an application-wide injector for you during the bootstrap process, and additional injectors as needed. You don't have to create injectors.
- An injector creates dependencies, and maintains a _container_ of dependency instances that it reuses if possible.
- A _provider_ is an object that tells an injector how to obtain or create a dependency.

For any dependency that you need in your app, you must register a provider with the app's injector, so that the injector can use the provider to create new instances. For a service, the provider is typically the service class itself.
> A dependency doesn't have to be a service—it could be a function, for example, or a value.

When Angular creates a new instance of a component class, it determines which services or other dependencies that component needs by looking at the constructor parameter types. For example, the constructor of `HeroListComponent` needs `HeroService`.
```typescript
constructor(private service: HeroService) { }
```

## Providing services
You must register at least one _provider_ of any service you are going to use. The provider can be part of the service's own metadata, making that service available everywhere, or you can register providers with specific modules or components. You register providers in the metadata of the service (in the `@Injectable()` decorator), or in the `@NgModule()` or `@Component()` metadata

- By default, the Angular CLI command `ng generate service` registers a provider with the root injector for your service by including provider metadata in the `@Injectable()` decorator.
```typescript
@Injectable({
 providedIn: 'root',
})
```
When you provide the service at the root level, Angular creates a single, shared instance of the service and injects it into any class that asks for it. Registering the provider in the `@Injectable()` metadata also allows Angular to optimize an app by removing the service from the compiled app if it isn't used.

- When you register a provider with a specific NgModule, the same instance of a service is available to all components in that NgModule. To register at this level, use the `providers` property of the `@NgModule()` decorator,

```typescript
@NgModule({
  providers: [
  BackendService,
  Logger
 ],
 ...
})
```

When you register a provider at the component level, you get a new instance of the service with each new instance of that component. At the component level, register a service provider in the `providers` property of the `@Component()` metadata.

```typescript
@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})
```


## Routing
Routing provides a way for the user to navigate between the many views of the application.


## Observables
Angular makes use of observables as an interface to handle a variety of common asynchronous operations. For example:

- You can define custom events that send observable output data from a child to a parent component.
- The HTTP module uses observables to handle AJAX requests and responses.
- The Router and Forms modules use observables to listen for and respond to user-input events.


# Presentation
https://docs.google.com/presentation/d/1n0dt5kXRUH3Bg05dChkmsjoSS0bgSQT16pXoNX7gAPI/edit?ts=5e69455e#slide=id.p


# Further reading

1. [Angular: The Big Picture](https://app.pluralsight.com/library/courses/ng-big-picture)
2. [Angular: Getting Started](https://app.pluralsight.com/library/courses/angular-2-getting-started-update)
3. Official [Getting Started](https://angular.io/start)
