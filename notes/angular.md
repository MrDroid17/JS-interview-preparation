### #Angualr pipe

> Pipe and PipeTransform from Angular core library
```typescript
@Pipe({name: 'lowercase'})
export class toLowerCase implements PipeTransform{
  transform(str: string): string{
    return str.toLowerCase();
  }
}
```

### #Interceptor

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

### # Sharing data between components

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

