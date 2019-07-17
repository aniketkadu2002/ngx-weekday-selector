# NGX Weekday Selector Component

Angular component for selecting weekday built using Bootstrap CSS and ng-bootstrap only. No dependencies on 3rd party script.

## Table of Contents

- [Demo](#demo)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Supported browsers](#supported-browsers)
- [Getting help](#getting-help)
- [You think you've found a bug?](#you-think-youve-found-a-bug)
- [Contributing to the project](#contributing-to-the-project)
- [Code of conduct](#code-of-conduct)

## Demo
The src/app folder contains an example of how to use the comonent. 
Please check the component in action on https://angular-6gzkpe.stackblitz.io

## Dependencies

The only two dependencies are [Angular](https://angular.io) and [Bootstrap 4](https://getbootstrap.com) CSS.
Here is the list of minimal required versions:

ngx-weekday-selector| ng-bootstrap | Angular | Bootstrap CSS | 
--------------------| ------------ | ------- | ------------- |
1.x.x               | 5.0.0        | 8.0.0   | 4.3.1         |

## Installation

You need to have an Angular project with the supported Angular version. We strongly recommend using [Angular CLI](https://cli.angular.io) for this.

You also need to add Bootstrap 4 CSS to your application by using your preferred way (it really depends on the setup you're using). Ex. for Angular CLI you can [get Bootstrap from npm](https://www.npmjs.com/package/bootstrap) and update your `angular.json` with something like:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
]
```

Please note that you need only CSS and **should not** add other JavaScript dependencies like `bootstrap.js`, `jQuery` or `popper.js`.

After installing the above dependencies, install `ng-bootstrap` via:
```shell
npm install --save @ng-bootstrap/ng-bootstrap
```

Once installed you need to import our main module:
```js
import { NgxWeekDaySelectorModule } from 'ngx-week-day-selector';

@NgModule({
  ...
  imports: [NgxWeekDaySelectorModule, ...],
  ...
})
export class YourAppModule {
}
```

Usage Example:

```html
<ngx-week-day-selector [weekdays]="daysOfTheWeek" size="sm" [defaultSelection]="default" (onDaySelected)="onSelection($event)"></ngx-week-day-selector>
```