//takes an array of JavaScript File objects
    function getFiles(files) {
        return Promise.all(files.map(file => getFile(file)));
    }

    //take a single JavaScript File object
    function getFile(file) {
        var reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onerror = () => { reader.abort(); reject(new Error("Error parsing file"));}
            reader.onload = function () {

                //This will result in an array that will be recognized by C#.NET WebApi as a byte[]
                let bytes = Array.from(new Uint8Array(this.result));

                //if you want the base64encoded file you would use the below line:
                let base64StringFile = btoa(bytes.map((item) => String.fromCharCode(item)).join(""));

                //Resolve the promise with your custom file structure
                resolve({ 
                    bytes: bytes,
                    base64StringFile: base64StringFile,
                    fileName: file.name, 
                    fileType: file.type
                });
            }
            reader.readAsArrayBuffer(file);
        });
    }

    //using the functions with your file:

    file = document.querySelector('#files > input[type="file"]').files[0]
    getFile(file).then((customJsonFile) => {
         //customJsonFile is your newly constructed file.
         console.log(customJsonFile);
    });

    //if you are in an environment where async/await is supported

    files = document.querySelector('#files > input[type="file"]').files
    let customJsonFiles = await getFiles(files);
    //customJsonFiles is an array of your custom files
    console.log(customJsonFiles);
