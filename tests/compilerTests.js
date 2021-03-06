var mocha = require("mocha"),
    should = require("chai").should(),
    cm = require("../index.js");

describe("compiler", function () {
        // it("should start CM", function (done) {
        //     this.timeout(40 * 1000);
        //     var compiler = new cm();
        //     var onStart = compiler.start();
    
        //     onStart.then(function (success) { 
        //         success.should.be.true;
        //         done();
        //     }).catch(done);
        // });
        
        it("should start CM and output stack", function (done) {
            this.timeout(40 * 1000);
            var compiler = new cm({ onRead: function(data) {
                // console.log(data);
            }});
            var onStart = compiler.start();
    
            onStart.then(function (success) { 
                success.should.be.true;
                
                console.dir(compiler.getEntries());
                console.dir(compiler.getStack());
                
                done();
            }).catch(done);
        });
    
        // it("should clean CM", function (done) {
        //     this.timeout(40 * 1000);
        //     var compiler = new cm();
        //     var r = compiler.clean();
        //     console.log(r);
        // });

//     it("should write \"Hello World\"", function (done) {
//         this.timeout(40 * 1000);
//         var isResponseRight = false;
//         cm.setup(function (data) {
//             // console.log(data);
//             if (!isResponseRight) {
//                 isResponseRight = data.indexOf("Hello World") > -1;
//                 
//                 if(isResponseRight)
//                     console.log("data", data);
//             }
//         });
//         var onStart = cm.start();
// 
//         onStart.then(function (success) {
//             console.log("CM has started", success);
//             if (success) {
//                 cm.write("pln(\"Hello World\");");
//                 setTimeout(function() {
//                     console.log("Checking if test is valid");
//                     isResponseRight.should.be.true;
//                 }, 5000);
//             }
//         }, done).catch(done);
//     });

//     it("should write \"Hello World\"", function (done) {
//         this.timeout(40 * 1000);
//         var response = "";
//         cm.setup(function (data) {
//             console.log(data);
//             response = data;
//         });
//         var onStart = cm.start();
// 
//         onStart.then(function (success) {
//             console.log("CM has started", success);
//             if (success) {
//                 cm.runFile("./test.cm");
//                 
//                 setTimeout(function () {
//                     done();
//                 }, 5000);
//             }
//         }, done).catch(done);
//     });
    
    // it("should set environment variables", function () {
    //     var compiler = new cm();
    //     compiler.setEnvironmentVariables();
    //     
    //     process.env["CM_ARCH"].should.be.equal("win64");
    //     process.env["CM_ENVFILE_EMACS"].should.be.equal("C:\\CetDev\\version6.5\\write\\_emacs.cmenv");
    //     process.env["CM_ENVFILE_OPERATOR"].should.be.equal("C:\\CetDev\\version6.5\\write\\_operator.cmenv");
    //     process.env["CM_HOME"].should.be.equal("C:\\CetDev\\version6.5\\home");
    //     process.env["CM_LIBS"].should.be.equal("C:\\CetDev\\version6.5\\write\\data\\cm-libs\\win64");
    //     process.env["CM_ROOT"].should.be.equal("C:\\CetDev\\version6.5");
    //     process.env["CM_UNIX_HOME"].should.be.equal("C:\\CetDev\\version6.5\\home");
    //     process.env["CM_UNIX_WRITE"].should.be.equal("C:\\CetDev\\version6.5\\write");
    //     process.env["CM_VCVERSION"].should.be.equal("10");
    //     process.env["CM_WRITE"].should.be.equal("C:\\CetDev\\version6.5\\write");
    // });
    // 
    // it("should set environment variables overriding CM_ROOT", function () {
    //     var compiler = new cm(null, null, null, { cmRoot: "C:\\temp" });
    //     compiler.setEnvironmentVariables();
    //     
    //     process.env["CM_ROOT"].should.be.equal("C:\\temp");
    // });
    
    // 
    //     it("should kill CM", function () {
    //         var code = cm.kill();
    //         code.indexOf("terminated").should.be.above(-1);
    //     });
});