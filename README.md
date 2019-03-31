# NgrxDojo

Project can be cloned from Nicolas's Github with:

```bash
git clone https://github.com/nperon/ngrx-dojo.git
```

The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0. 
The following command lines were executed:

```bash
ng new ngrx-dojo
cd ngrx-dojo
npm install --save @ngrx/store
npm install --save rxjs-compat
npm install --save bootstrap
ng generate component editable-svg
ng generate module editable-svg
```

Table "styles" in Project angular.json file was complemented with new line to integrate Bootstrap style library:

```javascript
        "styles": [
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "src/styles.css"
        ],
```

Branch 04-words-from-api further requires fetching the ngrx effects package with:

```bash
npm install --save @ngrx/effects
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
