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


