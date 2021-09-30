/** #1
 * Compiler, Transpiler and Interpreter
 */

/**
    Compiler - compiles code to a lower level code.
    Example:
    "Developer code" -> "Machine code"
    PHP -> C
    Java -> bytecode

    Transpiler - compiles code to same level of code/abstraction.
    Example: -- BAbel
    "Developer code" -> "Another developer code or version"
    JavaScript ES2015+ -> JavaScript ES5


    Interpreter - interprets code, not really in the same class/league/context with the two above.
    Example: php.exe
    "Your PHP code/scripts inside index.php" -> "Results to html or just like pure index.html"
 * 
 */


/**
 * #2
 * AOT and JIT compiler -- JIt compilataion is by default. but from Angular 9 AOT compilation will be default
 * @link https://www.geeksforgeeks.org/what-is-aot-and-jit-compiler-in-angular/
 * 
 * You can compile your angular application in two ways: JIT and AOT. Both are suitable for a different scenario like you can use JIT for development mode and AOT is better in production mode.  Implementing features and debugging is easy in JIT mode since you have to map files while AOT does not have it. However, that AOT provides a big benefit to angular developers for production mode by reducing bundle size and making your app render faster.


    When we build a aplication there is 5 bundle gets created
        inline -- inline.bundle.js
        main -- main.bundle.js
        polyfills -- polyfills.bundle.js
        styles -- styles.bundle.js
        vendor -- vendor.bundle.js
       
    vendor- contains compiler (half of the framework), and angular framework
    install source-map-explorer --dev
    By default JIT compilation
     
 */

/**
 * Angular good 25 Question
 * @link https://www.youtube.com/watch?v=-jeoyDJDsSM&ab_channel=Questpond
 */

/**
 * Reason for slow angualr app
 * @link https://blog.bitsrc.io/top-reasons-why-your-angular-app-is-slow-c36780a0a289
 * 
    * make sure you use ChangeDetection.OnPush and TrackBy for arrays
    * Render less often by surgically triggering change detections on your components. Run outside Zone when needed.
    * Try to render less using a variety of techniques such as virtual scrolling and lazy rendering
    * Don’t listen to everything: subscribe to only the items that are visible, and subscribe to only one global event listener
        * Micro-optimizations
            * se a Custom Iterable Differ
            * Turn everything into for-loops, scrap filter, reduce and map. Use break and continue to reduce the number of iterations
            * Maintain the shape of your objects. Learn more about how Angular is so fast watching this video from Misko Hevery
            * 
            
    How we make Angular fast: 
    @link https://www.youtube.com/watch?v=EqSRpkMRyY4&ab_channel=AngularConnect
    * inlinig - opt deopt
    * VM - virtual machine -- VM layout objects -- how ivy does things
    * take object having property and put them in array  by seperating keys and values and storing them in different array
    * 
    *  
    @link https://www.youtube.com/watch?v=Tlmx1PbP8Qw&t=6s&ab_channel=AngularConnect
 */


/**
 *  Directives: Help you to attach behaviour with html - change behaviour of HTML DOM
 * [hidden], {{value}}, [ngclass], [ngstyle], [(ngModel)]
 * 
    three type: 
        * Structural - add or remove new element *ngFor, *ngIf, *ngSwitch
        * Attribute - change  the behaviour and lokk and feel of elelment ngClass, ngStyle
        * Component - custom component  - custome template - directive templates- user control - self contained directives
 * 
 * 
 * routing - is  a collection - having path and component can also have authguard like canActivate
    * let routes = [
    * { path: '', component: HomeComponent}
    * ]
    * <router-outlet><router-outlet>
    * [routerLink]= "['']"
    * this.route.navigate(['/Home'])
    * 
    * 
 * Lazy loading: - on demand loading
    * Suppose - if you have multiple module  - Home and customer - customer module only load when it needed
    * How it can be achieved by using two things:
        * Divede your project in seperate separe modules
        * You need two use loadChildren in routes collection and provide module path 
 * 
 * Services in Angular: 
 * Dependency Injection:  - 
    * application design pattern rather than creating   object instances from whithin the component, Angualr injects it via the constructor
        * In angualr ned to use Provider
        * {provide: baseLogger, useClass: base class}
        * 
        * Benefits:
        * Decoupling -you can change at one place you dont have to make changes to other places
    * 
: ng Build and ng serve
ng serve- build in memory
ng-build - build in hard disk in dist folder 
--prod build for production - like minifying and removing comment and unused code

*  @HostBinding and @HostLister()
@link tutorials https://www.youtube.com/watch?v=nRrbYGXE8xQ&ab_channel=Geek97
code to play - https://stackblitz.com/edit/ngindia?file=src%2Fapp%2FDemo.directive.ts
*Steps to create custome directives:
    create directives from the CLI -- ng generate directives new-app
    inject services ElementRef and Renderer
    Rgister inside the module
    Use your directives
*
HostElement
constist of @HostBinding and @HostLister()
Hostlistern- whenever you want to capture of Host Element you use Host listener
HostBinding - if you want to capture property of your host element

@HostBinding('style.border') border: string;
@HostListener('mouseover') onmouseover(){
    this.border = '10px solid blue';
    this.changecolor('green')
}

* ng-template and ng-content and ng-container
@link - https://www.freecodecamp.org/news/everything-you-need-to-know-about-ng-template-ng-content-ng-container-and-ngtemplateoutlet-4b7b51223691/
ng-tempalte - As the name suggests the <ng-template> is a template element that Angular uses with structural directives (*ngIf, *ngFor, [ngSwitch] and custom directives).
only work in the presence of structural directives
ng-tempalte itself don't get rendered

ng-container 
    The reason why many of us write this code is the inability to use multiple structural directives on a single host element in Angular. 
    The Angular <ng-container> is a grouping element that doesn't interfere with styles or layout because Angular doesn't put it in the DOM.
    when we just want to apply multiple structural directives without introducing any extra element in our DOM.

ng-content 
    create configurable components -content projection,
    multiple projection can be done

*ngTemplateOutlet : 
    They are used as a container to templates that can be reused at multiple places.
    *ngTemplateOutlet is used for two scenarios — 
        * to insert a common template in various sections of a view irrespective of loops or * condition  to make a highly configured component.


 */


