// Import stylesheets
import './style.css';

import { FooComponent } from './app/foo/foo.component';
import { bootstrapComponent } from './lib/core';

const appRoot: HTMLElement = document.getElementById('app-root');
bootstrapComponent(FooComponent, appRoot);
