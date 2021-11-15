/* eslint-disable */
const gulp = require("gulp");
const gulpLivereload = require("gulp-livereload");
const { createProxyMiddleware } = require('http-proxy-middleware');
const gulpConnect = require("gulp-connect");

/* =========================================================== */
/* Tasks                                                       */
/* =========================================================== */

/* =========================================================== */
/* Proxy server & livereload Tasks                             */
/* =========================================================== */

/**
 * La variable SERVER_PROXY contiene el servidor que se utiliza de base
 * para el proxy en caso de desarrollo local.
 */
const SERVER_PROXY = "https://services.odata.org";
const SOURCE_PATH = "./webapp";
const LOCALHOST = "localhost";
const PORT = 3000;
const IDENTIFICATOR_PROXY = "/oData/";
const PATH_PROXY = "/";

/**
 * Start web server with a proxy
 * SOURCE_PATH: Local folder in development
 * SERVER_PROXY: Variable to define target host
 */
gulp.task("webserver", function (done) {
    console.log("Starting webserver task...");
    var oProxyOptions = {};
    if (SERVER_PROXY) {
        oPathRewrite = {};
        oPathRewrite[`^${IDENTIFICATOR_PROXY}`] = PATH_PROXY;
        oProxyOptions = createProxyMiddleware(IDENTIFICATOR_PROXY, {
            target: SERVER_PROXY,
            changeOrigin: true,
            secure: false,
            pathRewrite: oPathRewrite
        });
    }

    gulpConnect.server({
        root: SOURCE_PATH,
        directoryListing: true,
        host: LOCALHOST,
        port: PORT,
        middleware: function (connect, opt) {
            return [oProxyOptions];
        }
    });
    done();
});

/**
 * Script reload task after a change is detected
 */
gulp.task("scripts", function () {
    console.log("Starting reload script task...");
    return gulp.src(SOURCE_PATH).pipe(gulpConnect.reload());
});

/**
 * Watch task to reload webserver
 */
gulp.task("watch", function (done) {
    console.log("Starting watch task...");

    console.log("Watching at " + SOURCE_PATH + "...");
    gulpLivereload.listen();
    gulp.watch([SOURCE_PATH + "/**/*"], gulp.series("scripts"));

    console.log("Finished watch task...");
    done();
});

//Run a http-server, proxying to SCP or other servers if it is needed
//and watch&reload your development
//Add livereload extension or JS file at your index file
gulp.task("runserver", gulp.series("webserver", "watch"));