### #1 Angualr pipe

> Pipe and PipeTransform from Angular core library
```typescript
@Pipe({name: 'lowercase'})
export class toLowerCase implements PipeTransform{
  transform(str: string): string{
    return str.toLowerCase();
  }
}
```

### #2 Interceptor

> With interception, you declare interceptors that inspect and transform HTTP requests from your application to a server. The same interceptors can also inspect and transform a server's responses on their way back to the application. Multiple interceptors form a forward-and-backward chain of request/response handlers.> Pipe and PipeTransform from Angular core library
> 
> The next object represents the next interceptor in the chain of interceptors.-
```typescript
Injectable()
export class NoopInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return return next.handle(req);
  }
}
```

### #3 Sharing data between components

There are many ways:
1. Parent to Child: Sharing Data via Input
2. Child to Parent: Sharing Data via ViewChild
3. Child to Parent: Sharing Data via Output() and EventEmitter
4. Pass data in parameter: get them using activatedRoute and snapshots
5. Unrelated components: By using data service - normal set and get methods
6. Unrelated components: By subjects - behaviourSubject is best approach  
    why Behavour subject
      1. It will always return the current value on subscription - there is no need to call onnext
      2. It has a getValue() function to extract the last value as raw data.
      3. It ensures that the component always receives the most recent data.
```typescript
// data service class -- using data service
@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}

// parent component
export class ParentComponent implements OnInit, OnDestroy {
  message:string;
  subscription: Subscription;

  constructor(private data: DataService) { }
  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

// from sibling
export class SiblingComponent implements OnInit, OnDestroy {

  message:string;
  subscription: Subscription;

  constructor(private data: DataService) { }
  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }
}
```
[For details article read here](https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/)



### #4 is Angular Service Singleton ?

    By default, when you create a service using the below CLI command, 

> ng g s app

  AppService is singleton, however it can be re-provided to create more objects of it. 

  Say, you again re provide AppService in one of the components's providers, then Angular creates one more object of the AppService. 

  (See detailed videos) [https://www.youtube.com/watch?v=vd-2VUC7jng]


### #5 AsyncPipes

The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted. When a new value is emitted, the async pipe marks the component to be checked for changes. When the component gets destroyed, the async pipe unsubscribes automatically to avoid potential memory leaks.


### #6 Safe navigation
The Angular safe navigation operator, ? , guards against null and undefined values in property paths. Here, it protects against a view render failure if item is null .


### #7 Ahead-of-time (AOT) compilation

An Angular application consists mainly of components and their HTML templates. Because the components and templates provided by Angular cannot be understood by the browser directly, Angular applications require a compilation process before they can run in a browser.

The Angular ahead-of-time (AOT) compiler converts your Angular HTML and TypeScript code into efficient JavaScript code during the build phase before the browser downloads and runs that code. Compiling your application during the build process provides a faster rendering in the browser.

### #8 Ngrx  == rxjs and redux
  Store is RxJS powered global state management for Angular applications, inspired by Redux. Store is a controlled state container designed to help write performant, consistent applications on top of Angular.

    * Actions describe unique events that are dispatched from components and services.
    * State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state.
    * Selectors are pure functions used to select, derive and compose pieces of state.
    * State is accessed with the Store, an observable of state and an observer of actions.

![Broken image](https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png)
