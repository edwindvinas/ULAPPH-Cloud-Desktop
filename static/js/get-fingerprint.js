//gets the fingerprint of your browser
new Fingerprint2().get(function(result, components){
        console.log(result); //a hash, representing your device fingerprint
        console.log(components); // an array of FP components
        //save to ls
        if(typeof(Storage) !== "undefined") {
                localStorage['fingerprint'] = result;
        }
});