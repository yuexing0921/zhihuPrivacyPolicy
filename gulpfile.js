const gulp = require("gulp"),
  del = require("del");
const shell = require("gulp-shell");
const path = require("path");

const project = "./src";

const crxDir = "./dist";

// pem
const pemPath = `./pem/key.pem`;
// output
const outDir = "./crx/";
const manifest = require(`${project}/manifest.json`);
// crxname
const crxname = `${manifest.name}-${manifest.version}`;
gulp.task("del", cb => {
  del([crxDir]).then(paths => {
    console.log("Deleted files and folders:\n", paths.join("\n"));
    cb();
  });
});
gulp.task("copy", ["del"], () => {
  gulp.src("src/*").pipe(gulp.dest(crxDir));
});
const shellStr = `sh ./build/crxmake.sh ${outDir} ${pemPath} ${outDir} ${crxname}`;
console.log(shellStr);
gulp.task("package", ["copy"], shell.task([shellStr]));

gulp.task("default", ["del", "copy", "package"]);
