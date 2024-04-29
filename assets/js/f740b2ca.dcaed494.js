"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[29826],{2331:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"v2.x","label":"v2.x","banner":null,"badge":true,"noIndex":false,"className":"docs-version-v2.x","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\ud83d\udc4b Welcome","href":"/","docId":"welcome","unlisted":false},{"type":"category","label":"API","items":[{"type":"link","label":"\ud83d\udce6 Fiber","href":"/api/fiber","docId":"api/fiber","unlisted":false},{"type":"link","label":"\ud83d\ude80 App","href":"/api/app","docId":"api/app","unlisted":false},{"type":"link","label":"\ud83e\udde0 Ctx","href":"/api/ctx","docId":"api/ctx","unlisted":false},{"type":"link","label":"\ud83d\udccb Constants","href":"/api/constants","docId":"api/constants","unlisted":false},{"type":"link","label":"\ud83c\udf0e Client","href":"/api/client","docId":"api/client","unlisted":false},{"type":"link","label":"\ud83d\udcc3 Log","href":"/api/log","docId":"api/log","unlisted":false},{"type":"category","label":"\ud83e\uddec Middleware","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Adaptor","href":"/api/middleware/adaptor","docId":"api/middleware/adaptor","unlisted":false},{"type":"link","label":"BasicAuth","href":"/api/middleware/basicauth","docId":"api/middleware/basicauth","unlisted":false},{"type":"link","label":"Cache","href":"/api/middleware/cache","docId":"api/middleware/cache","unlisted":false},{"type":"link","label":"Compress","href":"/api/middleware/compress","docId":"api/middleware/compress","unlisted":false},{"type":"link","label":"CORS","href":"/api/middleware/cors","docId":"api/middleware/cors","unlisted":false},{"type":"link","label":"CSRF","href":"/api/middleware/csrf","docId":"api/middleware/csrf","unlisted":false},{"type":"link","label":"EarlyData","href":"/api/middleware/earlydata","docId":"api/middleware/earlydata","unlisted":false},{"type":"link","label":"Encrypt Cookie","href":"/api/middleware/encryptcookie","docId":"api/middleware/encryptcookie","unlisted":false},{"type":"link","label":"EnvVar","href":"/api/middleware/envvar","docId":"api/middleware/envvar","unlisted":false},{"type":"link","label":"ETag","href":"/api/middleware/etag","docId":"api/middleware/etag","unlisted":false},{"type":"link","label":"ExpVar","href":"/api/middleware/expvar","docId":"api/middleware/expvar","unlisted":false},{"type":"link","label":"Favicon","href":"/api/middleware/favicon","docId":"api/middleware/favicon","unlisted":false},{"type":"link","label":"FileSystem","href":"/api/middleware/filesystem","docId":"api/middleware/filesystem","unlisted":false},{"type":"link","label":"Health Check","href":"/api/middleware/healthcheck","docId":"api/middleware/healthcheck","unlisted":false},{"type":"link","label":"Helmet","href":"/api/middleware/helmet","docId":"api/middleware/helmet","unlisted":false},{"type":"link","label":"Idempotency","href":"/api/middleware/idempotency","docId":"api/middleware/idempotency","unlisted":false},{"type":"link","label":"Keyauth","href":"/api/middleware/keyauth","docId":"api/middleware/keyauth","unlisted":false},{"type":"link","label":"Limiter","href":"/api/middleware/limiter","docId":"api/middleware/limiter","unlisted":false},{"type":"link","label":"Logger","href":"/api/middleware/logger","docId":"api/middleware/logger","unlisted":false},{"type":"link","label":"Monitor","href":"/api/middleware/monitor","docId":"api/middleware/monitor","unlisted":false},{"type":"link","label":"Pprof","href":"/api/middleware/pprof","docId":"api/middleware/pprof","unlisted":false},{"type":"link","label":"Proxy","href":"/api/middleware/proxy","docId":"api/middleware/proxy","unlisted":false},{"type":"link","label":"Recover","href":"/api/middleware/recover","docId":"api/middleware/recover","unlisted":false},{"type":"link","label":"Redirect","href":"/api/middleware/redirect","docId":"api/middleware/redirect","unlisted":false},{"type":"link","label":"RequestID","href":"/api/middleware/requestid","docId":"api/middleware/requestid","unlisted":false},{"type":"link","label":"Rewrite","href":"/api/middleware/rewrite","docId":"api/middleware/rewrite","unlisted":false},{"type":"link","label":"Session","href":"/api/middleware/session","docId":"api/middleware/session","unlisted":false},{"type":"link","label":"Skip","href":"/api/middleware/skip","docId":"api/middleware/skip","unlisted":false},{"type":"link","label":"Timeout","href":"/api/middleware/timeout","docId":"api/middleware/timeout","unlisted":false}],"href":"/category/-middleware"}],"collapsed":false,"collapsible":true,"href":"/category/api"},{"type":"category","label":"Guide","items":[{"type":"link","label":"\ud83d\udd0c Routing","href":"/guide/routing","docId":"guide/routing","unlisted":false},{"type":"link","label":"\ud83c\udfad Grouping","href":"/guide/grouping","docId":"guide/grouping","unlisted":false},{"type":"link","label":"\ud83d\udcdd Templates","href":"/guide/templates","docId":"guide/templates","unlisted":false},{"type":"link","label":"\ud83d\udc1b Error Handling","href":"/guide/error-handling","docId":"guide/error-handling","unlisted":false},{"type":"link","label":"\ud83d\udd0e Validation","href":"/guide/validation","docId":"guide/validation","unlisted":false},{"type":"link","label":"\ud83c\udfa3 Hooks","href":"/guide/hooks","docId":"guide/hooks","unlisted":false},{"type":"link","label":"\u26a1 Make Fiber Faster","href":"/guide/faster-fiber","docId":"guide/faster-fiber","unlisted":false}],"collapsed":false,"collapsible":true,"href":"/category/guide"},{"type":"category","label":"Extra","items":[{"type":"link","label":"\ud83e\udd14 FAQ","href":"/extra/faq","docId":"extra/faq","unlisted":false},{"type":"link","label":"\ud83d\udcca Benchmarks","href":"/extra/benchmarks","docId":"extra/benchmarks","unlisted":false}],"collapsed":false,"collapsible":true,"href":"/category/extra"}]},"docs":{"api/app":{"id":"api/app","title":"\ud83d\ude80 App","description":"The app instance conventionally denotes the Fiber application.","sidebar":"tutorialSidebar"},"api/client":{"id":"api/client","title":"\ud83c\udf0e Client","description":"The Client struct represents the Fiber HTTP Client.","sidebar":"tutorialSidebar"},"api/constants":{"id":"api/constants","title":"\ud83d\udccb Constants","description":"Some constants for Fiber.","sidebar":"tutorialSidebar"},"api/ctx":{"id":"api/ctx","title":"\ud83e\udde0 Ctx","description":"The Ctx struct represents the Context which hold the HTTP request and response. It has methods for the request query string, parameters, body, HTTP headers, and so on.","sidebar":"tutorialSidebar"},"api/fiber":{"id":"api/fiber","title":"\ud83d\udce6 Fiber","description":"Fiber represents the fiber package where you start to create an instance.","sidebar":"tutorialSidebar"},"api/log":{"id":"api/log","title":"\ud83d\udcc3 Log","description":"Fiber\'s built-in log package","sidebar":"tutorialSidebar"},"api/middleware/adaptor":{"id":"api/middleware/adaptor","title":"Adaptor","description":"Converter for net/http handlers to/from Fiber request handlers, special thanks to @arsmn!","sidebar":"tutorialSidebar"},"api/middleware/basicauth":{"id":"api/middleware/basicauth","title":"BasicAuth","description":"Basic Authentication middleware for Fiber that provides an HTTP basic authentication. It calls the next handler for valid credentials and 401 Unauthorized or a custom response for missing or invalid credentials.","sidebar":"tutorialSidebar"},"api/middleware/cache":{"id":"api/middleware/cache","title":"Cache","description":"Cache middleware for Fiber designed to intercept responses and cache them. This middleware will cache the Body, Content-Type and StatusCode using the c.Path() as unique identifier. Special thanks to @codemicro for creating this middleware for Fiber core!","sidebar":"tutorialSidebar"},"api/middleware/compress":{"id":"api/middleware/compress","title":"Compress","description":"Compression middleware for Fiber that will compress the response using gzip, deflate and brotli compression depending on the Accept-Encoding header.","sidebar":"tutorialSidebar"},"api/middleware/cors":{"id":"api/middleware/cors","title":"CORS","description":"CORS (Cross-Origin Resource Sharing) is a middleware for Fiber that allows servers to specify who can access its resources and how. It\'s not a security feature, but a way to relax the security model of web browsers for cross-origin requests. You can learn more about CORS on Mozilla Developer Network.","sidebar":"tutorialSidebar"},"api/middleware/csrf":{"id":"api/middleware/csrf","title":"CSRF","description":"The CSRF middleware for Fiber provides protection against Cross-Site Request Forgery (CSRF) attacks. Requests made using methods other than those defined as \'safe\' by RFC9110#section-9.2.1 (GET, HEAD, OPTIONS, and TRACE) are validated using tokens. If a potential attack is detected, the middleware will return a default 403 Forbidden error.","sidebar":"tutorialSidebar"},"api/middleware/earlydata":{"id":"api/middleware/earlydata","title":"EarlyData","description":"The Early Data middleware for Fiber adds support for TLS 1.3\'s early data (\\"0-RTT\\") feature.","sidebar":"tutorialSidebar"},"api/middleware/encryptcookie":{"id":"api/middleware/encryptcookie","title":"Encrypt Cookie","description":"Encrypt Cookie is a middleware for Fiber that secures your cookie values through encryption.","sidebar":"tutorialSidebar"},"api/middleware/envvar":{"id":"api/middleware/envvar","title":"EnvVar","description":"EnvVar middleware for Fiber that can be used to expose environment variables with various options.","sidebar":"tutorialSidebar"},"api/middleware/etag":{"id":"api/middleware/etag","title":"ETag","description":"ETag middleware for Fiber that lets caches be more efficient and save bandwidth, as a web server does not need to resend a full response if the content has not changed.","sidebar":"tutorialSidebar"},"api/middleware/expvar":{"id":"api/middleware/expvar","title":"ExpVar","description":"Expvar middleware for Fiber that serves via its HTTP server runtime exposed variants in the JSON format. The package is typically only imported for the side effect of registering its HTTP handlers. The handled path is /debug/vars.","sidebar":"tutorialSidebar"},"api/middleware/favicon":{"id":"api/middleware/favicon","title":"Favicon","description":"Favicon middleware for Fiber that ignores favicon requests or caches a provided icon in memory to improve performance by skipping disk access. User agents request favicon.ico frequently and indiscriminately, so you may wish to exclude these requests from your logs by using this middleware before your logger middleware.","sidebar":"tutorialSidebar"},"api/middleware/filesystem":{"id":"api/middleware/filesystem","title":"FileSystem","description":"Filesystem middleware for Fiber that enables you to serve files from a directory.","sidebar":"tutorialSidebar"},"api/middleware/healthcheck":{"id":"api/middleware/healthcheck","title":"Health Check","description":"Liveness and readiness probes middleware for Fiber that provides two endpoints for checking the liveness and readiness state of HTTP applications.","sidebar":"tutorialSidebar"},"api/middleware/helmet":{"id":"api/middleware/helmet","title":"Helmet","description":"Helmet middleware helps secure your apps by setting various HTTP headers.","sidebar":"tutorialSidebar"},"api/middleware/idempotency":{"id":"api/middleware/idempotency","title":"Idempotency","description":"Idempotency middleware for Fiber allows for fault-tolerant APIs where duplicate requests \u2014 for example due to networking issues on the client-side \u2014 do not erroneously cause the same action performed multiple times on the server-side.","sidebar":"tutorialSidebar"},"api/middleware/keyauth":{"id":"api/middleware/keyauth","title":"Keyauth","description":"Key auth middleware provides a key based authentication.","sidebar":"tutorialSidebar"},"api/middleware/limiter":{"id":"api/middleware/limiter","title":"Limiter","description":"Limiter middleware for Fiber that is used to limit repeat requests to public APIs and/or endpoints such as password reset. It is also useful for API clients, web crawling, or other tasks that need to be throttled.","sidebar":"tutorialSidebar"},"api/middleware/logger":{"id":"api/middleware/logger","title":"Logger","description":"Logger middleware for Fiber that logs HTTP request/response details.","sidebar":"tutorialSidebar"},"api/middleware/monitor":{"id":"api/middleware/monitor","title":"Monitor","description":"Monitor middleware for Fiber that reports server metrics, inspired by express-status-monitor","sidebar":"tutorialSidebar"},"api/middleware/pprof":{"id":"api/middleware/pprof","title":"Pprof","description":"Pprof middleware for Fiber that serves via its HTTP server runtime profiling data in the format expected by the pprof visualization tool. The package is typically only imported for the side effect of registering its HTTP handlers. The handled paths all begin with /debug/pprof/.","sidebar":"tutorialSidebar"},"api/middleware/proxy":{"id":"api/middleware/proxy","title":"Proxy","description":"Proxy middleware for Fiber that allows you to proxy requests to multiple servers.","sidebar":"tutorialSidebar"},"api/middleware/recover":{"id":"api/middleware/recover","title":"Recover","description":"Recover middleware for Fiber that recovers from panics anywhere in the stack chain and handles the control to the centralized ErrorHandler.","sidebar":"tutorialSidebar"},"api/middleware/redirect":{"id":"api/middleware/redirect","title":"Redirect","description":"Redirection middleware for Fiber.","sidebar":"tutorialSidebar"},"api/middleware/requestid":{"id":"api/middleware/requestid","title":"RequestID","description":"RequestID middleware for Fiber that adds an identifier to the response.","sidebar":"tutorialSidebar"},"api/middleware/rewrite":{"id":"api/middleware/rewrite","title":"Rewrite","description":"Rewrite middleware rewrites the URL path based on provided rules. It can be helpful for backward compatibility or just creating cleaner and more descriptive links.","sidebar":"tutorialSidebar"},"api/middleware/session":{"id":"api/middleware/session","title":"Session","description":"Session middleware for Fiber.","sidebar":"tutorialSidebar"},"api/middleware/skip":{"id":"api/middleware/skip","title":"Skip","description":"Skip middleware for Fiber that skips a wrapped handler if a predicate is true.","sidebar":"tutorialSidebar"},"api/middleware/timeout":{"id":"api/middleware/timeout","title":"Timeout","description":"There exist two distinct implementations of timeout middleware Fiber.","sidebar":"tutorialSidebar"},"extra/benchmarks":{"id":"extra/benchmarks","title":"\ud83d\udcca Benchmarks","description":"These benchmarks aim to compare the performance of Fiber and other web frameworks.","sidebar":"tutorialSidebar"},"extra/faq":{"id":"extra/faq","title":"\ud83e\udd14 FAQ","description":"List of frequently asked questions. Feel free to open an issue to add your question to this page.","sidebar":"tutorialSidebar"},"guide/error-handling":{"id":"guide/error-handling","title":"\ud83d\udc1b Error Handling","description":"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.","sidebar":"tutorialSidebar"},"guide/faster-fiber":{"id":"guide/faster-fiber","title":"\u26a1 Make Fiber Faster","description":"Custom JSON Encoder/Decoder","sidebar":"tutorialSidebar"},"guide/grouping":{"id":"guide/grouping","title":"\ud83c\udfad Grouping","description":"In general, the Group functionality in Fiber behaves similarly to ExpressJS. Groups are declared virtually and all routes declared within the group are flattened into a single list with a prefix, which is then checked by the framework in the order it was declared. This means that the behavior of Group in Fiber is identical to that of ExpressJS.","sidebar":"tutorialSidebar"},"guide/hooks":{"id":"guide/hooks","title":"\ud83c\udfa3 Hooks","description":"With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of this hooks:","sidebar":"tutorialSidebar"},"guide/routing":{"id":"guide/routing","title":"\ud83d\udd0c Routing","description":"Routing refers to how an application\'s endpoints (URIs) respond to client requests.","sidebar":"tutorialSidebar"},"guide/templates":{"id":"guide/templates","title":"\ud83d\udcdd Templates","description":"Fiber supports server-side template engines.","sidebar":"tutorialSidebar"},"guide/validation":{"id":"guide/validation","title":"\ud83d\udd0e Validation","description":"Validator package","sidebar":"tutorialSidebar"},"partials/routing/route-handlers":{"id":"partials/routing/route-handlers","title":"Route Handlers","description":"Registers a route bound to a specific HTTP method."},"welcome":{"id":"welcome","title":"\ud83d\udc4b Welcome","description":"An online API documentation with examples so you can start building web apps with Fiber right away!","sidebar":"tutorialSidebar"}}}')}}]);